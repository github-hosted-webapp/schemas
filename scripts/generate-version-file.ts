import { generateVersionFile } from "./helpers/generateVersionFile";

console.log(JSON.stringify(process.env, null, 4));

generateVersionFile(process.env.BRANCH === "next")
    .then(() => console.log(`Version file generated successfully`))
    .catch(err => {
        console.log(err);
        console.error(`Failed to generate version file:`, err.message);
        process.exit(1);
    });
