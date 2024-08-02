describe('Advanced actions', () => {

    it('clear', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('test string');
        cy.get('[data-test="username"]').clear();
        cy.get('[data-test="username"]').type('test string2');

    })


    it('select', () => {
        cy.visit('https://practice.expandtesting.com/dropdown');
        cy.get('#country').select('Andorra');
        cy.get('#country').select('AR');
    })


    it('check/uncheck', () => {
        cy.visit('https://practice.expandtesting.com/checkboxes');
        cy.get('#checkbox1').check();
        cy.get('#checkbox2').uncheck();
    })


    it('scroll', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
        cy.get('[data-test="footer"]').scrollIntoView();
    })

    it('submit', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('form').submit();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');

    })

    it('file upload', () => {
        cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html');
        cy.get('input[type=file]').selectFile('cypress/fixtures/example.json');
        cy.get('form').submit();


    })


    it('go', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('form').submit();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
        cy.go('back');
        cy.go('forward');

        cy.wait(2000);
        cy.reload();

        cy.get().should('contain.text')


    })

    it.only('should', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.get('[data-test="username"]')
            .should('have.attr', 'placeholder', 'Username')

        const number = -2;
        //expect(number).to.be.at.least(1);
        cy.wrap(number).should('be.greaterThan', 1);
 


    })





})