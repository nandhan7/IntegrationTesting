describe('Testing app', () => {
  beforeEach(() => {
    cy.visit('https://app.100xdevs.com')
  })

  it('is able to log in', () => {
    cy.contains('Login').should('exist')
    cy.contains('Login').click()
    cy.contains('Signin to your Account').should('exist', { timeout: 10000 })
    cy.get('#email').type('nandan@gmail.com');

    // Fill in the password field
    cy.get('#password').type('1245692');

    cy.get('button').eq(1).click()

    cy.contains('View Content').should("exist", {timeout: 10000})
  })

})
