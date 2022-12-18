const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'n7eyqq',
  e2e: {
    baseUrl: "https://app.superfluid.finance",
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      html: false,
      overwrite: false

    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});


