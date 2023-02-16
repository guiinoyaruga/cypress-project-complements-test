describe("Teste de Cadastro de Complementos ", () => {
  
  beforeEach(() => {
    cy.loginYooga("14625673712", "humm3r28@*");
  });

  it("Acesso > Ajuste > Produtos > Complementos > + Novo Complemento", () => {

    // Ação de clicar no botão de Ajuste após login
    cy.wait(2000)
      .get('[appevent="app-sidebar-clicked-settings"]')
      .click()

    // Ação de clicar no botão de produtos
    cy.wait(2000)
      .get('[appevent="app-settings-clicked-products"]')
      .click();

    // Ação de clicar na aba de complementos
    cy.wait(2000)
      .get(".segment-button-after-checked")
      .click();

    // Ação de clicar no botão de + Novo Complemento
    cy.wait(1000);
    cy.get(".yoo-button").click();

    // Ação de preencher o campo nome do complemento
    cy.wait(1000)
      .get(".nome-produto > .yoo-input-style")
      .click()
      .type("Cobertura de Morango");

    // Ação de preencher o campo valor do complemento
    cy.wait(1000)
      .get(".custo-venda-row > :nth-child(1) > .yoo-input-style")
      .click()
      .type("3,00");

    // Ação de preencher o campo custo do complemento
    cy.wait(1000)
      .get(".custo-venda-row > :nth-child(2) > .yoo-input-style.ng-untouched")
      .type("1,50");

    // Ação de preencher o campo estoque do complemento
    cy.wait(1000)
      .get(".estoque-row > :nth-child(1) > .yoo-input-style")
      .type("100,000");

    // Ação de preencher o campo estoque mínimo do complemento
    cy.wait(1000)
      .get('.estoque-row > [size="5.8"] > .yoo-input-style')
      .type("3,000");

    // Ação de preencher o código PDV do complemento
    cy.wait(1000)
      .get(".pdv-row > .md > .yoo-input-style")
      .type("222");

    // Ação de clicar no botão de salvar o cadastro do complemento
    cy.wait(500)
      .get('.footer-shadow-modal > [type="p1"] > .yoo-button')
      .click();
    
    // Ação de buscar no campo o complemento cadastrado
    cy.wait(2000)
      .get(
      ".ion-search-sem-padding > .searchbar-input-container > .searchbar-input")
      .click()
      .type("Cobertura de Morango")

    // Verificação se o complemento foi de fato cadastrado  
    cy.wait(1000)
      .get(".name-produto")
      .contains("Cobertura de Morango")
      .should("be.visible")
    
    // Ação de clicar no botão de 3 pontinhos e depois em editar complemento
    cy.wait(1000)
      .get('.tooltip-produto > .ion-color').click()
      .wait(500)
      .get('.tooltiptext > :nth-child(1)').click()

    // Ação de editar o produto já cadastrado (nome e valor do complemento)
    cy.wait(1000)
      .get(".nome-produto > .yoo-input-style")
      .click()
      .clear()
      .type("Cobertura de Chocolate")
      .wait(1000)  
      .get(".custo-venda-row > :nth-child(1) > .yoo-input-style")
      .click()
      .clear()
      .type("4,00");

    // Ação de clicar no botão de salvar o cadastro do complemento atualizado
    cy.wait(500)
      .get('.footer-shadow-modal > [type="p1"] > .yoo-button')
      .click();

    //Ação de buscar o complemento atualizado    
    cy.wait(2000)
      .get(".ion-search-sem-padding > .searchbar-input-container > .searchbar-input")
      .click()
      .type("Cobertura de Chocolate")
    
    // Ação de clicar no 3 pontinhos e clicar em editar (para poder acessar o cadastro)  
    cy.wait(500)
      .get('.tooltip-produto > .ion-color')
      .click()
      .wait(500)
      .get('.tooltiptext > :nth-child(1)')
      .click()

    // Ação de clicar no ícone de lixeira para excluir
    cy.wait(1000)
      .get('.trash-button > figure > img')
      .click()

    // Ação de clicar em "Sim" para confirmar a exclusão do complemento
    cy.wait(1000)
      .get(':nth-child(2) > .alert-button-inner')
      .click()

    // Ação para buscar o produto no campo de busca
    cy.wait(500)
      .get(".ion-search-sem-padding > .searchbar-input-container > .searchbar-input")
      .click()
      .type("Cobertura de Chocolate")

    // Ação de após buscar o produto excluir, confirmar se de fato foi excluido
    cy.wait(1000)
      .get(".pather-loading-content")
      .contains("Cobertura de Chocolate")
      .should("not.exist")
  });
});
