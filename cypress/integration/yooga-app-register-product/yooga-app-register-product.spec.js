describe("Teste de Cadastro de Complementos ", () => {
  beforeEach(() => {
    cy.loginYooga("", "").wait(1000);
  });

  it("Acesso > Ajuste > Produtos > Complementos > + Novo Complemento", () => {
    cy.wait(2000);
    cy.get('[appevent="app-sidebar-clicked-settings"]').click();

    cy.get('[appevent="app-settings-clicked-products"]').click();

    cy.get(".segment-button-after-checked").click();

    cy.wait(1000);
    cy.get(".yoo-button").click();

    cy.wait(1000);
    cy.get(".nome-produto > .yoo-input-style")
      .click()
      .type("Cobertura de Morango");

    cy.wait(1000);
    cy.get(".custo-venda-row > :nth-child(1) > .yoo-input-style")
      .click()
      .type("3,00");

    cy.wait(1000);
    cy.get(
      ".custo-venda-row > :nth-child(2) > .yoo-input-style.ng-untouched"
    ).type("1,50");

    cy.wait(1000);
    cy.get(".estoque-row > :nth-child(1) > .yoo-input-style").type("100,000");

    cy.wait(1000);
    cy.get('.estoque-row > [size="5.8"] > .yoo-input-style').type("3,000");

    cy.wait(1000);
    cy.get(".pdv-row > .md > .yoo-input-style").type("222");

    cy.wait(500);
    cy.get('.footer-shadow-modal > [type="p1"] > .yoo-button').click();

    cy.wait(500);
    cy.get(
      ".ion-search-sem-padding > .searchbar-input-container > .searchbar-input"
    )
      .click()
      .type("Cobertura de Morango")
      .wait(1000)

    cy.get(".name-produto")
      .contains("Cobertura de Morango")
      .should("be.visible")
      .wait(1000);

    cy.get('.tooltip-produto > .ion-color').click()
      .wait(500)

    cy.get('.tooltiptext > :nth-child(1)').click()
      .wait(500)

    cy.wait(1000);
    cy.get(".nome-produto > .yoo-input-style")
      .click()
      .clear()
      .type("Cobertura de Chocolate");

    cy.wait(1000);
    cy.get(".custo-venda-row > :nth-child(1) > .yoo-input-style")
      .click()
      .clear()
      .type("4,00");

    cy.wait(500);
    cy.get('.footer-shadow-modal > [type="p1"] > .yoo-button').click();

    cy.wait(1000)
    cy.get(
        ".ion-search-sem-padding > .searchbar-input-container > .searchbar-input"
      )
      .click()
      .type("Cobertura de Chocolate")

    cy.wait(500)
    cy.get('.tooltip-produto > .ion-color').click()

    cy.wait(500)
    cy.get('.tooltiptext > :nth-child(1)').click()

    cy.wait(1000)
    cy.get('.trash-button > figure > img').click()

    cy.wait(1000)
    cy.get(':nth-child(2) > .alert-button-inner').click()

  
    cy.wait(500);
    cy.get(
      ".ion-search-sem-padding > .searchbar-input-container > .searchbar-input"
    )
      .click()
      .type("Cobertura de Chocolate")
      .wait(1000)

    cy.get(".pather-loading-content")
      .contains("Cobertura de Chocolate")
      .should("not.exist")
      .wait(1000);
    
  });
});
