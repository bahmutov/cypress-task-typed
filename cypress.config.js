const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      on('task', {
        add(a, b) {
          console.log('adding %d + %d', a, b)
          return a + b
        },
      })
    },
  },
})
