/// <reference types="Cypress" />


Cypress.config(
    {
		
		//"userAgent":"Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36",
    	//"viewportWidth": 375,
		//"viewportHeight": 667,
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
		
		
		cy.visit('https://preprod.nykaa.com/')
		
		cy.wait(200)

	}
	)


	it('Nykaa Login Order Create and Cancel', () =>
	{
		
		cy.login('nykaatesting@gmail.com','nykaa@123')
		cy.wait(1000)
		cy.Navigate_PDP()
		cy.Empty_Cart()
		cy.AddToBag()
		cy.COD()
		cy.VisitMyOrders()
		cy.CancelOrder()
	}
	)

	

	

}
)