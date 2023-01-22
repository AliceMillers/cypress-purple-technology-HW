const { constants } = require("../constants")

it('Verify request with 200 response using cypress documentation', () => {
  cy.request({
    url: constants.docCypressRequest,
    followRedirect: false, 
  }).then((resp) => {
    expect(resp.status).to.eq(200)
  })
  cy.request(constants.docCypressRequest).its('body').should('include', '<h1>request</h1>')
})

it('Verify request with 302 response using google mailbox API', () => {
  cy.request({
    url: constants.mail,
    followRedirect: false,
  }).then((resp) => {
    expect(resp.status).to.eq(302)
    expect(resp.redirectedToUrl).to.eq(constants.redirectionMail)
  })
})
