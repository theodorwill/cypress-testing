context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://dev.reky.se/')
  })

  it('should fill out form and send', () => {

    cy.get('#rcc-confirm-button')
      .click()

    cy.get('[data-test-id="yrke-systemutvecklare"]')
      .click()

    cy.get('[data-test-id="net"]')
      .click()

    cy.get('[data-test-id="expertise-next-button"]')
      .click()

    cy.get('[data-test-id="place-textbox-textbox"]')
      .type('Stockholm')

    cy.get('[data-test-id="location-step-next-button"]')
      .click()

    cy.get('[data-test-id="contact-name-textbox"]')
      .type('Test Testsson')

    cy.get('[data-test-id="contact-email-textbox"]')
      .type('test@testing.com')

    cy.get('[data-test-id="contact-tel-textbox"]')
      .type('000000000')

    cy.get('[data-test-id="send-form-button"]')
    .click()
  })
})