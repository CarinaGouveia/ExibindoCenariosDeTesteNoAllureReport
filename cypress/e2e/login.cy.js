///<reference types="Cypress" />
import cenario  from './gerkin/cenarios'

context('Dado que o usuario deseja acessara tela de login', () => { 
  describe('Quando o usuário preencher corretamente o endereço do site e apertar em "Enter', () => {
    it('Então o usuário deve ser direcinado para a tela de login', () => {
      cy.allure().descriptionHtml(cenario.AcessarTelaLogin);
      cy.visit('https://www.saucedemo.com/v1/');
      cy.get('.login_logo').should('be.visible');
    });
  });
});