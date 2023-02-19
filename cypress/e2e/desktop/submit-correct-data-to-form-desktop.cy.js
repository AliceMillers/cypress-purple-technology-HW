describe('Verify if user is able to submit correct data to a form on desktop', () => {
  let testdata

  before( () => {
    cy.fixture('testdata').then(data => {
        testdata = data
    })
    cy.visit('/jp/registration/demo')
  })
  
  it('submits correct data to the registration form', () => {
    cy.get('.atm-h1-container').contains(testdata.revolgy_form_h1)
    cy.get('.atm-h2-container').contains(testdata.revolgy_form_h2)
    cy.fullfillCorrectDataToForm()
    cy.url().should('include', 'https://portal.axiory.com/register')
    cy.interceptBadResponse()
  })
})
