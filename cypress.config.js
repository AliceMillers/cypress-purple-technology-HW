const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  fixturesFolder: 'cypress/fixtures',
  e2e: {
    baseUrl: 'https://revolgy-forms-case-study-master.staging.axiory.com'
  }
})
