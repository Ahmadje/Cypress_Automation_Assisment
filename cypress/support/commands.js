
Cypress.Commands.add('verifyProductsCatagoery', (productCatagoery) => {
    cy.get('.productinfo.text-center > p').each((el, index) => {
        el.text().includes(productCatagoery);
    })
})

/*
Cypress.Commands.add('openEachSubCatagoery', () => {
    cy.xpath('//div[@class="panel-body"]//a').each((el, index) => {
        cy.get(el).invoke('text').then(text => {
        cy.get(el).contains(text).click({force:true});
        cy.get('.title').contains(text);
        cy.verifyProductsCatagoery(text);
        })
    })
})
*/