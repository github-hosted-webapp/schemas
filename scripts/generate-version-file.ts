import semver from "semver";
import { generateVersionFile } from "./helpers/generateVersionFile";
import { createErrorHandler } from "./helpers/createErrorHandler";
import { version } from "../src/version";

const newVersion = process.argv[2];

const fail = createErrorHandler("generate version file");

if (!newVersion || newVersion.startsWith("v") || !semver.valid(newVersion)) {
    fail(new Error(`Invalid version:`));
}

if (newVersion === version) {
    process.exit(0);
}

generateVersionFile(newVersion)
    .then(() => console.log(`Version file generated successfully`))
    .catch(fail);
