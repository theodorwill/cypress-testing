context('Actions', () => {
    beforeEach(() => {
        cy.visit('https://dev.reky.se/')
    })

    it('should show a red outlined textbox because nothing was filled into form', () => {

        cy.get('#rcc-confirm-button')
            .click()

        cy.get('[data-test-id="yrke-annat"]')
            .click()

        cy.get('.ioqKdk')
        .click()
    })
})