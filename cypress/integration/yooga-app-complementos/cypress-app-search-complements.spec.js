describe("Teste de Complementos", () => {

  beforeEach(() => {
    cy.loginYooga("", "");
  });

  it("Acesso a Ajustes> Produtos> Complementos", () => {
    cy.wait(1500)
      .get('[appevent="app-sidebar-clicked-settings"]')
      .click();

    // Ação de clicar no botão de produtos
    cy.wait(2000)
      .get('[appevent="app-settings-clicked-products"]')
      .click();

    // Ação de comprar na aba de complementos
    cy.wait(1500)
      .get(".segment-button-after-checked")
      .click()
      
    // Ação de selecionar campo de pesquisa 
    cy.wait(1500)
      .get(".ion-search-sem-padding > .searchbar-input-container > .searchbar-input")
      .click()
      .type("Uva")
      
    // Ação de buscar produto "Uva" no campo de busca
    cy.wait(1500)
      .get(".name-produto")
      .contains("Uva")
      .should("be.visible")
      
    // Ação de buscar um complemento que não existe cadastrado
    cy.wait(1500)
      .get(".ion-search-sem-padding > .searchbar-input-container > .searchbar-input")
      .clear()
      .click()
      .type("KitKat")

    cy.wait(1500)
      .get('.pather-loading-content')
      .contains("KitKat")
      .should("not.exist")
  });
});
