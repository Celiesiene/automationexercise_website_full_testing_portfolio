

describe('Api 1', () => {
    it('Get All Products List', () => {
        cy.request('GET', 'https://automationexercise.com/api/productsList').then((response) => {
            const responseBody = JSON.parse(response.body); //jeigu nepanžverčiu į JSON neveikia
            expect(responseBody).to.have.property('responseCode', 200);
            expect(responseBody).to.have.property('products').that.is.an('array');
        });

    });
});

describe('Api 2', () => {
    it('POST To All products List', () => {
        cy.request('POST', 'https://automationexercise.com/api/productsList').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.')
        });
    });
});

describe('Api 3', () => {
    it('Get All Brands List', () => {
        cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 200);
            expect(responseBody).to.have.property('brands').that.is.an('array');
        });

    });

    it("Brands have all properties", () => {
        cy.request("GET", 'https://automationexercise.com/api/brandsList').then((response) => {
            expect(response.status).to.eq(200);
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property("brands").that.is.an("array");
            responseBody.brands.forEach((brand) => {
                expect(brand).to.have.property("id");
                expect(brand).to.have.property("brand");
            });
        });
    });
});

describe('Api 4', () => {
    it('PUT To All Brands List', () => {
        cy.request('PUT', 'https://automationexercise.com/api/productsList').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.')
        });
    })
});

describe('Api 5', () => {
    it('POST To Search Product', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/searchProduct",
            form: true, // Užtikrina, kad duomenys siunčiami kaip form data
            body: { search_product: "top" }
        }).then((response) => {
            expect(response.status).to.eq(200); // Patikrina, ar atsakymo kodas 200
            const responseBody = JSON.parse(response.body);
            // Patikrina, ar yra produktų sąrašas
            expect(responseBody).to.have.property("products").that.is.an("array");
            // Patikrina, ar bent vienas produktas turi būtinus laukus
            if (responseBody.products.length > 0) {
                responseBody.products.forEach((product) => {
                    expect(product).to.have.property("id").that.is.a("number");
                    expect(product).to.have.property("name").that.is.a("string");
                    expect(product).to.have.property("price").that.is.a("string");
                    expect(product).to.have.property("brand").that.is.a("string");
                    expect(product).to.have.property("category").that.is.a("object");
                });
            }
        });
    });
});


describe('Api 6', () => {
    it('POST To Search Product without search product parameter', () => {
        cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 400);
            expect(responseBody).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.')
        });
    })
});

describe('Api 7', () => {
    it('POST To Verify Login with valid details', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            form: true, // Užtikrina, kad duomenys siunčiami kaip form data
            body: {
                email: "bebras@gmailll.com",
                password: "bebriukas"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 200);
            expect(responseBody).to.have.property('message', 'User exists!')

        });
    });
});

describe('Api 8', () => {
    it('POST To Verify Login without email parameter', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            form: true, // Užtikrina, kad duomenys siunčiami kaip form data
            body: { password: "bebriukas" }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 400);
            expect(responseBody).to.have.property('message', 'Bad request, email or password parameter is missing in POST request.')

        });
    })
});

describe('Api 9', ()=>{
    it('DELETE To Verify Login', ()=>{
        cy.request('DELETE', 'https://automationexercise.com/api/verifyLogin').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.')
        }); 
    })
});

describe('Api 10', () => {
    it('POST To Verify Login with invalid details', () => {
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/verifyLogin",
            form: true, // Užtikrina, kad duomenys siunčiami kaip form data
            body: {
                email: "nera@nera.com",
                password: "neratokio"
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 404);
            expect(responseBody).to.have.property('message', 'User not found!')

        });
    });
});

describe('Api 11', ()=>{
    it('POST To Create/Register User Account', ()=>{
        cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/createAccount",
            form: true, // Užtikrina, kad duomenys siunčiami kaip form data
            body: { name: "mama" ,
                email: "mamytee@mama.lt",
                password: "mamyte",
                title: "Mrs",
                birth_date: "08",
                birth_month: "6",
                birth_year: "1991",
                firstname: "mama",
                lastname: "mamyte",
                company: "family",
                address1: "love str",
                address2: "22",
                country: "heaven",
                zipcode: "98765",
                state: "9cloud",
                city: "paradise",
                mobile_number: "123123123"
            }
        }).then((response) => {
            expect(response.status).to.eq(200); // Patikrina, ar atsakymo kodas 200
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 201);
            expect(responseBody).to.have.property('message', 'User created!')
        });
    })
})  

describe('Api 13', ()=>{
        it('PUT METHOD To Update User Account', ()=>{
            cy.request({
                method: "PUT",
                url: "https://automationexercise.com/api/updateAccount",
                form: true, // Užtikrina, kad duomenys siunčiami kaip form data
                body: { name: "mama" ,
                    email: "mamytee@mama.lt",
                    password: "mamyte",
                    title: "Mrs",
                    birth_date: "08",
                    birth_month: "6",
                    birth_year: "1991",
                    firstname: "mama",
                    lastname: "mamyte",
                    company: "family",
                    address1: "love str",
                    address2: "22",
                    country: "heaven",
                    zipcode: "98765",
                    state: "9cloud",
                    city: "paradise",
                    mobile_number: "5441234"
                }
            }).then((response) => {
                expect(response.status).to.eq(200); // Patikrina, ar atsakymo kodas 200
                const responseBody = JSON.parse(response.body);
                expect(responseBody).to.have.property('responseCode', 200);
                expect(responseBody).to.have.property('message', 'User updated!')
            });
        })
    });

describe('Api 14', () => {
    it('GET user account detail by email', () => {
        cy.request({
                        method: "GET",
                        url: "https://automationexercise.com/api/getUserDetailByEmail",
                        qs: { 
                            email: "mamytee@mama.lt",
                        }
                    }).then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 200);
            expect(responseBody).to.have.property('user').that.is.an('object');
        });

    });
}) 






describe('Api 12', ()=> {
    it('DELETE METHOD To Delete User Account', ()=>{
        cy.request({
                        method: "DELETE",
                        url: "https://automationexercise.com/api/deleteAccount",
                        form: true, // Užtikrina, kad duomenys siunčiami kaip form data
                        body: { 
                            email: "mamytee@mama.lt",
                            password: "mamyte",
                        }
                    }).then((response) => {
                        expect(response.status).to.eq(200); 
                        const responseBody = JSON.parse(response.body);
                        expect(responseBody).to.have.property('responseCode', 200);
                        expect(responseBody).to.have.property('message', 'Account deleted!')
                    });
    })
}) 



