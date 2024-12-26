export default class loginPage {
    static inputUsername(){
        return cy.get('input[placeholder="Username"]');
    }
    static inputPassword(){
        return cy.get('input[placeholder="Password"]');
    }
    static buttonLogin(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]');
    }
    static buttonForgot(){
        return cy.get('[class="oxd-text oxd-text--p orangehrm-login-forgot-header"]');
    }
    static inputUsernamepw(){
        return cy.get('[class="oxd-input oxd-input--active"]');
    }
    static buttonReset(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]');
    }
    static buttonCancel(){
        return cy.get('[class="oxd-button oxd-button--large oxd-button--ghost orangehrm-forgot-password-button orangehrm-forgot-password-button--cancel"]');
    }
    static buttonDirectory(){
        return cy.contains('Directory');
    }
    static inputHints(){
        return cy.get('[placeholder="Type for hints..."]');
    }
    static buttonSelectjob(){
        return cy.get('.oxd-select-text--active').eq(0);
    }
    static buttonSelectloc(){
        return cy.get('.oxd-select-text--active').eq(1);
    }
    static buttonSearch(){
        return cy.get('[class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space"]');
    }
}