import * as tsj from "ts-json-schema-generator";
import { mkdirp, writeFile } from "fs-extra";
import { dirname } from "path";
import { path } from "./path";

const tsconfigPath = path("tsconfig.json");
const schemaPath = (type: string) => path(`schemas/${type}.json`);

export type Types = { [name: string]: Partial<tsj.Config> };

export async function generateSchema(types: Types) {
    const index: { [name: string]: string } = {};
    const schemasMd = [`# Schemas`, ``];

    for (const [type, config] of Object.entries(types)) {
        const destination = schemaPath(type);
        const schema = tsj
            .createGenerator({
                type,
                tsconfig: tsconfigPath,
                expose: "export",
                jsDoc: "extended",
                strictTuples: true,
                topRef: true,
                ...config,
            })
            .createSchema(type);

        const schemaString = JSON.stringify(schema, null, 4);

        await mkdirp(dirname(destination));
        await writeFile(destination, schemaString);

        index[type] = `${type}.json`;
        schemasMd.push(`- [${type}](${index[type]})`);
    }

    await writeFile(schemaPath("index"), JSON.stringify(index, null, 4));
    await writeFile(path("docs/schemas.md"), schemasMd.join("\n"));
}
