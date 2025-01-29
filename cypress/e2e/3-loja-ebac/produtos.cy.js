/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos');
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block').first().click();
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
});