/// <reference types="Cypress" />

it('Visit Nykaa and Login', () =>
{
	cy.visit('https://preprod.nykaa.com/')

	cy.login('nykaatesting@gmail.com','nykaa@123')

	cy.location('pathname').should('eq','/')
	
	


}
)