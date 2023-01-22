describe('Verify if user isnt able to submit incorrect data to a form on mobile', function () {
    beforeEach(function () {
      cy.fixture('testdata').then(function (testdata) {
          this.testdata = testdata
      })
      cy.viewportPreset('samsung-s10-plus')
      cy.visit('/jp/registration/demo')
    })
    
    it('fullfill incorrect firstname to a registration form page', function () {
      cy.get('.atm-h1-container').contains(this.testdata.revolgy_form_h1)
      cy.get('.atm-h2-container').contains(this.testdata.revolgy_form_h2)
      cy.get('#firstname').type('12345')
      cy.get('.atm-submit-container').click()
      cy.get("#firstname:invalid").should('have.length', 1)
      cy.get('#firstname').then(($input) => {
        expect($input[0].validationMessage).to.eq(this.testdata.match_format_warning);
      })
     })

    it('fullfill incorrect lastname to a registration form page', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('4678')
        cy.get('.atm-submit-container').click()
        cy.get("#lastname:invalid").should('have.length', 1)
        cy.get('#lastname').then(($input) => {
        expect($input[0].validationMessage).to.eq(this.testdata.match_format_warning);
        })
      })

    it('fullfill incorrect email to a registration form page', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('Jobes')
        cy.get('#phone').type('123456789')
        cy.get('#countryLabel').type('China')
        cy.get('#email').type('test123@test.com')
        cy.get('.atm-submit-container').click()
        cy.get("#email:invalid").should('have.length', 1)
        cy.get('#email').then(($input) => {
        expect($input[0].validationMessage).to.eq(this.testdata.match_format_warning);
        })
      })

    it('fullfill zero deposit to a registration form page', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('Jobes')
        cy.get('#email').type('test@test.com')
        cy.get('#phone').type('123456789')
        cy.get('#countryLabel').type('China')
        cy.get('#deposit').type('0')
        cy.get('.atm-submit-container').click()
        cy.get("#deposit:invalid").should('have.length', 1)
        cy.get('#deposit').then(($input) => {
        expect($input[0].validationMessage).to.eq(this.testdata.zero_deposit_warning);
        })
      })
    
    it('fullfill too big deposit to a registration form page', function () {
        cy.get('#firstname').type('Steve')
        cy.get('#lastname').type('Jobes')
        cy.get('#email').type('test@test.com')
        cy.get('#phone').type('123456789')
        cy.get('#countryLabel').type('China')
        cy.get('#deposit').type('100000000')
        cy.get('.atm-submit-container').click()
        cy.get("#deposit:invalid").should('have.length', 1)
        cy.get('#deposit').then(($input) => {
        expect($input[0].validationMessage).to.eq(this.testdata.too_big_deposit_warning);
        })
      })
  })