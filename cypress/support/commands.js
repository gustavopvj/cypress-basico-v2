Cypress.Commands.add("fillMandatoryFieldsAndSubmit", function () {
  cy.get("#firstName").type("Gustavo");
  cy.get("#lastName").type("Araujo");
  cy.get("#email").type("gustavo@exemplo.com");
  cy.get("#open-text-area").type("Teste");
  cy.contains("button", "Enviar").click();
});
