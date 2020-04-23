# Config Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json
```

General configuration

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | Yes | Unknown status | No | Forbidden | Forbidden | none | [Config.schema.json](../Config.schema.json "open original schema") |

## Config Type

`object` ([Config](config.md))

# Config Definitions

## Definitions group ModelsConfig

Reference this group by using

```json
{
    "$ref": "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig"
}
```

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [modelDescriptorsPath](#modelDescriptorsPath) | `string` | Required | cannot be null | [Config](config-definitions-modelsconfig-properties-modeldescriptorspath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsPath") |
| [modelDescriptorsUrl](#modelDescriptorsUrl) | `string` | Required | cannot be null | [Config](config-definitions-modelsconfig-properties-modeldescriptorsurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsUrl") |

### modelDescriptorsPath

Path to the models index json (relative to repository root)

`modelDescriptorsPath`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-modelsconfig-properties-modeldescriptorspath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsPath")

#### modelDescriptorsPath Type

`string`

### modelDescriptorsUrl

URL to the models index json

`modelDescriptorsUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-modelsconfig-properties-modeldescriptorsurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsUrl")

#### modelDescriptorsUrl Type

`string`

## Definitions group StorageConfig

Reference this group by using

```json
{
    "$ref": "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig"
}
```

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [rootPath](#rootPath) | `string` | Required | cannot be null | [Config](config-definitions-storageconfig-properties-rootpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/rootPath") |
| [baseUrl](#baseUrl) | `string` | Required | cannot be null | [Config](config-definitions-storageconfig-properties-baseurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/baseUrl") |

### rootPath

Path to the directory files should be stored in (relative to the repository root)

`rootPath`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-storageconfig-properties-rootpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/rootPath")

#### rootPath Type

`string`

### baseUrl

URL to the root of the storage

`baseUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-storageconfig-properties-baseurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/baseUrl")

#### baseUrl Type

`string`

# Config Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [\$schema](#$schema) | `string` | Required | cannot be null | [Config](config-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/$schema") |
| [schemaVersion](#schemaVersion) | `string` | Required | cannot be null | [Config](config-properties-schemaversion.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/schemaVersion") |
| [models](#models) | `object` | Required | cannot be null | [Config](config-definitions-modelsconfig.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/models") |
| [storage](#storage) | `object` | Required | cannot be null | [Config](config-definitions-storageconfig.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/storage") |

## \$schema

Schema for the Config

`$schema`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-properties-schema.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/$schema")

### \$schema Type

`string`

## schemaVersion

The version of the schema (npm package version)

`schemaVersion`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-properties-schemaversion.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/schemaVersion")

### schemaVersion Type

`string`

### schemaVersion Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value     | Explanation |
| :-------- | ----------- |
| `"0.0.0"` |             |

## models

Configuration concerning models

`models`

-   is required
-   Type: `object` ([ModelsConfig](config-definitions-modelsconfig.md))
-   cannot be null
-   defined in: [Config](config-definitions-modelsconfig.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/models")

### models Type

`object` ([ModelsConfig](config-definitions-modelsconfig.md))

## storage

Configuration for file storage

`storage`

-   is required
-   Type: `object` ([StorageConfig](config-definitions-storageconfig.md))
-   cannot be null
-   defined in: [Config](config-definitions-storageconfig.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/storage")

### storage Type

`object` ([StorageConfig](config-definitions-storageconfig.md))
