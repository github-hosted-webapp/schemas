# StorageConfig Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig
```

Configuration for file storage

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | No | Unknown status | No | Forbidden | Forbidden | none | [Config.schema.json\*](../Config.schema.json "open original schema") |

## StorageConfig Type

`object` ([StorageConfig](config-definitions-storageconfig.md))

# StorageConfig Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [rootPath](#rootPath) | `string` | Required | cannot be null | [Config](config-definitions-storageconfig-properties-rootpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/rootPath") |
| [baseUrl](#baseUrl) | `string` | Required | cannot be null | [Config](config-definitions-storageconfig-properties-baseurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/baseUrl") |

## rootPath

Path to the directory files should be stored in (relative to the repository root)

`rootPath`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-storageconfig-properties-rootpath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/rootPath")

### rootPath Type

`string`

## baseUrl

URL to the root of the storage

`baseUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-storageconfig-properties-baseurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/StorageConfig/properties/baseUrl")

### baseUrl Type

`string`
