import { generateVersionFile } from "./helpers/generateVersionFile";

`export const version = "0.0.0" as const;`;

generateVersionFile(process.env.VERSION_FILE_VERSION === "next")
    .then(() => console.log(`Version file generated successfully`))
    .catch(err => {
        console.log(err);
        console.error(`Failed to generate version file:`, err.message);
        process.exit(1);
    });
