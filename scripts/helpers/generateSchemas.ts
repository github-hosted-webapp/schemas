import shell from "shelljs";
import * as tsj from "ts-json-schema-generator";
import { mkdirp, writeFile } from "fs-extra";
import { basename, dirname } from "path";
import { path } from "./path";
import { homepage } from "../../package.json";
import { JSONSchema7 } from "json-schema";

const tsconfigPath = path("tsconfig.json");
const getSchemaFileName = (type: string) => `${type}.schema.json`;
const getSchemaPath = (type: string) =>
    path(`schemas/${getSchemaFileName(type)}`);
const createSchemaIdGetter = (version: string) => (type: string) =>
    `${homepage}/${version}/${getSchemaFileName(type)}`;

export async function generateSchemas(version: string) {
    const index: { [type: string]: string } = {};
    const filePaths = shell
        .ls(path("src/schemas"))
        .filter(fileName => fileName !== "index.ts")
        .map(fileName => path(`src/schemas`, fileName));

    for (const filePath of filePaths) {
        const type = basename(filePath, ".ts");

        const schema = generateSchema(
            {
                type,
                tsconfig: tsconfigPath,
                expose: "export",
                jsDoc: "extended",
                strictTuples: true,
                topRef: false,
                path: filePath,
            },
            version,
        );

        const schemaString = JSON.stringify(schema, null, 4);
        const destination = getSchemaPath(type);

        await mkdirp(dirname(destination));
        await writeFile(destination, schemaString);

        index[type] = getSchemaFileName(type);
    }

    await writeFile(path("schemas/index.json"), JSON.stringify(index, null, 4));
}

function generateSchema(config: tsj.Config, version: string) {
    if (!config.type) {
        throw new Error(`Can't generate schema, no type provided.`);
    }

    const getSchemaId = createSchemaIdGetter(version);
    const {
        $schema,
        $ref,
        $comment,
        definitions = {},
        ...schema
    } = tsj.createGenerator(config).createSchema(config.type);

    return {
        $schema,
        $id: getSchemaId(config.type),
        $ref,
        title: config.type,
        description: (definitions[config.type] as JSONSchema7)?.description,
        $comment,
        ...schema,
        definitions: (Object.entries(definitions) as [
            string,
            JSONSchema7,
        ][]).reduce(
            (definitions, [key, definition]) => ({
                ...definitions,
                [key]: {
                    title: definition.title || key,
                    ...definition,
                },
            }),
            {} as { [name: string]: JSONSchema7 },
        ),
    };
}
