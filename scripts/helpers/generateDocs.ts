import shell from "shelljs";
import { path } from "./path";
import { version } from "../../src/version";

export async function generateDocs() {
    const versionedPath = path("docs", `v${version}`);
    const latestPath = path("docs", `latest`);

    shell.rm("-rf", versionedPath, latestPath);
    shell.mkdir("-p", versionedPath, latestPath);

    shell.cp("-r", path("docs/**/*.md"), versionedPath);
    shell.cp("-r", path("schemas"), versionedPath);

    shell.cp("-r", path("docs/**/*.md"), latestPath);
    shell.cp("-r", path("schemas"), latestPath);
}
