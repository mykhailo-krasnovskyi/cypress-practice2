/// <reference types="cypress" />

import LoginPage from "../../support/pageObjects/pages/LoginPage";
import testData from '../../fixtures/credentials.json'



describe('Login tests with POM', () => {
    beforeEach(() => {
        LoginPage.open();
        LoginPage.login(testData.userNames.correctUsername, testData.passwords.correctPassword);
    })

    it('Verify sorting options number', () => {
        cy.get('[data-test="product-sort-container"] option').should('have.length', 4);
    })

})