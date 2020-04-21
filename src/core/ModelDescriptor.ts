/**
 * A list of ModelDescriptors
 */
export type ModelDescriptors = ModelDescriptor[];

/**
 * Describes how a model is stored
 */
export interface ModelDescriptor {
    /**
     * Link to the ModelDescriptor JSON schema
     */
    $schema: string;
    /**
     * UUID that identifies the ModelDescriptor
     */
    id: string;
    /**
     * Name of the model
     */
    name: string;
    /**
     * URL to the schema of the model
     */
    schemaUrl: string;
    /**
     * URL to the index json (an URL that returns a list of all model ids)
     */
    indexUrl: string;
    /**
     * Path to the index json (an URL that returns a list of all model ids)
     * relative to the ModelDescriptors json file.
     */
    indexPath: string;
}
