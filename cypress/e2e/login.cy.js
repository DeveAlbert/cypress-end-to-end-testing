describe('Login page', () => {
  it('should login successfully', () => {
    cy.visit('/')
    cy.Login()
  })
})

