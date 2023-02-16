const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "abj2ks",

  chromeWebSecurity: false,

  e2e: {
    baseUrl: "https://app.yooga.com.br",
    supportFile: "cypress/support/index.js",
    testIsolation: false,
  },
});
