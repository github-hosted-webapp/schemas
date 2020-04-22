import shell from "shelljs";
import { path } from "./path";
import { version } from "../../src/version";

export async function generateDocs(branch: string) {
    const versionedPath = path("docs", `v${version}`);
    const latestPath = path("docs", `latest`);
    const branchPath = path("docs", branch);

    if (branch === "master") {
        shell.rm("-rf", latestPath);
        shell.mkdir("-p", latestPath);
        shell.cp("-r", path("docs/**/*.md"), latestPath);
        shell.cp("-r", path("schemas"), latestPath);
    }

    shell.rm("-rf", versionedPath, branchPath);
    shell.mkdir("-p", versionedPath, branchPath);

    shell.cp("-r", path("docs/**/*.md"), versionedPath);
    shell.cp("-r", path("schemas"), versionedPath);

    shell.cp("-r", path("docs/**/*.md"), branchPath);
    shell.cp("-r", path("schemas"), branchPath);
}
