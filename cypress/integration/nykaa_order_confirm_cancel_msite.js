/// <reference types="Cypress" />

describe('Mobile Test Case', ()=>
{

    Cypress.on('uncaught:exception', (err, runnable) => {
		// returning false here prevents Cypress from
		// failing the test
		return false
      })
      
    before(() => 
	{
		cy.viewport('iphone-6')
		cy.visit('https://preprod.nykaa.com');
		cy.wait(200)
		cy.reload(true)
		cy.wait(200)
	}
	)

    it('Login', () =>
    {

       cy.login_msite('nykaatesting@gmail.com','nykaa@123')
       cy.wait(2000)
       cy.Empty_Cart_Msite()
       cy.Navigate_PDP_Msite()
       //cy.visit('https://preprod.nykaa.com/neutrogena-oil-free-acne-wash/p/2559?ptype=product&productId=2559&skuId=2559&categoryId=649')
       cy.wait(200)
       cy.reload(true)
	     cy.wait(200)
       cy.Add_To_Bag_Msite()
       cy.COD_Msite()
       cy.wait(3000)
	     cy.get('.btn').scrollIntoView().click()
       cy.VisitMyOrders_Msite()
       cy.CancelOrder_Msite()
    }
    )

}
)