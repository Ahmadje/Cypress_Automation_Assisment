import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'


describe('Login Feature', function () {
    before(() => {
        cy.fixture('testData').then((data) => {
            this.testData = data;
        })
        this.home = new HomePage();
        this.login = new LoginPage();
    })

    this.beforeEach(() => {
        cy.visit('/');
        this.home.getLoginBtn().click({ force: true });
    })

    it('Verify login with valid data', () => {
        this.login.loginWith(this.testData.validEmail, this.testData.validPassword + '{enter}')
        this.home.getLogoutBtn().should('have.text', ' Logout').should('be.visible');

    })

    it('Verify login with wrong password', () => {
        this.login.loginWith(this.testData.validEmail, this.testData.invalidPassword + '{enter}');
        this.login.getErrorMsg().should('have.text', 'Your email or password is incorrect!');
    })

    it('Verify login with wrong email', () => {
        this.login.loginWith(this.testData.wrongEmail, this.testData.validPassword + '{enter}');
        this.login.getErrorMsg().should('have.text', 'Your email or password is incorrect!');
    })

})
