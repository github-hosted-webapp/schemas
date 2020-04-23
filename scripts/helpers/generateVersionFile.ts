import { writeFile } from "fs-extra";
import { path } from "./path";

export async function generateVersionFile(version: string) {
    const fileContents = `export const version = "${version}" as const;\n`;

    await writeFile(path("src/version.ts"), fileContents);
}
