import {BaseModel} from "../core/BaseModel";

export interface File extends BaseModel {
}

/**
 * Metadata extracted from the file
 */
export interface FileMetadata extends BaseModel {
    /**
     * Original filename
     */
    filename: string;
    /**
     * Mime-type of the file
     */
    mimeType: string;
}
