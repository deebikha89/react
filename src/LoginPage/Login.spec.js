import { mount } from 'cypress-react-unit-test' // or 

describe("The Login Page", () => {
    
    it("successfully login", () => {

        cy.get('[name=username]')
        cy.get('[name=password]')
        cy.get('button[type="submit"]')

    })
    


})