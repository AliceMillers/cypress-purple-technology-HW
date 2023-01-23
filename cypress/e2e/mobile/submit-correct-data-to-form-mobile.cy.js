describe('Verify if user is able to submit correct data to a form on mobile', function () {
  before(function () {
    cy.visit('/jp/registration/demo')
    cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
    })
  })

    it('fullfill data to a registration form page using samsung-s10-plus', function () {
      cy.viewportPreset('samsung-s10-plus')
      cy.get('.atm-h1-container').contains(this.testdata.revolgy_form_h1)
      cy.get('.atm-h2-container').contains(this.testdata.revolgy_form_h2)
      cy.fullfillCorrectDataToForm()
      cy.get('h1').should('be.visible')
      cy.get('h1').contains(this.testdata.axiory_form_h1)
      cy.interceptBadResponse()
    })
})