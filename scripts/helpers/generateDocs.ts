import shell from "shelljs";
import { path } from "./path";
import { version } from "../../src/version";
import { writeFile } from "fs-extra";
import { basename } from "path";

const getArticlesPath = (...segments: string[]) =>
    path("articles", ...segments);
const getOutPath = (...segments: string[]) => path("docs", ...segments);
const getSchemasPath = (...segments: string[]) => path("schemas", ...segments);

export async function generateDocs() {
    const latestPath = getOutPath("latest");
    const versionPath = getOutPath(`v${version}`);
    const versionGlob = getOutPath(`v${version}`, "./*");
    const articlesGlob = getArticlesPath("./*");

    shell.rm("-rf", versionPath);
    shell.mkdir("-p", versionPath);
    shell.cp("-Rf", [articlesGlob, getSchemasPath("index.json")], versionPath);
    generateReference(versionPath);

    shell.rm("-rf", latestPath);
    shell.mkdir("-p", latestPath);
    shell.mkdir("-p", latestPath);
    shell.cp("-Rf", versionGlob, latestPath);

    await generateVersionsMd();
}

async function generateVersionsMd() {
    const versions = shell.ls("-d", getOutPath("./*/"));

    await writeFile(
        getOutPath("versions.md"),
        [
            `# Versions`,
            ``,
            ...versions
                .map(path => basename(path))
                .map(version => `- [${version}](${version}/README.md)`),
        ].join("\n"),
    );
}

function generateReference(outDir: string) {
    const jsonschema2md = path("node_modules/.bin/jsonschema2md");
    shell.exec(
        `${jsonschema2md} -d schemas -o ${outDir}/reference -x ${outDir}`,
    );
}
