
/// <reference types="cypress"/>


// it('example, USED TOGETHER WITH TEST 2', () => {
//     cy.visit('https://automationexercise.com/')
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.signup-form h2').should('contain', 'New User Signup!')
//     cy.get('[data-qa="signup-name"]').type('naujas');
//     cy.get('[data-qa="signup-email"]').type('naujas@naujas.com');
//     cy.get('[data-qa="signup-button"]').click();
//     cy.get('.login-form h2').should('exist');
//     cy.get('.login-form h2').contains('Enter Account Information')
//     cy.get('#id_gender2').click();
//     cy.get('#name').type(' bebras');
//     // cy.get('#email').type('bebras@bebras.com');
//     cy.createAcc();
//     cy.contains('Logged in as naujas bebras').should('exist');
// })


// describe('Test Case 1', () => {
//     it('Register User', () => {
//         cy.mainSteps();
//         cy.contains('Signup / Login').should('exist').click(); //KAIP PAKEISTI VIETOJ CONTAINS???
//         cy.get('.signup-form h2').should('contain', 'New User Signup!')
//         cy.get('[data-qa="signup-name"]').type('bebras');
//         cy.get('[data-qa="signup-email"]').type('bebras@bebriukas.com');
//         cy.get('[data-qa="signup-name"]').should('have.value', 'bebras');
//         cy.get('[data-qa="signup-email"]').should('have.value', 'bebras@bebriukas.com');
//         cy.get('[data-qa="signup-button"]').click();
//         cy.get('.login-form h2').should('exist');
//         cy.get('.login-form h2').contains('Enter Account Information')
//         cy.get('#id_gender2').click();
//         cy.get('#name').type('bebras');
//         // cy.get('#email').type('bebras@bebras.com');
//         cy.createAcc();
//         cy.contains('Logged in as').should('exist');
//         cy.contains('Delete Account').should('exist').click();
//         cy.get('[data-qa="account-deleted"]').should('be.visible');
//         cy.get('[data-qa="continue-button"]').click();


//     })

// });

// describe('Test Case 2', () => {
//     it('Login User with correct email and password', () => {
//         cy.mainSteps();
//         cy.contains('Signup / Login').should('exist').click();
//         cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//         cy.get('[data-qa="login-email"]').type('naujas@naujas.com');
//         cy.get('[data-qa="login-password"]').type('bebriukas');
//         cy.get('[data-qa="login-button"]').click();
//         cy.contains('Logged in as naujas bebras').should('exist').and('be.visible');
//         cy.contains('Delete Account').should('exist').click();
//         cy.get('[data-qa="account-deleted"]').should('be.visible');
//     })
// })

// describe('Test Case 3', () => {
//   it('Login User with incorrect email and password', () => {
//   cy.mainSteps();
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//     cy.get('[data-qa="login-email"]').type('monika@monika.com');
//     cy.get('[data-qa="login-password"]').type('monikele');
//     cy.get('[data-qa="login-button"]').click();
//     cy.get('form p').contains('Your email or password is incorrect!').and('be.visible');
//   })
// });

// describe('Test Case 4', () => {
//     it('Logout User', () => {
//         cy.mainSteps();
//         cy.contains('Signup / Login').should('exist').click();
//         cy.get('.login-form h2').should('have.text', 'Login to your account').and('be.visible');
//         cy.get('[data-qa="login-email"]').type('bebras@gmailll.com');
//         cy.get('[data-qa="login-password"]').type('bebriukas');
//         cy.get('[data-qa="login-button"]').click();
//         cy.contains('Logged in as bebrasbebras').should('exist').and('be.visible');
//         cy.get('ul.navbar-nav li').contains('Logout').click();
//         cy.url().should('eq', 'https://automationexercise.com/login');


//     })
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
//         cy.get("ul.nav > li > a[href='/view_cart']").click();
//         cy.scrollTo('bottom');
//         cy.get('.single-widget h2').contains('Subscription').should('be.visible');
//         cy.get('#susbscribe_email').type('mama@mama.lt');
//         cy.get('#subscribe').click();
//         cy.contains('You have been successfully subscribed!', { timeout: 2000 }).should('be.visible');

//     })
// })

// describe('Test Case 12', () => {
//     it('Add Products in Cart', () => {
//         cy.mainSteps();
//         cy.get('a[href="/products"]').contains('Products').click();
//         cy.url().should('eq', 'https://automationexercise.com/products');
//         cy.addsSomeProducts();
//         cy.get('.cart_description').should('have.length', 2)
//         cy.get('.cart_price').each(($price) => {
//             cy.wrap($price).should('be.visible');
//         });
//         cy.get('.cart_quantity').each(($quantity) => {
//             cy.wrap($quantity).find('button').contains('1');
//         });
//         cy.get('.cart_total_price').each(($total) => {
//             cy.wrap($total).should('be.visible');
//         });
//     })

// });

// describe('Test Case 13', () => {
//     it('Verify Product quantity in Cart', () => {
//         cy.mainSteps();
//         cy.get('a[href="/product_details/6"]').contains('View Product').click();
//         cy.url().should('eq', 'https://automationexercise.com/product_details/6');
//         cy.get('.product-information h2').contains('Summer White Top').should('be.visible');
//         cy.get('#quantity').clear().type('4');
//         cy.get('.btn').contains('Add to cart').click();
//         cy.contains('View Cart').click();
//         cy.url().should('eq', 'https://automationexercise.com/view_cart');
//         cy.get('.cart_quantity button').invoke('text').should('eq','4');
//     })
// })


// describe('Test Case 14', () => {
//     it('Place Order: Register while Checkout', () => {
//         cy.mainSteps();
//         cy.addsSomeProducts();
//         cy.url().should('eq', 'https://automationexercise.com/view_cart');
//         cy.get('.breadcrumbs li').contains('Shopping Cart').should('be.visible');
//         cy.get('.btn').contains('Proceed To Checkout').click();
//         cy.get('a[href="/login"]').contains('Register / Login').click();
//         cy.get('[data-qa="signup-name"]').type('sausainiukas');
//         cy.get('[data-qa="signup-email"]').type('sausainiukas@sausainis.lt');
//         cy.get('[data-qa="signup-button"]').click();
//         cy.get('#id_gender2').click();
//         cy.get('#name').clear().type('sausainis');
//         // cy.get('#email').type('bebras@bebras.com');
//         cy.createAcc();
//         cy.contains('Logged in as sausainis').should('exist');
//         cy.get("ul.nav > li > a[href='/view_cart']").click();
//         cy.get('.btn').contains('Proceed To Checkout').click();
//         cy.get('.step-one h2').contains('Address Details').should('be.visible');
//         cy.get('.step-one h2').contains('Review Your Order').should('be.visible');
//         cy.get('.form-group textarea').type('send my order ASAP');
//         cy.get('a[href="/payment"]').contains('Place Order').click();
//         cy.paymentCardData();
//         cy.get('[data-qa="order-placed"]').contains('Order Placed!').should('be.visible');
//         cy.get('a[href="/delete_account"]').contains('Delete Account').click();
//         cy.get('[data-qa="continue-button"]').click();


//     })
// })

// describe('Test Case 15', () => {
//     it('Place Order:Register before Checkout', () => {
//         cy.mainSteps();
//         cy.get('a[href="/login"]').contains('Signup / Login').click();
//         cy.get('[data-qa="signup-name"]').type('naujokelissss');
//         cy.get('[data-qa="signup-email"]').type('naujokelisss@naujokas.com');
//         cy.get('[data-qa="signup-button"]').click();
//         cy.createAcc();
//         cy.contains('Logged in as naujokelissss').should('exist').and('be.visible');
//         cy.addsSomeProducts();
//         cy.contains('Cart').click();
//         cy.get('.breadcrumbs').contains('Shopping Cart').should('exist');
//         cy.contains('Proceed To Checkout').click(); //AR TIK TAIP GALIMA ???
//         cy.get('.step-one h2').contains('Address Details').should('be.visible');
//         cy.get('.step-one h2').contains('Review Your Order').should('be.visible');
//         cy.get('.form-group textarea').type('send my order ASAP');
//         cy.get('a[href="/payment"]').contains('Place Order').click();
//         cy.paymentCardData();
//         cy.get('form#payment-form').then(($form) => {
//             $form.on('submit', (e) => {
//                 e.preventDefault(); // Stop the form from being submitted automatically
//             });
//         });
//         cy.get('[data-qa="pay-button"]').click();
//         cy.get("#success_message > .alert-success").should("contain.text", "Your order has been placed successfully!");
//         cy.get('form#payment-form').then(($form) => {
//             $form.off('submit');
//         });
//         cy.get('[data-qa="pay-button"]').click();
//         cy.get('[data-qa="order-placed"]').contains('Order Placed!').should('be.visible');
//         cy.get('a[href="/delete_account"]').contains('Delete Account').click();
//         cy.get('[data-qa="continue-button"]').click();
//     })
// })



// it('example, USED TOGETHER WITH TEST 16', () => {
//     cy.visit('https://automationexercise.com/')
//     cy.contains('Signup / Login').should('exist').click();
//     cy.get('.signup-form h2').should('contain', 'New User Signup!')
//     cy.get('[data-qa="signup-name"]').type('lokys');
//     cy.get('[data-qa="signup-email"]').type('lokys@lokys.com');
//     cy.get('[data-qa="signup-button"]').click();
//     cy.get('.login-form h2').should('exist');
//     cy.get('.login-form h2').contains('Enter Account Information')
//     cy.get('#id_gender2').click();
//     cy.get('#name').type(' lokiukas');
//     cy.createAcc();
//     cy.contains('Logged in as lokys lokiukas').should('exist');
// })



// describe('Test Case 16', () => {
//     it('Place Order:Login before Checkout', () => {
//         cy.mainSteps();
//         cy.get('a[href="/login"]').contains('Signup / Login').click();
//         cy.get('[data-qa="login-email"]').type('lokys@lokys.com');
//         cy.get('[data-qa="login-password"]').type('bebriukas');
//         cy.get('[data-qa="login-button"]').click();
//         cy.contains('Logged in as').should('exist').and('be.visible');
//         cy.addsSomeProducts();
//         cy.contains('Cart').click();
//         cy.get('.breadcrumbs').contains('Shopping Cart').should('exist');
//         cy.contains('Proceed To Checkout').click(); //AR TIK TAIP GALIMA ???
//         cy.get('.step-one h2').contains('Address Details').should('be.visible');
//         cy.get('.step-one h2').contains('Review Your Order').should('be.visible');
//         cy.get('.form-group textarea').type('send my order ASAP');
//         cy.get('a[href="/payment"]').contains('Place Order').click();
//         cy.paymentCardData();
//         cy.get('form#payment-form').then(($form) => {
//             $form.on('submit', (e) => {
//                 e.preventDefault(); // Stop the form from being submitted automatically
//             });
//         });
//         cy.get('[data-qa="pay-button"]').click();
//         cy.get("#success_message > .alert-success").should("contain.text", "Your order has been placed successfully!");
//         cy.get('form#payment-form').then(($form) => {
//             $form.off('submit');
//         });
//         cy.get('[data-qa="pay-button"]').click();
//         cy.get('[data-qa="order-placed"]').contains('Order Placed!').should('be.visible');
//         cy.get('a[href="/delete_account"]').contains('Delete Account').click();
//         cy.get('[data-qa="continue-button"]').click();
//     })
// });

// describe('Test Case 17', ()=>{
//     it('Remove Products From Cart', ()=>{
//         cy.mainSteps();
//         cy.addsSomeProducts();
//         cy.contains('Cart').click();
//         cy.get('.breadcrumbs').contains('Shopping Cart').should('exist');
//         cy.get('a[href="/product_details/1"]').contains('Blue Top').should('be.visible');
//         cy.get('a[href="/product_details/2"]').contains('Men Tshirt').should('be.visible');
//         cy.get('[data-product-id="1"]').click();
//         cy.get('a[href="/product_details/1"]').should('not.exist');

//     })
// });

// describe('Test Case 18', () => {
//     it('View Category Products', () => {
//         cy.mainSteps();
//         cy.get('.left-sidebar').should('be.visible');
//         cy.get('a[href="#Women"]').contains('Women').click();
//         cy.get('.panel-body ul li').contains('Dress').click();
//         cy.get('.breadcrumb li').contains('Women > Dress').should('be.visible');
//         cy.get('.features_items h2').contains('Women - Dress Products').should('be.visible');
//         cy.get('a[href="#Men"]').contains('Men').click();
//         cy.get('.panel-body ul li').contains('Jeans').click();
//         cy.get('.breadcrumb li').contains('Men > Jeans').should('be.visible');
//         cy.get('.features_items h2').contains('Men - Jeans Products').should('be.visible');
//     })
// });

// describe('Test Case 19', ()=> {
//     it('View & Cart Brand Products', ()=>{
//         cy.mainSteps();
//         cy.get('a[href="/products"]').contains('Products').click();
//         cy.get('.brands_products').should('be.visible');
//         cy.get('a[href="/brand_products/H&M"]').contains('H&M').click();
//         cy.get('.breadcrumb li').contains('H&M').should('be.visible');
//         cy.get('.features_items').should('be.visible');
//         cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);
//         cy.get('a[href="/brand_products/Biba"]').contains('Biba').click();
//         cy.get('.breadcrumb li').contains('Biba').should('be.visible');
//         cy.get('.features_items h2').contains('Brand - Biba Products').should('be.visible');
//         cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);

//     })
// });

// describe('Test Case 20(Case 21)', () => {
//     it('Add review on product', () => {
//         cy.mainSteps();
//         cy.get('a[href="/products"]').contains('Products').click();
//         cy.get('.features_items h2').contains('All Products').should('be.visible');
//         cy.get('.features_items .col-sm-4').its('length').should('be.greaterThan', 0);
//         cy.get('a[href="/product_details/1"]').contains('View Product').click();
//         cy.get('a[href="#reviews"]').contains('Write Your Review').should('be.visible');
//         cy.get('#name').type('Monika');
//         cy.get('#email').type('monika@monika.lt');
//         cy.get('#review').type('What a wonderful product!');
//         cy.get('#button-review').click();
//         cy.contains('Thank you for your review', { timeout: 1000 }).should('be.visible');

//     })
// });
