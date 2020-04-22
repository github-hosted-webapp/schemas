import { path } from "./helpers/path";
import { generateSchema } from "./helpers/generateSchemas";

const types = {
    Config: {
        path: path("src/core/Config.ts"),
    },
    FileIndex: {
        path: path("src/core/FileIndex.ts"),
    },
    ModelDescriptor: {
        path: path("src/core/ModelDescriptor.ts"),
    },
    ModelDescriptors: {
        path: path("src/core/ModelDescriptors.ts"),
    },
    ModelIndex: {
        path: path("src/core/ModelIndex.ts"),
    },
};

generateSchema(types)
    .then(() => console.log(`Schemas generated successfully`))
    .catch(err => {
        console.error(`Failed to generate schemas:`, err.message);
        process.exit(1);
    });
