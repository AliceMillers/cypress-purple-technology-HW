// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('viewportPreset', (size = '') => {
  switch (size) {
    case 'samsung-s10-plus':
      cy.viewport(412, 869)
      break
    case 'iphone-se': 
      cy.viewport(375, 667)
      break
    case 'ipad-pro':
      cy.viewport(1366, 1024)
      break
    case 'ms-surface':
      cy.viewport(1280, 720)
      break
    case 'full-hd':
      cy.viewport(1920, 1080)
      break
    case 'imac':
      cy.viewport(2560, 1440)
      break
    default:
      cy.viewport(Cypress.env('viewportWidth'), Cypress.env('viewportHeight'))
  }
})

Cypress.Commands.add('fullfillCorrectDataToForm', () => {
  //fullfilled all fields with correct data to form
  cy.get('#firstname').type('Steve')
  cy.get('#lastname').type('Jobes')
  cy.get('#phone').type('123456789')
  cy.get('#countryLabel').type('China')
  cy.get('#email').type('test@test.com')
  cy.get('#platform').select('MetaTrader4')
  cy.get('#accountType').select('Standard (STP)')
  cy.get('#leverage').select('1:1')
  cy.get('#currency').select('USD')
  cy.get('#deposit').type('1000')
  cy.get('[type="checkbox"]').check()
  cy.get('.atm-submit-container').click()
})

Cypress.Commands.add('interceptBadResponse', () => {
  //stub 401 status bad requests with 200 status code
  cy.intercept('https://1opxuuwgn5.execute-api.ap-southeast-1.amazonaws.com/master/onboarding/checkCountry?countryCode=CZE&brand=AXIORY_ASIA', {
    statusCode: 200
  })
  cy.intercept('https://api.rollbar.com/api/1/item/', {
    statusCode: 200
  })
})
