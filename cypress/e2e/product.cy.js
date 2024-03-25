import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import 'cypress-xpath';
import ProductPage from '../pages/ProductPage';


describe('Filter Products by Catagoery', function () {
    before(() => {
        cy.fixture('testData').then((data) => {
            this.testData = data;
        })
        this.home = new HomePage();
        this.login = new LoginPage();
        this.product = new ProductPage();
    })

    this.beforeEach(() => {
        cy.visit('/');
        this.home.getLoginBtn().click({ force: true });
        this.login.loginWith(this.testData.validEmail, this.testData.validPassword + '{enter}')
    })

    it('Verify Filter Products on Women Catagoery', () => {
            this.home.getMainCatagoeryBtn().contains(this.testData.mainCatagoery[0]).click();
            this.home.getSubCatagoeryBtn().contains(this.testData.subCatagoery[0]).click();
                this.product.getProductTitle().contains(this.testData.subCatagoery[0]);
                cy.verifyProductsCatagoery(this.testData.subCatagoery[0])
        });

    it('Verify Filter Products on Men Catagoery', () => {
        this.home.getMainCatagoeryBtn().contains(this.testData.mainCatagoery[1]).click();
        this.home.getSubCatagoeryBtn().contains(this.testData.subCatagoery[1]).click();
        this.product.getProductTitle().contains(this.testData.subCatagoery[1]);
        cy.verifyProductsCatagoery(this.testData.subCatagoery[1])
    })

})
