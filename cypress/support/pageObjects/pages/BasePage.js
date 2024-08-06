/// <reference types="cypress" />

export default class BasePage {
    constructor() {
        this.baseURL = Cypress.env('BASE_URL3');
    }

    open(url) {
        cy.visit(`${this.baseURL}${url}`);
    }

}