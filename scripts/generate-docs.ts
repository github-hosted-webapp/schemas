import { generateDocs } from "./helpers/generateDocs";

generateDocs(process.env.BRANCH as string)
    .then(() => console.log(`Docs generated successfully`))
    .catch(err => {
        console.log(err);
        console.error(`Failed to generate docs:`, err.message);
        process.exit(1);
    });
