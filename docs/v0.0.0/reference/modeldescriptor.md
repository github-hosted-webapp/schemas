# ModelDescriptor Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json
```

Describes how a model is stored

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | Yes | Unknown status | No | Forbidden | Forbidden | none | [ModelDescriptor.schema.json](../ModelDescriptor.schema.json "open original schema") |

## ModelDescriptor Type

`object` ([ModelDescriptor](modeldescriptor.md))

# ModelDescriptor Definitions

# ModelDescriptor Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [\$schema](#$schema) | `string` | Required | cannot be null | [ModelDescriptor](modeldescriptor-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/$schema") |
| [id](#id) | `string` | Required | cannot be null | [ModelDescriptor](modeldescriptor-properties-id.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/id") |
| [name](#name) | `string` | Required | cannot be null | [ModelDescriptor](modeldescriptor-properties-name.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/name") |
| [schemaUrl](#schemaUrl) | `string` | Required | cannot be null | [ModelDescriptor](modeldescriptor-properties-schemaurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/schemaUrl") |
| [indexUrl](#indexUrl) | `string` | Required | cannot be null | [ModelDescriptor](modeldescriptor-properties-indexurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/indexUrl") |
| [indexPath](#indexPath) | `string` | Required | cannot be null | [ModelDescriptor](modeldescriptor-properties-indexpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/indexPath") |

## \$schema

Link to the ModelDescriptor JSON schema

`$schema`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptor](modeldescriptor-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/$schema")

### \$schema Type

`string`

## id

UUID that identifies the ModelDescriptor

`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptor](modeldescriptor-properties-id.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/id")

### id Type

`string`

## name

Name of the model

`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptor](modeldescriptor-properties-name.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/name")

### name Type

`string`

## schemaUrl

URL to the schema of the model

`schemaUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptor](modeldescriptor-properties-schemaurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/schemaUrl")

### schemaUrl Type

`string`

## indexUrl

URL to the index json (an URL that returns a list of all model ids)

`indexUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptor](modeldescriptor-properties-indexurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/indexUrl")

### indexUrl Type

`string`

## indexPath

Path to the index json (an URL that returns a list of all model ids) relative to the ModelDescriptors json file.

`indexPath`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptor](modeldescriptor-properties-indexpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptor.schema.json#/properties/indexPath")

### indexPath Type

`string`
