// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email,password) =>

{

	cy.get('span[class="AccountText"]').click()
	cy.get('input[class="input text-center"]').type(email)
	cy.get('.button').click()
	cy.get('input[type="password"]').type(password)
	cy.get('.button').click()

}
)

Cypress.Commands.add('Navigate_PDP', ()=>
{
	
	cy.contains('Hair Brushes').invoke('removeAttr', 'target').click({ force: true })
	cy.get('div.filter-sidebar.clearfix.boundary-top').as('filter').scrollIntoView()
	cy.get('@filter').contains('Price').click({ force: true })
	cy.get('@filter').contains('Rs. 500 - Rs. 999').click({ force: true })
	cy.wait(500)
	cy.get('div[class="product-list-box card desktop-cart"]').first().as('firstProduct')
	cy.get('@firstProduct').find('a').invoke('removeAttr', 'target').click({ force: true })
	cy.wait(500)
}
)


Cypress.Commands.add('Empty_Cart', () =>
{
	cy.get('.AddBagIcon').click()
	cy.wait(3000)
	cy.get('body').then(($body) => {
		// synchronously query from body
		// to find which element was created
		if ($body.text().includes('Your Shopping Bag is Empty')) 
		{
		  // input was found, do something else here
		  cy.get('.back-btn > svg').click()
		
		}
		else
		{
			cy.get('i.remove-product').click({ force: true })
			cy.wait(2000)
			cy.get('.user-logged-in > :nth-child(2)').click()
			cy.wait(2000)
			cy.get('.back-btn > svg').click()
		}
		}
		)
	
}
)

Cypress.Commands.add('AddToBag',() =>
{

	cy.get('.pull-left>div>.combo-add-to-btn').click()
	cy.get('.AddBagIcon').click()
	cy.get('.coupon-btn').type('TESTQA987')
	cy.get('.coupon-action').click()
	cy.get('.btn').click()

}
)	

Cypress.Commands.add('COD', ()=>
{

	cy.get('.cash-on-delivery > a').click()
	cy.wait(1000)
	cy.get('.btn').click()
	cy.wait(1000)

}
)

Cypress.Commands.add('VisitMyOrders', ()=>
{

	cy.get('.AccountText > span').click()
	cy.get('a[href="/sales/order/history/v2?ptype=myOrder"]').click()

}
)

Cypress.Commands.add('CancelOrder', ()=>
{

	cy.get('.col-sm-9 > :nth-child(1) > :nth-child(1)').first().as('firstTodo')
	cy.get('@firstTodo').find('span[class="my-order-cancel-link"]').click()
	cy.get('.reason-select-box').select('Other')
	cy.get('.yes').click()
	cy.get('@firstTodo').find('.col-md-5 > .my-order-font-bold').should('have.text', 'cancelled')

}
)


Cypress.Commands.add('login_msite', (email,password)=>
{
	cy.wait(4000)
	cy.get('a>.mkr').click()
	cy.wait(1000)
	cy.contains('Log In').click()
	cy.get('input[class="input text-center"]').type(email)
	cy.get('.button').click()
	cy.get('input[type="password"]').type(password)
	cy.get('.button').click()

}

)

Cypress.Commands.add('Add_To_Bag_Msite',()=>
{

	cy.contains('ADD TO BAG').click()
	cy.get('.mkr-New-Shopping-Bag').click()
	cy.get('.coupon-btn').type('TESTQA987')
	cy.get('.coupon-action').click()
	cy.get('.btn').click()

}

)

Cypress.Commands.add('Empty_Cart_Msite', () =>
{
	cy.get('.mkr-New-Shopping-Bag').click()
	cy.wait(5000)
	cy.get('body').then(($body) => {
		// synchronously query from body
		// to find which element was created
		if ($body.text().includes('Your Shopping Bag is Empty')) 
		{
		  // input was found, do something else here
		  cy.get('.back-btn > svg').click()
		
		}
		else
		{
			cy.get('.remove-product > svg').click()
			cy.wait(2000)
			cy.get('.user-logged-in > :nth-child(2)').click()
			cy.wait(2000)
		}
	})

	
}
)

Cypress.Commands.add('COD_Msite', ()=>
{
	cy.contains('OTHER PAYMENT').click()
	cy.contains('CASH ON DELIVERY').click()
	cy.contains('PAY ₹').click()
}
)

Cypress.Commands.add('VisitMyOrders_Msite', ()=>
{

	cy.get('a>.mkr').click()
	cy.wait(1000)
	cy.contains('My Orders').click()
	

}
)

Cypress.Commands.add('CancelOrder_Msite', ()=>
{

	cy.get(':nth-child(1) > .my-order-m-order-details-section-first').first().as('firstTodo')
	cy.get('@firstTodo').find('span[class="my-order-m-font-Semibold"]').click()
	cy.wait(1000)
	cy.contains('CANCEL ORDER').scrollIntoView().click()
	cy.get('.reason-select-box').select('Other')
	cy.get('.yes').click()
	cy.wait(500)
	cy.reload(true)
	cy.wait(500)
	cy.get('.my-order-m-shipment-1-of-2').as('detailTodo').scrollIntoView()
	cy.get('@detailTodo').contains('Cancelled')
}
)

Cypress.Commands.add('Navigate_PDP_Msite', ()=>
{
	cy.get('.burgure-menu-icon').click()
	cy.wait(1000)
	cy.get('ul[class="m-content__menu-categories-list"]').as('menuTabs')
	cy.get('@menuTabs').contains('Hair').click()
	cy.get('@menuTabs').contains('Tools & Accessories').click()
	cy.get('@menuTabs').contains('Hair Brushes').click()
	
	cy.contains('Filter').click()
	cy.contains('Price').click()
	cy.get('ul[class="filter-content"]').as('priceRange')
	cy.get('@priceRange').contains('Rs. 500 - Rs. 999').click()
	cy.get('button[class="nk-btn"]').click()
	cy.get('div[class="product-list-inner"]').first().as('firstProduct')
	cy.get('@firstProduct').find('a').click()
	cy.wait(500)
}
)

