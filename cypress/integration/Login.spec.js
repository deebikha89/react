import { mount } from 'cypress-react-unit-test' // or 

describe("The Login Page", () => {
    beforeEach(()=>{
        cy.visit('/')
    })
    it.only("successfully login", () => {
        
        cy.get('input[name=username]')
        cy.get('input[name=password]')
        cy.get('button[type="submit"]')
        
    })
    it("userName or password empty", () => {
        
        cy.get('button[type="submit"]').click()
        cy.get('.invalid-feedback').contains("Username is required")
        cy.get('.invalid-feedback').contains("Password is required")

    })
  
    
})