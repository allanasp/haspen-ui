import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module`
     */
    ["haspen"]: typeof import("/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     */
    ["scripts"]: typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils`
     */
    ["testUtils"]: typeof import("@nuxt/test-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]: typeof import("/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module`
     */
    ["haspen"]?: typeof import("/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     */
    ["scripts"]?: typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils`
     */
    ["testUtils"]?: typeof import("@nuxt/test-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module`
     */
    ["devtools"]?: typeof import("/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module", Exclude<NuxtConfig["haspen"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/scripts", Exclude<NuxtConfig["scripts"], boolean>] | ["@nuxt/test-utils", Exclude<NuxtConfig["testUtils"], boolean>] | ["/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module`
     * @see https://www.npmjs.com/package//Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module
     */
    ["haspen"]: typeof import("/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     * @see https://www.npmjs.com/package/@nuxt/scripts
     */
    ["scripts"]: typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils`
     * @see https://www.npmjs.com/package/@nuxt/test-utils
     */
    ["testUtils"]: typeof import("@nuxt/test-utils").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module`
     * @see https://www.npmjs.com/package//Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module
     */
    ["devtools"]: typeof import("/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module`
     * @see https://www.npmjs.com/package//Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module
     */
    ["haspen"]?: typeof import("/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/eslint`
     * @see https://www.npmjs.com/package/@nuxt/eslint
     */
    ["eslint"]?: typeof import("@nuxt/eslint").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/scripts`
     * @see https://www.npmjs.com/package/@nuxt/scripts
     */
    ["scripts"]?: typeof import("@nuxt/scripts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/test-utils`
     * @see https://www.npmjs.com/package/@nuxt/test-utils
     */
    ["testUtils"]?: typeof import("@nuxt/test-utils").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module`
     * @see https://www.npmjs.com/package//Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module
     */
    ["devtools"]?: typeof import("/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/greenbow/repos/projects/haspen-ui/packages/nuxt/src/module", Exclude<NuxtConfig["haspen"], boolean>] | ["@nuxt/eslint", Exclude<NuxtConfig["eslint"], boolean>] | ["@nuxt/scripts", Exclude<NuxtConfig["scripts"], boolean>] | ["@nuxt/test-utils", Exclude<NuxtConfig["testUtils"], boolean>] | ["/Users/greenbow/.nvm/versions/node/v18.14.2/lib/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   "nuxt-scripts": {
      version: string,
   },
  }
  interface PublicRuntimeConfig {
   haspen: {
      components: boolean,

      composables: boolean,

      prefix: string,
   },

   "nuxt-scripts": {
      version: any,

      defaultScriptOptions: {
         trigger: string,
      },
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }