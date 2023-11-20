import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      require('jambox/cypress-node-events')(on);

      return config;
    },
    supportFile: 'cypress/support/e2e.ts',
    baseUrl: 'https://local.example.com/',
  },
})
