# ModelsConfig Schema

```txt
https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/properties/models
```

Configuration concerning models

| Abstract | Extensible | Status | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In |
| :-- | --- | --- | --- | :-- | --- | --- | --- |
| Can be instantiated | No | Unknown status | No | Forbidden | Forbidden | none | [Config.schema.json\*](../Config.schema.json "open original schema") |

## models Type

`object` ([ModelsConfig](config-definitions-modelsconfig.md))

# ModelsConfig Properties

| Property | Type | Required | Nullable | Defined by |
| :-- | --- | --- | --- | :-- |
| [modelDescriptorsPath](#modelDescriptorsPath) | `string` | Required | cannot be null | [Config](config-definitions-modelsconfig-properties-modeldescriptorspath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsPath") |
| [modelDescriptorsUrl](#modelDescriptorsUrl) | `string` | Required | cannot be null | [Config](config-definitions-modelsconfig-properties-modeldescriptorsurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsUrl") |

## modelDescriptorsPath

Path to the models index json (relative to repository root)

`modelDescriptorsPath`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-modelsconfig-properties-modeldescriptorspath.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsPath")

### modelDescriptorsPath Type

`string`

## modelDescriptorsUrl

URL to the models index json

`modelDescriptorsUrl`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Config](config-definitions-modelsconfig-properties-modeldescriptorsurl.md "https://github-hosted-webapp.github.io/schemas/v0.0.0/Config.schema.json#/definitions/ModelsConfig/properties/modelDescriptorsUrl")

### modelDescriptorsUrl Type

`string`
