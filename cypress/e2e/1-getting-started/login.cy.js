import loginPage from "../pomOrange/login";

describe('Fitur Login', () => {
 it('Test Function Login with Valid Credentials', () => {
   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   cy.wait(3000);
   cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
   loginPage.inputUsername().type('Admin');
   loginPage.inputPassword().type('admin123');
   let startTime;
   cy.intercept("GET","**/employees/action-summary", (req) => {
    startTime = Date.now();
   }).as("actionsummary");
   loginPage.buttonLogin().click();
   cy.wait("@actionsummary").then((intercept) => {
    const endTime = Date.now();
    const responseTime = endTime - startTime;
    cy.log(`Response Time: ${responseTime} ms`);
    expect(intercept.response.statusCode).to.equal(200);
    expect(responseTime).to.be.lessThan(3000);
    });
   cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text', 'Dashboard');
  }
)})
describe('Fitur Login', () => {
  it('Test Function Login with Invalid Username and Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(3000);
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    loginPage.inputUsername().type('Adminn');
    loginPage.inputPassword().type('adminn123');
    cy.intercept("GET","**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
   }
 )})
describe('Fitur Login', () => {
  it('Test Function Login with Invalid Uppercase', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(3000);
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    loginPage.inputUsername().type('ADMIN');
    loginPage.inputPassword().type('ADMIN123');
    cy.intercept("GET","**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
   }
 )})
describe('Fitur Login', () => {
  it('Test Function Login with Blank Input', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(3000);
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    cy.intercept("GET","**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
   }
 )})
describe('Fitur Login', () => {
  it('Test Function Login with User Doesnt Exist', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(3000);
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    loginPage.inputUsername().type('BukanAdmin');
    loginPage.inputPassword().type('bukanadmin123');
    cy.intercept("GET","**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
   }
 )})
describe('Fitur Login', () => {
  it('Test Function Login with Space Between', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text', 'Login');
    cy.wait(3000);
    loginPage.inputUsername().type('A d m i n');
    loginPage.inputPassword().type('admin123');
    cy.intercept("GET","**/employees/action-summary").as("actionsummary");
    loginPage.buttonLogin().click();
   }
 )})
