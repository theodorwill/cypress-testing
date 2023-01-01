context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://dev.reky.se/')
  })

  it('should click elements and write in field', () => {
    
    // get div within .type() and click on div within it

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
  })
 })