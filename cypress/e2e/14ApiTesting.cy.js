

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

describe('Api 4', ()=>{
    it('PUT To All Brands List', ()=>{
        cy.request('PUT', 'https://automationexercise.com/api/productsList').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 405);
            expect(responseBody).to.have.property('message', 'This request method is not supported.')
        });
    })
});

describe('Api 5', ()=>{
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


describe('Api 6', ()=>{
    it('POST To Search Product without search product parameter', ()=>{
        cy.request('POST', 'https://automationexercise.com/api/searchProduct').then((response) => {
            const responseBody = JSON.parse(response.body);
            expect(responseBody).to.have.property('responseCode', 400);
            expect(responseBody).to.have.property('message', 'Bad request, search_product parameter is missing in POST request.')
        });
    })
})
