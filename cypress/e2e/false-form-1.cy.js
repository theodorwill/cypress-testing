context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://dev.reky.se/')
    })
  
    it('should time out for not accepting cookies', () => {
      
      cy.get('[data-test-id="yrke-systemutvecklare"]')
        .click()
      
      cy.get('[data-test-id="net"]', {timeout: 2000})
            .click()
    })
   })