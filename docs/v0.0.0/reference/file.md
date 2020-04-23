# File Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json
```

Model that represents a

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | Yes | Unknown status | No | Forbidden | Forbidden | none | [File.schema.json](../File.schema.json "open original schema") |

## File Type

`object` ([File](file.md))

# File Definitions

## Definitions group FileMetadata

Reference this group by using

```json
{
    "$ref": "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata"
}
```

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [filename](#filename) | `string` | Required | cannot be null | [File](file-definitions-filemetadata-properties-filename.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/filename") |
| [mimeType](#mimeType) | `string` | Required | cannot be null | [File](file-definitions-filemetadata-properties-mimetype.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/mimeType") |

### filename

Original filename

`filename`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-definitions-filemetadata-properties-filename.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/filename")

#### filename Type

`string`

### mimeType

Mime-type of the file

`mimeType`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-definitions-filemetadata-properties-mimetype.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/definitions/FileMetadata/properties/mimeType")

#### mimeType Type

`string`

# File Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [\$schema](#$schema) | `string` | Required | cannot be null | [File](file-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/$schema") |
| [id](#id) | `string` | Required | cannot be null | [File](file-properties-id.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/id") |
| [path](#path) | `string` | Required | cannot be null | [File](file-properties-path.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/path") |
| [metadata](#metadata) | `object` | Required | cannot be null | [File](file-definitions-filemetadata.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/metadata") |

## \$schema

Link to the model schema

`$schema`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/$schema")

### \$schema Type

`string`

## id

UUID that identifies the model

`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-properties-id.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/id")

### id Type

`string`

## path

`path`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [File](file-properties-path.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/path")

### path Type

`string`

## metadata

Metadata extracted from the file

`metadata`

-   is required
-   Type: `object` ([FileMetadata](file-definitions-filemetadata.md))
-   cannot be null
-   defined in: [File](file-definitions-filemetadata.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/File.schema.json#/properties/metadata")

### metadata Type

`object` ([FileMetadata](file-definitions-filemetadata.md))
