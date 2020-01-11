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
	cy.wait(2000)
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
	cy.wait(1000)
	if(cy.contains('Your Shopping Bag is Empty'))
	{
		cy.get('.back-btn > svg').click()
	}
	else
	{
		cy.get('.remove-product > svg').click()
		cy.contains('REMOVE').click()
	}

}
)

Cypress.Commands.add('COD_Msite', ()=>
{
	cy.contains('OTHER PAYMENT').click()
	cy.contains('CASH ON DELIVERY').click()
	cy.contains('PAY').click()
}
)