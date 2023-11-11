describe('Checkout page', () => {
    it('should click on the checkout button', () => {
        cy.visit('/')
        cy.Login()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('.shopping_cart_badge').should('be.visible').click()
        cy.get('[data-test="checkout"]').should('be.visible').click()

    })

    it('should fill out the checkout form and submit', () => {
        cy.visit('/')
        cy.Login()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('.shopping_cart_badge').should('be.visible').click()
        cy.get('[data-test="checkout"]').should('be.visible').click()
        cy.get('[data-test="firstName"]').should('be.visible').type('Emmanuel')
        cy.get('[data-test="lastName"]').should('be.visible').type('Albert')
        cy.get('[data-test="postalCode"]').should('be.visible').type('12345')
        cy.get('[data-test="continue"]').should('be.visible').click()
    })

    it('should click the finish button', () => {
        cy.visit('/')
        cy.Login()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('.shopping_cart_badge').should('be.visible').click()
        cy.get('[data-test="checkout"]').should('be.visible').click()
        cy.get('[data-test="firstName"]').should('be.visible').type('Emmanuel')
        cy.get('[data-test="lastName"]').should('be.visible').type('Albert')
        cy.get('[data-test="postalCode"]').should('be.visible').type('12345')
        cy.get('[data-test="continue"]').should('be.visible').click()
        cy.get('[data-test="finish"]').should('be.visible').click()
    })
})
