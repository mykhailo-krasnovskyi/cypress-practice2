// // ***********************************************
import '@shelex/cypress-allure-plugin';

// // This example commands.js shows you how to
// // create various custom commands and overwrite
// // existing commands.
// //
// // For more comprehensive examples of custom
// // commands please read more here:
// // https://on.cypress.io/custom-commands
// // ***********************************************
// //
// //
// // -- This is a parent command --
// // Cypress.Commands.add('login', (email, password) => { ... })
// //
// //
// // -- This is a child command --
// // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// //
// //
// // -- This is a dual command --
// // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// //
// //
// // -- This will overwrite an existing command --
// // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add('login', (username, password) => {
//     cy.get('[data-test="username"]').type(username);
//     cy.get('[data-test="password"]').type(password)
//     cy.get('form').submit();
// });

// Cypress.Commands.add('customCommand', () => {
//     console.log('Original implementation of customCommand');
//   });
  
//   // Перевизначення команди
//   Cypress.Commands.overwrite('customCommand', (originalFn) => {
//     console.log('New implementation of customCommand');
//     // Виклик оригінальної функції
//     originalFn();
//   });
  
//   // Виклик перевизначеної команди
//   cy.customCommand();