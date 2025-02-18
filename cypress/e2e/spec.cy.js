describe('Tests', () => {

  it('Register User', () => {
    cy.visit('https://automationexercise.com/')
    cy.contains('Signup / Login').should('exist').click();
    cy.get('.signup-form h2').should('contain', 'New User Signup!')
    cy.get('[data-qa="signup-name"]').type('bebras');
    cy.get('[data-qa="signup-email"]').type('bebras@bebriukas.com');
    cy.get('[data-qa="signup-name"]').should('have.value', 'bebras');
    cy.get('[data-qa="signup-email"]').should('have.value', 'bebras@bebriukas.com');
    cy.get('[data-qa="signup-button"]').click();
    cy.get('.login-form h2').should('exist');
    cy.get('.login-form h2').contains('Enter Account Information')
    cy.get('#id_gender2').click();
    cy.get('#name').type('bebras');
    // cy.get('#email').type('bebras@bebras.com');
    cy.get('#password').type('bebriukas');
    cy.get('[data-qa="days"]').select('8');
    cy.get('[data-qa="months"]').select('June');
    cy.get('[data-qa="years"]').select('1991');
    cy.get('#newsletter').click();
    cy.get('#optin').click();
    cy.get('#first_name').type('bebras');
    cy.get('#last_name').type('bebrauskas');
    cy.get('#company').type('UAB Bebrai');
    cy.get('#address1').type('Miško str.');
    cy.get('#address2').type('near the big tree');
    cy.get('[data-qa="country"]').select('Canada');
    cy.get('#state').type('Canada State');
    cy.get('#city').type('Canada City');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('0987654321');
    cy.get('[data-qa="create-account"]').click();
    cy.get('[data-qa="account-created"]').contains('Account Created!');
    cy.get('[data-qa="continue-button"]').click();
    cy.contains('Logged in as').should('exist');
    cy.contains('Delete Account').should('exist').click();
    cy.get('[data-qa="account-deleted"]').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();


  })

})

