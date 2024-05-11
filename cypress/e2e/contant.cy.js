/// <reference types="cypress" />
let el
describe('CONTACT US', () => {
  before(()=>{
    cy.fixture('locator').then((sel)=>{
      el=sel
    })
    Cypress.on('uncaught:exception',()=>{
      return false
    })
  })

  it('Navigate to URl',()=>{
    cy.visit('/')
  })

  it('User click on Contact us',()=>{
    cy.get(el.contactUs).click()

  })
  it('Verify contact us form is Visible',()=>{
    cy.get(el.contactForm).should('be.visible')
  })

  it('User input name',()=>{
    cy.get(el.contactName).type('Segun Samson')
  })

  it('User input Email',()=>{
    cy.get(el.contactEmail).type('segun1650@gmail.com')
  })

  it('User input Subject',()=>{
    cy.get(el.contactSubject).type('Cypress Project')
  })
  it('User input Message',()=>{
    cy.get(el.contactMessage).type('Today is cypress project Defence, Wishing my self the very best of luck')
  })

  it('User upload document',()=>{
    cy.get(el.chooseFile).attachFile('faith.jpg')
  })

  it('User submit form',()=>{
    cy.get(el.submitUpload).click()
  })

  it('Verify user get a message after submission',()=>{
    cy.get(el.status).should('be.visible').scrollIntoView({duration:2000})
  })

})