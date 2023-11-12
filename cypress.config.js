const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cfpn5d"
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    defaultCommandTimeout: 30000,
    pageLoadTimeout: 120000,
    chromeWebSecurity: false,

    viewportHeight: 900,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
