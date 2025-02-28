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


Cypress.Commands.add('addsSomeProducts', () => {
    cy.get('.product-image-wrapper').eq(0).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(0).contains('Add to cart').click();
    cy.contains('Continue Shopping').click();
    cy.get('.product-image-wrapper').eq(1).trigger('mouseover');
    cy.get('.product-image-wrapper').eq(1).contains('Add to cart').click();
    cy.contains('View Cart').click();
})

Cypress.Commands.add('createAcc', () => {
    // cy.session('createAccSession',()=>{
        cy.get('#password').type('bebriukas');
        cy.get('[data-qa="days"]').select('8');
        cy.get('[data-qa="months"]').select('June');
        cy.get('[data-qa="years"]').select('1991');
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type('sausainis');
        cy.get('#last_name').type('selga');
        cy.get('#company').type('UAB Selga');
        cy.get('#address1').type('Miltų g.');
        cy.get('#address2').type('cukraus kalnas');
        cy.get('[data-qa="country"]').select('Canada');
        cy.get('#state').type('Canada State');
        cy.get('#city').type('Canada City');
        cy.get('#zipcode').type('12345');
        cy.get('#mobile_number').type('0987654321');
        cy.get('[data-qa="create-account"]').click();
        cy.get('[data-qa="account-created"]').contains('Account Created!');
        cy.get('[data-qa="continue-button"]').click();
    });
    // })
 





Cypress.Commands.add('paymentCardData', () => {
    cy.get('[data-qa="name-on-card"]').type('Selga sausainis');
    cy.get('[data-qa="card-number"]').type('123456789');
    cy.get('[data-qa="cvc"]').type('123');
    cy.get('[data-qa="expiry-month"]').type('10');
    cy.get('[data-qa="expiry-year"]').type('2020');
    cy.get('[data-qa="pay-button"]').click();
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