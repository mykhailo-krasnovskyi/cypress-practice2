/// <reference types="cypress" />

describe('Basic queries', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.log('BEFORE EACH LOG');

    })

    before(() => {
        cy.log('BEFORE LOG');
    })

    after(() => {
        cy.log('AFTER LOG');
    })

    afterEach(() => {
        cy.log('AFTER EACH LOG');
    })

    it('Elements getting practice', () => {
        cy.get('#login-button');
        cy.get('[data-test="username"]');
        cy.contains('input', 'Login');
        cy.get('form').find('input');
        cy.get('[placeholder="Username"]').type('Test string');
        cy.get('[placeholder="Username"]').invoke('val').should('eq', 'Test string');
        cy.contains('input', 'Login').invoke('hide');
        cy.contains('input', 'Login').invoke('show');
        //  cy.title().its('length').should('eq', 24)

        cy.get('[placeholder="Password"]').parent().prev();
        cy.get('[placeholder="Password"]').parent().siblings('.form_group');
        cy.get('input').filter('[placeholder="Username"]');
        cy.get('input').not('[placeholder="Username"]');
        cy.get('[data-test="login-button"]').as('loginButton');
        // cy.get('[data-test="error"]').as('errorMsg');
        cy.get('@loginButton').click();
        // cy.get('@errorMsg').invoke('text').should('eq', 'Epic sadface: Password is required')
        // cy.get('input').each(($item, index, $list) => {
        //     // $item - поточний елемент
        //     // index - індекс поточного елемента
        //     // $list - список всіх елементів
        //     cy.log(index);
        //     cy.wrap($item).click(); // Наприклад, натискання на кожен елемент
        // });
        // cy.contains('Login').prevAll();
        // cy.log('DEBUG:')
        // cy.get('[data-test="error"]').invoke('text').then((text) => {
        //     cy.log(text);

        // })

    })


    it('Success login test', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it.only('Login with incorrect password', () => {
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('example');
        cy.get('[data-test="login-button"]').click();
        cy.get('[data-test="error"]').invoke('text').should('eq', 'Epic sadface: Username and password do not match any user in this service');
        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    })

    it.only('Login with incorrect password', () => {
        cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            },
        });

    })

})