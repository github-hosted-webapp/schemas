# FileMetadata Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata
```

Metadata extracted from the file

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | No | Unknown status | No | Forbidden | Forbidden | none | [File.schema.json\*](../File.schema.json "open original schema") |

## FileMetadata Type

`object` ([FileMetadata](file-definitions-filemetadata.md))

# FileMetadata Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [filename](#filename) | `string` | Required | cannot be null | [File](file-definitions-filemetadata-properties-filename.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/filename") |
| [mimeType](#mimeType) | `string` | Required | cannot be null | [File](file-definitions-filemetadata-properties-mimetype.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/mimeType") |

## filename

Original filename

`filename`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-definitions-filemetadata-properties-filename.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/filename")

### filename Type

`string`

## mimeType

Mime-type of the file

`mimeType`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-definitions-filemetadata-properties-mimetype.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/mimeType")

### mimeType Type

`string`
