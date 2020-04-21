import { version } from "../version";

/**
 * Configuration for file storage
 */
export interface StorageConfig {
    /**
     * Path to the directory files should be stored in (relative to the repository root)
     */
    rootPath: string;
    /**
     * URL to the root of the storage
     */
    baseUrl: string;
}

/**
 * Configuration concerning models
 */
export interface ModelsConfig {
    /**
     * Path to the models index json (relative to repository root)
     */
    modelDescriptorsPath: string;
    /**
     * URL to the models index json
     */
    modelDescriptorsUrl: string;
}

/**
 * General configuration
 */
export interface Config {
    /**
     * Schema for the Config
     */
    $schema: string;
    /**
     * The version of the schema (npm package version)
     */
    schemaVersion: typeof version;
    /**
     * Configuration concerning models
     */
    models: ModelsConfig;
    /**
     * Configuration concerning file storage
     */
    storage: StorageConfig;
}
