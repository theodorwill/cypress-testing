context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://dev.reky.se/')
    })

    it('should get to "arbetsort" because "expertis" was filled' , () => {

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
    })
})