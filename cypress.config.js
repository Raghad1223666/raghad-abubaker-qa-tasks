/// <reference types="cypress" />
const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //on("file:preprocessor", cucumber());
    },

    baseUrl: "https://magento.softwaretestingboard.com",
    // viewportHeight:660,
    // viewportWidth:550,
    experimentalStudio: false,
    trashAssetsBeforeRuns: true,
    // screenshotOnRunFailure:false,
    screenshotsFolder: "MyScreenshots",
    video: false,
    videosFolder: "RaghadVideos",
    videoCompression: 0,
    reporter: "mochawesome",
      reporterOptions: {
        reportDir: "myReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
    }
  },
});
