context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://dev.reky.se/')
    })

    it('should pass if error text was show after trying to submit', () => {

        cy.get('#rcc-confirm-button')
            .click()

        cy.get('[data-test-id="yrke-annat"]')
            .click()

        cy.get('[data-test-id="yrke-fritext"]')
            .type('Test')

        cy.get('.ioqKdk')
            .click()

        cy.get('[data-test-id="place-textbox-textbox"]')
            .type('Stockholm')

        cy.get('[data-test-id="location-step-next-button"]')
            .click()

        cy.get('[data-test-id="send-form-button"]')
            .click()
        
        cy.get('[data-text-id="contact-name-validation"]')
            .should('have.text', 'Du måste fylla i ett namn')
    })
})