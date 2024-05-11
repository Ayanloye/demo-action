/// <reference types="cypress" />
let el
describe('SUCCESSFUL SIGNUP', () => {
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
  it('Verify signup form is visible',()=>{
    cy.get(el.signupForm).should('be.visible')
  })

  it('User should be able to enter Name',()=>{
    cy.get(el.signupNameHolder).should('be.visible').type(el.signupName)
  })

  it('User should be able to enter Email',()=>{
    cy.get(el.signupEmailHolder).should('be.visible').type(el.signupEmail)
    cy.screenshot()
  })
  
  it('Verify user can click on Signup Button',()=>{
    cy.get(el.signupButton).should('be.visible').click()
  })

  it('Verify user can choose Gender',()=>{
    cy.get('[type="radio"]').check('Mr')
  })

  it('Verify user can enter Password',()=>{
    cy.get(el.passwordField).type(el.signupPassword)
  })

  it('Verify user can select Day of Birth',()=>{
    cy.get(el.day).select(16)
  })

  it('verify user can select Month of Birth',()=>{
    cy.get(el.month).select('February')
  })

  it('verify user can select Year of Birth',()=>{
    cy.get(el.year).select('2015')
  })

  it('verify user click to receive newsletter',()=>{
    cy.get(el.newsletter).click()
  })

  it('verify user click to special offer Checkbox',()=>{
    cy.get(el.specialCheckbox).click()
  })

  it('User should be able to enter First Name',()=>{
    cy.get(el.firstNameField).type(el.firstName)
  })

  it('User should be able to enter Last Name',()=>{
    cy.get(el.lastNameField).type(el.lastName)
  })

  it('User should be able to enter Company Name',()=>{
    cy.get(el.companyName).type(el.companyname)
  })

  it('User should be able to enter Address 1',()=>{
    cy.get(el.address1).type(el.address)
  })

  it('User should be able to enter Address 2',()=>{
    cy.get(el.address2).type(el.address)
  })
  
  it('User should be able to select county',()=>{
    cy.get(el.country).select('United States')
  })

  it('User should be able to enter state',()=>{
    cy.get(el.state).type(el.cityName)
  })

  it('User should be able to enter City',()=>{
    cy.get(el.city).type(el.cityName)
  })

  it('User should be able to enter ZipCode',()=>{
    cy.get(el.zipcode).type(el.zipCode)
  })

  it('User should be able to enter Mobile Number',()=>{
    cy.get(el.mobileNumber).type(el.mobileNo)
    cy.screenshot()
  })

  it('User should be able to click on Create Account Buuton',()=>{
    cy.get(el.createAccountButton).should('be.visible').click()
  })

  it('Verify user is able to click on Continue button',()=>{
    cy.get(el.continueButton).should('be.visible').click()
  })

  it('Verify user can logout',()=>{
    cy.get(el.subscribeButton).click()
    cy.contains('Logout').click()
  })

})