import { constants } from "../constants"

describe('Verify requests using Cypress', () => {
  it('should return 200 status for a Cypress documentation request', () => {
    cy.request({
      url: constants.docCypressRequest,
      followRedirect: false 
    }).then((resp) => {
      expect(resp.status).to.eq(200)
      expect(resp.body).to.include('<h1>request</h1>')
    })
  })
  
  it('should return 302 status for a Google Mailbox API request', () => {
    cy.request({
      url: constants.mail,
      followRedirect: false
    }).then((resp) => {
      expect(resp.status).to.eq(302)
      expect(resp.redirectedToUrl).to.eq(constants.redirectionMail)
    })
  })
})
