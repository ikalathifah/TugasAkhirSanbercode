import loginPage from "../pomOrange/login";

describe('Fitur Directory', () => {
    it('Test Function Directory with Valid Credentials 1', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
        cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.buttonLogin().click();
        cy.wait(3000);
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
        loginPage.buttonDirectory().click();
        cy.wait(3000);
        loginPage.inputHints().type('Peter');
        cy.wait(3000);
        cy.contains('Anderson').click();
        loginPage.buttonSelectjob().click();
        cy.contains('.oxd-select-option', 'Chief Financial Officer').click(); // Untuk tombol pertama
        loginPage.buttonSelectloc().click();
        cy.contains('.oxd-select-option', 'New York').click(); // Untuk tombol kedua
        loginPage.buttonSearch().click();
        cy.get('[class="oxd-text oxd-text--span"]').should('have.text', ' (1) Records Found');
    }
    )
})
describe('Fitur Directory', () => {
    it('Test Function Directory with Valid Credentials 2', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
        cy.intercept("GET", "**/employees/action-summary").as("actionsummary");
        loginPage.inputUsername().type('Admin');
        loginPage.inputPassword().type('admin123');
        loginPage.buttonLogin().click();
        cy.wait(3000);
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
        loginPage.buttonDirectory().click();
        cy.wait(3000);
        loginPage.inputHints().type('Rebecca');
        cy.wait(3000);
        cy.contains('Harmony').click();
        loginPage.buttonSelectjob().click();
        cy.contains('.oxd-select-option', 'QA Engineer').click(); // Untuk tombol pertama
        loginPage.buttonSelectloc().click();
        cy.contains('.oxd-select-option', 'Texas').click(); // Untuk tombol kedua
        loginPage.buttonSearch().click();
        cy.get('[class="oxd-text oxd-text--span"]').should('have.text', ' (1) Records Found');
        cy.contains('Reset').click();
        cy.get('[class="oxd-text oxd-text--span"]').should('have.text', ' (116) Records Found');
    }
    )
})