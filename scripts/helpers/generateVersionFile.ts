import { nextStandardVersion } from "next-standard-version";
import { writeFile } from "fs-extra";
import { path } from "./path";

export async function generateVersionFile(nextVersion: boolean = false) {
    const version = nextVersion
        ? await nextStandardVersion({
              modulePath: path("node_modules/standard-version"),
          })
        : require("../../package.json").version;
    const fileContents = `export const version = "${version}" as const;`;

    await writeFile(path("src/version.ts"), fileContents);
}
