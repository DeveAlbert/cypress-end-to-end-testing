describe('Cart page', () => {
    it('should proceed to cart', () => {
      cy.visit('/')
      cy.get('[data-test="username"]').should('be.visible').type('standard_user')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('[data-test="login-button"]').should('be.visible').click()
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
      cy.get('.shopping_cart_badge').should('be.visible').click()
    })
  })