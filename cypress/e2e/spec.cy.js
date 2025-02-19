
// it('example', () => {
//   cy.visit('https://automationexercise.com/')
//   cy.contains('Signup / Login').should('exist').click();
//   cy.get('.signup-form h2').should('contain', 'New User Signup!')
//   cy.get('[data-qa="signup-name"]').type('naujas');
//   cy.get('[data-qa="signup-email"]').type('naujas@naujas.com');
//   cy.get('[data-qa="signup-button"]').click();
//   cy.get('.login-form h2').should('exist');
//     cy.get('.login-form h2').contains('Enter Account Information')
//     cy.get('#id_gender2').click();
//     cy.get('#name').type('bebras');
//     // cy.get('#email').type('bebras@bebras.com');
//     cy.get('#password').type('bebriukas');
//     cy.get('[data-qa="days"]').select('8');
//     cy.get('[data-qa="months"]').select('June');
//     cy.get('[data-qa="years"]').select('1991');
//     cy.get('#newsletter').click();
//     cy.get('#optin').click();
//     cy.get('#first_name').type('bebras');
//     cy.get('#last_name').type('bebrauskas');
//     cy.get('#company').type('UAB Bebrai');
//     cy.get('#address1').type('Miško str.');
//     cy.get('#address2').type('near the big tree');
//     cy.get('[data-qa="country"]').select('Canada');
//     cy.get('#state').type('Canada State');
//     cy.get('#city').type('Canada City');
//     cy.get('#zipcode').type('12345');
//     cy.get('#mobile_number').type('0987654321');
//     cy.get('[data-qa="create-account"]').click();
//     cy.get('[data-qa="account-created"]').contains('Account Created!');
//     cy.get('[data-qa="continue-button"]').click();
//     cy.contains('Logged in as').should('exist');
// })



// describe('Test Case 1', () => {


//   it('Register User', () => {
//     cy.visit('https://automationexercise.com/')
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.signup-form h2').should('contain', 'New User Signup!')
//     cy.get('[data-qa="signup-name"]').type('bebras');
//     cy.get('[data-qa="signup-email"]').type('bebras@bebriukas.com');
//     cy.get('[data-qa="signup-name"]').should('have.value', 'bebras');
//     cy.get('[data-qa="signup-email"]').should('have.value', 'bebras@bebriukas.com');
//     cy.get('[data-qa="signup-button"]').click();
//     cy.get('.login-form h2').should('exist');
//     cy.get('.login-form h2').contains('Enter Account Information')
//     cy.get('#id_gender2').click();
//     cy.get('#name').type('bebras');
//     // cy.get('#email').type('bebras@bebras.com');
//     cy.get('#password').type('bebriukas');
//     cy.get('[data-qa="days"]').select('8');
//     cy.get('[data-qa="months"]').select('June');
//     cy.get('[data-qa="years"]').select('1991');
//     cy.get('#newsletter').click();
//     cy.get('#optin').click();
//     cy.get('#first_name').type('bebras');
//     cy.get('#last_name').type('bebrauskas');
//     cy.get('#company').type('UAB Bebrai');
//     cy.get('#address1').type('Miško str.');
//     cy.get('#address2').type('near the big tree');
//     cy.get('[data-qa="country"]').select('Canada');
//     cy.get('#state').type('Canada State');
//     cy.get('#city').type('Canada City');
//     cy.get('#zipcode').type('12345');
//     cy.get('#mobile_number').type('0987654321');
//     cy.get('[data-qa="create-account"]').click();
//     cy.get('[data-qa="account-created"]').contains('Account Created!');
//     cy.get('[data-qa="continue-button"]').click();
//     cy.contains('Logged in as').should('exist');
//     cy.contains('Delete Account').should('exist').click();
//     cy.get('[data-qa="account-deleted"]').should('be.visible');
//     cy.get('[data-qa="continue-button"]').click();


//   })

// });

// describe('Test Case 2', () => {
//   it('Login User with correct email and paswword', () => {
//     cy.visit('https://automationexercise.com/')
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//     cy.get('[data-qa="login-email"]').type('naujas@naujas.com');
//     cy.get('[data-qa="login-password"]').type('bebriukas');
//     cy.get('[data-qa="login-button"]').click();
//     cy.contains('Logged in as').should('exist').and('be.visible');
//     cy.contains('Delete Account').should('exist').click();
//     cy.get('[data-qa="account-deleted"]').should('be.visible');
//   })
// })

// describe('Test Case 3', () => {
//   it('Login User with correct email and paswword', () => {
//     cy.visit('https://automationexercise.com/')
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//     cy.get('[data-qa="login-email"]').type('monika@monika.com');
//     cy.get('[data-qa="login-password"]').type('monikele');
//     cy.get('[data-qa="login-button"]').click();
//     cy.get('form p').contains('Your email or password is incorrect!').and('be.visible');
//   })
// });

// describe('Test Case 4', ()=>{
//   it('Logout User', () => {
//         cy.visit('https://automationexercise.com/')
//         cy.contains('Signup / Login').should('exist').click();
//         cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//         cy.get('[data-qa="login-email"]').type('bebras@gmailll.com');
//         cy.get('[data-qa="login-password"]').type('bebriukas');
//         cy.get('[data-qa="login-button"]').click();
//         cy.contains('Logged in as').should('exist').and('be.visible');
//         cy.get('ul.navbar-nav li').contains('Logout').click();
//         //10. Verify that user is navigated to login page


// })
// })
// describe('Test Case 5', ()=>{
//   it('Register User with existing email', () => {
//     cy.visit('https://automationexercise.com/')
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.signup-form h2').should('contain', 'New User Signup!');
//     cy.get('[data-qa="signup-name"]').type('bebras');
//     cy.get('[data-qa="signup-email"]').type('bebras@gmailll.com');
//     cy.get('[data-qa="signup-button"]').click();
//     cy.get('form p').contains('Email Address already exist!');

// })
// })

describe('Test Case 6', ()=>{
it('Contact Us Form', ()=> {
cy.visit('https://automationexercise.com/');
cy.get('ul.navbar-nav li').contains('Contact us').click();
cy.get('.contact-form h2').should
})
})