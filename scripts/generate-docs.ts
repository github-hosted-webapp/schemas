import { generateDocs } from "./helpers/generateDocs";

generateDocs()
    .then(() => console.log(`Version file generated successfully`))
    .catch(err => {
        console.log(err);
        console.error(`Failed to generate version file:`, err.message);
        process.exit(1);
    });
