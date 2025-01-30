/// <reference types="cypress" />
import produtosPage from '../../support/page-objects/produtos.page';


describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        produtosPage.buscaProdutoLista('Ariel Roll Sleeve Sweatshirt');
        cy.get('.product_title').should('exist');
    });

    it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block').last().click();    
        cy.get('.product_title').should('exist');
    });

    it('Deve selecionar um produto indicado na lista', () => {
        cy.get('.product-block').eq(2).click();
        cy.get('.product_title').should('exist');
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').contains('Ajax Full-Zip Sweatshirt').click();
        cy.get('.product_title').should('exist');
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie';
        produtosPage.buscarProduto(produto);
        cy.get('.product_title').should('contain', produto);
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Apollo Running Short')
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('M', 'Red', 7)

        cy.get('.woocommerce-message').should('exist')
    });

    it.only('Deve adicionar produto ao carrinho - Buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            let produto = 2
            produtosPage.buscarProduto(dados[produto].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[produto].tamanho, dados[produto].cor, dados[produto].quantidade)
    
            cy.get('.woocommerce-message').should('contain', dados[produto].nomeProduto)
        })

    });
});