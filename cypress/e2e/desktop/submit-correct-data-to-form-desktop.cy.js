describe('Verify if user is able to submit correct data to a form on desktop', function () {
  before(function () {
    cy.visit('/jp/registration/demo')
    cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
    })
  })
  
  it('fullfill data to a registration form page', function () {
    cy.get('.atm-h1-container').contains(this.testdata.revolgy_form_h1)
    cy.get('.atm-h2-container').contains(this.testdata.revolgy_form_h2)
    cy.fullfillCorrectDataToForm()
    cy.url().should('include', 'https://portal.axiory.com/register')
    cy.interceptBadResponse()
  })
})
