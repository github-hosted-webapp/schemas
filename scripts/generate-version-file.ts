import { generateVersionFile } from "./helpers/generateVersionFile";

generateVersionFile(process.env.BRANCH === "refs/heads/next")
    .then(() => console.log(`Version file generated successfully`))
    .catch(err => {
        console.log(err);
        console.error(`Failed to generate version file:`, err.message);
        process.exit(1);
    });
