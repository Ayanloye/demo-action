/// <reference types="cypress" />
let el
describe('VALID LOGIN', () => {
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

  it('Verify that homepage logo is Visible',()=>{
    cy.get(el.homepageLogo).should('be.visible')
  })

  it('Verify user can click on signup',()=>{
    cy.get(el.signUp).click()
  })

  it('Verify user can input Email address',()=>{
    cy.get(el.loginEmail).should('be.visible').type('test1235@yahoo.com')
  })

  it('Verify user can input Password',()=>{
    cy.get(el.loginPassword).should('be.visible').type('testing12345')
  })

  it('User should be able to click on Login Button',()=>{
    cy.get(el.loginButton).should('be.visible').click()
    
  })

  it('Verify user can scroll to the footer',()=>{
    cy.get(el.toview).scrollIntoView({ duration: 4000 })
  })

  it('Verify can input email in Subscription Email field',()=>{
    cy.get(el.subscriptionEmail).type('test12345@gmail.com')
  })

  it('Verify user can logout',()=>{
    cy.get(el.subscribeButton).click()
    cy.contains('Logout').click()
  })
  
})


describe('INVALID LOGIN', () => {
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

  it('Verify that homepage logo is Visible',()=>{
    cy.get(el.homepageLogo).should('be.visible')
  })

  it('Verify user can click on signup',()=>{
    cy.get(el.signUp).click()
  })

  it('Verify user can input Email address',()=>{
    cy.get(el.loginEmail).should('be.visible').type('test1235@gmail.com')
  })

  it('Verify user can input Password',()=>{
    cy.get(el.loginPassword).should('be.visible').type('testing')
  })

  it('User should be able to click on Login Button',()=>{
    cy.get(el.loginButton).should('be.visible').click()
    
  })

  it('Verify user get an error message',()=>{
    cy.contains('Your email or password is incorrect!').should('be.visible')
    
  })

})


