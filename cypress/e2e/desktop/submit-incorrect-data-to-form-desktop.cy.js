describe('Verify if user isnt able to submit incorrect data to a form', () => {
  let testdata
    beforeEach(() => {
      cy.fixture('testdata').then(data => {
          testdata = data
      })
      cy.visit('/jp/registration/demo')
    })
    
    it('rejects invalid first name', () => {
      cy.get('#firstname').type('12345')
      cy.get('.atm-submit-container').click()
      cy.get("#firstname:invalid").should('have.length', 1)
      cy.get('#firstname').then(input => {
        expect(input[0].validationMessage).to.eq(testdata.match_format_warning);
      })
     })

    it('rejects invalid last name', () => {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('4678')
        cy.get('.atm-submit-container').click()
        cy.get("#lastname:invalid").should('have.length', 1)
        cy.get('#lastname').then(input => {
          expect(input[0].validationMessage).to.eq(testdata.match_format_warning);
        })
      })

    it('rejects invalid email', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('Jobes')
        cy.get('#phone').type('123456789')
        cy.get('#countryLabel').type('China')
        cy.get('#email').type('test123@test.com')
        cy.get('.atm-submit-container').click()
        cy.get("#email:invalid").should('have.length', 1)
        cy.get('#email').then(input => {
          expect(input[0].validationMessage).to.eq(testdata.match_format_warning);
        })
      })

    it('rejects zero deposit', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('Jobes')
        cy.get('#email').type('test@test.com')
        cy.get('#phone').type('123456789')
        cy.get('#countryLabel').type('China')
        cy.get('#deposit').type('0')
        cy.get('.atm-submit-container').click()
        cy.get("#deposit:invalid").should('have.length', 1)
        cy.get('#deposit').then(input => {
        expect(input[0].validationMessage).to.eq(testdata.zero_deposit_warning);
        })
      })
    
    it('rejects too big deposit', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('Jobes')
        cy.get('#email').type('test@test.com')
        cy.get('#phone').type('123456789')
        cy.get('#countryLabel').type('China')
        cy.get('#deposit').type('100000000')
        cy.get('.atm-submit-container').click()
        cy.get("#deposit:invalid").should('have.length', 1)
        cy.get('#deposit').then(input => {
        expect(input[0].validationMessage).to.eq(testdata.too_big_deposit_warning);
        })
      })
  })
