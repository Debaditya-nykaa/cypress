/// <reference types="Cypress" />


Cypress.config(
    {
		
		"userAgent":"Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36",
    	"viewportWidth": 375,
		"viewportHeight": 667,
		"baseUrl": "https://preprod.nykaa.com/"
    }
);
describe('Test Case 1', ()=>
{
	Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false
	  })
	  
	before(() => 
	{
		cy.wait(2000)
		cy.viewport('iphone-6')
		//Cypress.config('userAgent','Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
		cy.visit('/neutrogena-oil-free-acne-wash/p/2559?ptype=product&productId=2559&skuId=2559&categoryId=649');
		cy.wait(200)
		cy.reload(true)
		cy.wait(200)
		//cy.visit('/neutrogena-fine-fairness-serum/p/7925')
	}
	)


	it('Nykaa Login Order Create and Cancel', () =>
	{
		
		cy.login('nykaatesting@gmail.com','nykaa@123')
		cy.wait(1000)
		cy.location('pathname').should('have.string', '/neutrogena-oil-free-acne-wash/p/2559')
		cy.AddToBag()
		cy.COD()
		cy.VisitMyOrders()
		cy.CancelOrder()
	}
	)

	

	

}
)