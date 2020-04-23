///<reference path="global.d.ts"/>

import { generateSchemas } from "./helpers/generateSchemas";
import { createErrorHandler } from "./helpers/createErrorHandler";
import { version } from "../src/version";

const fail = createErrorHandler("generate schemas");

generateSchemas(`v${version}`)
    .then(() => console.log(`Schemas generated successfully`))
    .catch(fail);
