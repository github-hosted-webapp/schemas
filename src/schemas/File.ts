import { BaseModel } from "../core";

/**
 * Model that represents a
 */
export interface File extends BaseModel {
    path: string;
    metadata: FileMetadata;
}

/**
 * Metadata extracted from the file
 */
export interface FileMetadata {
    /**
     * Original filename
     */
    filename: string;
    /**
     * Mime-type of the file
     */
    mimeType: string;
}
