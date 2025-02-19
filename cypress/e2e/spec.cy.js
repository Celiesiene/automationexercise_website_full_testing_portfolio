
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
//     cy.mainSteps();
//     cy.contains('Signup / Login').should('exist').click(); //kai si pakeist??
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
//     cy.mainSteps();
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
//   cy.mainSteps();
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
// cy.mainSteps();
//         cy.contains('Signup / Login').should('exist').click();
//         cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//         cy.get('[data-qa="login-email"]').type('bebras@gmailll.com');
//         cy.get('[data-qa="login-password"]').type('bebriukas');
//         cy.get('[data-qa="login-button"]').click();
//         cy.contains('Logged in as').should('exist').and('be.visible');
//         cy.get('ul.navbar-nav li').contains('Logout').click();
//         cy.url().should('eq', 'https://automationexercise.com/login');


// })
// })


// describe('Test Case 5', ()=>{
//   it('Register User with existing email', () => {
//     cy.mainSteps();
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.signup-form h2').should('contain', 'New User Signup!');
//     cy.get('[data-qa="signup-name"]').type('bebras');
//     cy.get('[data-qa="signup-email"]').type('bebras@gmailll.com');
//     cy.get('[data-qa="signup-button"]').click();
//     cy.get('form p').contains('Email Address already exist!');

// })
// })
// import 'cypress-file-upload';

// describe('Test Case 6', () => {
//     it('Contact Us Form', () => {
//         cy.mainSteps();
//         cy.get('ul.navbar-nav li').contains('Contact us').click();
//         cy.get('.contact-form h2').contains('Get In Touch').and('be.visible');
//         cy.get('[data-qa="name"]').type('Monika');
//         cy.get('[data-qa="email"]').type('monika@monika.lt');
//         cy.get('[data-qa="subject"]').type('regarding shipping');
//         cy.get('[data-qa="message"]').type('I accidentally gave the wrong delivery address when ordering, can you change it to North Pole?');
//         cy.get('input[type="file"]').attachFile('testfile.txt');
//         cy.get('[data-qa="submit-button"]').click();
//         cy.on('window:alert', (alertText) => {
//             expect(alertText).to.eq('automationexercise.com says Press ok to proceed!');
//         });
//         cy.on('window:confirm', () => true);
//         cy.get('.alert-success').contains('Success! Your details have been submitted successfully.');
//         cy.get('a[href="/"]').contains('Home').click(); //nepaima ahref kazkodel be contains???
//         cy.url().should('eq', 'https://automationexercise.com/');
//         cy.get('.logo').should('be.visible');
//     })
// })

// describe('Test Case 7', ()=>{
//   it('Verify Test Case Page', ()=>{
//     cy.mainSteps();
//     cy.get('a[href="/test_cases"]').contains('Test Cases').click();
//     cy.url().should('eq', 'https://automationexercise.com/test_cases');
//     cy.get('body').should('be.visible');
//   })
// });

// describe('Test Case 8', () => {
//     it('Verify All Products and product detail page', () => {
//         cy.mainSteps();
//         cy.get('a[href="/products"]').contains('Products').click();
//         cy.url().should('eq', 'https://automationexercise.com/products');
//         cy.get('body').should('be.visible');
//         cy.get('div.features_items h2').contains('All Products').should('be.visible');
//         cy.get('a[href="/products"]').contains('Products').click();
//         cy.get('a[href="/product_details/1"]').contains('View Product').click();
//         cy.url().should('eq', 'https://automationexercise.com/product_details/1');
//         //name, category, price, availability, condition, brand
//         cy.get('.product-information h2').contains('Blue Top').should('be.visible');
//         cy.get('.product-information p').contains('Category: Women > Tops').should('be.visible');
//         cy.get('.product-information span').contains('Rs. 500').should('be.visible');
//         cy.get('.product-information p').contains('Availability: In Stock').should('be.visible');
//         cy.get('.product-information p').contains('Condition: New').should('be.visible');
//         cy.get('.product-information p').contains('Brand: Polo').should('be.visible');
//     })
// })

// describe('Test Case 9', () => {
//     it('Search Product', () => {
//         cy.mainSteps();
//         cy.get('a[href="/products"]').contains('Products').click();
//         cy.url().should('eq', 'https://automationexercise.com/products');
//         cy.get('body').should('be.visible');
//         cy.get('#search_product').type('Winter Top');
//         cy.get('#submit_search').click();
//         cy.get('.features_items h2').contains('Searched Products').should('be.visible');
//         cy.get('.product-image-wrapper')
//             .should('have.length.greaterThan', 0) // Ensure at least one result appears
//             .each(($el) => {
//                 cy.wrap($el).should('be.visible'); // Ensure each product is visible
//             }); //ar tikrai cia tai ko reikia ???
//     })
// });


// describe('Test Case 10', () => {
//     it('Verify Subscription in home page', () => {
//         cy.mainSteps();
//         cy.scrollTo('bottom');
//         cy.get('footer').should('be.visible');
//         cy.get('.single-widget h2').contains('Subscription').should('be.visible');
//         cy.get('#susbscribe_email').type('monika@monika.lt');
//         cy.get('#subscribe').click();
//         cy.contains('You have been successfully subscribed!', { timeout: 2000 }).should('be.visible');

//     })
// })

// describe('Test Case 11', ()=>{
//     it('Verify Subscription in Cart page', ()=>{
//         cy.mainSteps();
// // 4. Click 'Cart' button
// cy.get('a[href="/view_cart"]').contains('Cart').click();
// // 5. Scroll down to footer
// // 6. Verify text 'SUBSCRIPTION'
// // 7. Enter email address in input and click arrow button
// // 8. Verify success message 'You have been successfully subscribed!' is visible

//     })
// })

describe('Test Case 12', () => {
    it('Add Products in Cart', () => {
        cy.mainSteps();
        cy.get('a[href="/products"]').contains('Products').click();
        cy.url().should('eq', 'https://automationexercise.com/products');
        cy.get('.product-image-wrapper').eq(0).trigger('mouseover');
        cy.get('.product-image-wrapper').eq(0).contains('Add to cart').click();
        cy.contains('Continue Shopping').click();
        cy.get('.product-image-wrapper').eq(1).trigger('mouseover');
        cy.get('.product-image-wrapper').eq(1).contains('Add to cart').click();
        cy.contains('View Cart').click();
        cy.get('.cart_description').should('have.length', 2)
        cy.get('.cart_price').each(($price) => {
            cy.wrap($price).should('be.visible'); // Ensure price is displayed
          });
      
        //   cy.get('.disabled').each(($quantity) => {
        //     cy.wrap($quantity).should('have.value', '1'); // Ensure quantity is 1
        //   });
      
        //   cy.get('.cart_total_price').each(($total) => {
        //     cy.wrap($total).should('be.visible'); // Ensure total price is displayed
        //   }); // neveikia
    })

})