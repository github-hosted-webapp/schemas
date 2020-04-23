# ModelDescriptor Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/items
```

Describes how a model is stored

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | No | Unknown status | No | Forbidden | Forbidden | none | [ModelDescriptors.schema.json\*](../ModelDescriptors.schema.json "open original schema") |

## items Type

`object` ([ModelDescriptor](modeldescriptors-definitions-modeldescriptor.md))

# ModelDescriptor Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [\$schema](#$schema) | `string` | Required | cannot be null | [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/$schema") |
| [id](#id) | `string` | Required | cannot be null | [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-id.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/id") |
| [name](#name) | `string` | Required | cannot be null | [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-name.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/name") |
| [schemaUrl](#schemaUrl) | `string` | Required | cannot be null | [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-schemaurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/schemaUrl") |
| [indexUrl](#indexUrl) | `string` | Required | cannot be null | [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-indexurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/indexUrl") |
| [indexPath](#indexPath) | `string` | Required | cannot be null | [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-indexpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/indexPath") |

## \$schema

Link to the ModelDescriptor JSON schema

`$schema`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/$schema")

### \$schema Type

`string`

## id

UUID that identifies the ModelDescriptor

`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-id.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/id")

### id Type

`string`

## name

Name of the model

`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-name.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/name")

### name Type

`string`

## schemaUrl

URL to the schema of the model

`schemaUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-schemaurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/schemaUrl")

### schemaUrl Type

`string`

## indexUrl

URL to the index json (an URL that returns a list of all model ids)

`indexUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-indexurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/indexUrl")

### indexUrl Type

`string`

## indexPath

Path to the index json (an URL that returns a list of all model ids) relative to the ModelDescriptors json file.

`indexPath`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [ModelDescriptors](modeldescriptors-definitions-modeldescriptor-properties-indexpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/ModelDescriptors.schema.json#/definitions/ModelDescriptor/properties/indexPath")

### indexPath Type

`string`
