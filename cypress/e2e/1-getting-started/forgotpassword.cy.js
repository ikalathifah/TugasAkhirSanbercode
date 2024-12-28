import loginPage from "../pomOrange/login";

describe('Fitur Forgot PW', () => {
    it('Test Function Button Forgot PW', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
        cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
        loginPage.buttonForgot().click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password');
    }
    )
})
describe('Fitur Forgot PW', () => {
    it('Test Function Forgot PW with Valid Credentials', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
        cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
        loginPage.buttonForgot().click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password');
        loginPage.inputUsernamepw().type('Admin');
        loginPage.buttonReset().click();
        cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text', 'Reset Password link sent successfully');
    }
    )
})
describe('Fitur Forgot PW', () => {
    it('Test Function Forgot PW Canceled', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
        cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
        loginPage.buttonForgot().click();
        loginPage.buttonCancel().click();
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    }
    )
})