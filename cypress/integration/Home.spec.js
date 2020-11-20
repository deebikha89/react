describe("The Home Page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("Successfully load admin", () => { 
        cy.get('input[name=username]').type("rchowdary@Digibank.co.il")
        cy.get('input[name=password]').type("dkal").type(`{enter}`)
        cy.get('.role').contains("ROLE ASSIGNED - Admin")
        cy.get('.dashboardLink')
    })
    it("Successfully load Sales Executive", () => {
        cy.get('input[name=username]').type("selumalai@Digibank.co.il")
        cy.get('input[name=password]').type("dkal").type(`{enter}`)
        cy.get('.role').contains("ROLE ASSIGNED - Sales Executive")
        
    })

})