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
// Cypress.Commands.add('login', (email, password) => { ... })


Cypress.Commands.add('mainSteps', () => {
    cy.visit('https://automationexercise.com/');
    cy.get('#slider').should('be.visible');

});


Cypress.Commands.add('addsSomeProducts', ()=>{
    cy.get('.product-image-wrapper').eq(0).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(0).contains('Add to cart').click();
    cy.contains('Continue Shopping').click();
    cy.get('.product-image-wrapper').eq(1).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(1).contains('Add to cart').click();
    cy.contains('View Cart').click();
})



//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })