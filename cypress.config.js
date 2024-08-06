const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      BASE_URL: "https://www.saucedemo.com/"
    },
    chromeWebSecurity: false,
    //baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {

    },
  },
});