/// <reference types="cypress" />

import LoginPage from "../../support/pageObjects/pages/LoginPage";
import testData from '../../fixtures/credentials.json'



describe('Login tests with POM', {
    env: {
        BASE_URL4: 'https://www.saucedemo.com/',
    },
}, () => {

    beforeEach(() => {
        LoginPage.open();
    })

    it('Success login test', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.correctPassword);
        cy.get('[data-test="title"]').should('have.text', 'Products');
        cy.url().should('include', 'inventory.html');
    })

    it('Login with incorrect password', () => {
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.incorrectPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })


    it('Login with incorrect userName', () => {
        LoginPage.login(testData.userNames.incorrectUsername, testData.passwords.correctPassword);
        LoginPage.verifyErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })

    it('Login with correct data from fixtures', () => {
        cy.fixture('credentials').then((userFixture) => {
            LoginPage.login(userFixture.userNames.correctUsername, userFixture.passwords.correctPassword);
            cy.get('[data-test="title"]').debug().should('have.text', 'Products');
            cy.url().should('include', 'inventory.html');
            cy.log(JSON.stringify(Cypress.env()));
        })

    })







})