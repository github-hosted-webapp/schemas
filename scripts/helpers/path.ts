import { join } from "path";

export const path = (...segments: string[]) =>
    join(__dirname, "../..", ...segments);
