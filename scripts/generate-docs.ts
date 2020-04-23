///<reference path="global.d.ts"/>

import { generateDocs } from "./helpers/generateDocs";
import { createErrorHandler } from "./helpers/createErrorHandler";

const fail = createErrorHandler("generate docs");

generateDocs()
    .then(() => console.log(`Docs generated successfully`))
    .catch(fail);
