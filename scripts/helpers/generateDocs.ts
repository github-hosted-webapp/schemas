import shell from "shelljs";
import { path } from "./path";
import { version } from "../../src/version";

export async function generateDocs(branch: string) {
    branch = branch.replace("refs/heads/", "");
    const versionedPath = path("docs", `v${version}`);
    const branchPath = path("docs", branch);

    if (branch === "master") {
        const latestPath = path("docs", `latest`);
        shell.rm("-rf", latestPath);
        shell.mkdir("-p", latestPath);
        shell.cp("-rf", path("docs/**/*.md"), latestPath);
        shell.cp("-rf", path("schemas/*"), latestPath);
    }

    shell.rm("-rf", versionedPath, branchPath);
    shell.mkdir("-p", versionedPath, branchPath);

    shell.cp("-rf", path("docs/*.md"), versionedPath);
    shell.cp("-rf", path("schemas/*"), versionedPath);

    shell.cp("-rf", path("docs/*.md"), branchPath);
    shell.cp("-rf", path("schemas/*"), branchPath);
}
