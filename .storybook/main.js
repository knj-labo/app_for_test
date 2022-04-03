const path = require('path')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
      "@storybook/addon-links",
      "@storybook/addon-essentials",
      "@storybook/addon-interactions",
      "@storybook/addon-docs",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
  "typescript" : { reactDocgen: false },

    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            "@": path.resolve(__dirname, '../src')
        }
        return config
    }

}