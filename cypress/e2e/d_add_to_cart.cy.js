/// <reference types="cypress" />
let el
describe('ADD PRODUCT TO CART', () => {
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

  it('User scroll to product',()=>{
    cy.get(el.blueTop).scrollIntoView({duration:2000})
    
  })

  it('User add product to cart',()=>{
    cy.get(el.addtoCart).click()
    
  })

  it('Verify success message is displayed',()=>{
    cy.get(el.modelContent).should('be.visible')
    
  })

  it('Verify success message is displayed',()=>{
    cy.get(el.continueShopping).should('be.visible').click()
    
  })

  it('User scroll to product',()=>{
    cy.get(el.fancyGreenTop).scrollIntoView({duration:2000})
    
  })

  it('User add product to cart',()=>{
    cy.get(el.addtoCart).click()
    
  })

  it('Verify success message is displayed',()=>{
    cy.get(el.modelContent).should('be.visible')
    
  })

  it('Verify success message is displayed',()=>{
    cy.get(el.continueShopping).should('be.visible').click()
    
  })

  it('User view product details',()=>{
    cy.get(el.premiumPolo).scrollIntoView({duration:3000})
    cy.get(el.viewProduct).click()
    
  })

  it('User add quantity of product',()=>{
    cy.get(el.quantity).clear().type('5')

  })

  it('User add product to cart',()=>{
    cy.get(el.addTocart).click()
    
  })

  it('Verify success message is displayed',()=>{
    cy.get(el.modelContent).should('be.visible')
    
  })

  it('Verify success message is displayed',()=>{
    cy.get(el.continueShopping).should('be.visible').click()
    
  })
  it('Verify review form is visible',()=>{
    cy.get(el.reviewForm).should('be.visible')
    
  })
  it('User input review name and email',()=>{
    cy.get(el.reviewName).type('Segun Samson')
    cy.get(el.reviewEmail).type('test1990@gmail.com')
    
  })

  it('User input review comment',()=>{
    cy.get(el.addReview).type('We are testing this website with Cypress')
    
  })

  it('User submit review',()=>{
    cy.get(el.reviewSubmit).click()
    cy.contains('Thank you for your review.').should('be.visible')
    
  })

})


describe('Order Product Added to Cart', () => {
  before(()=>{
    cy.fixture('locator').then((sel)=>{
      el=sel
    })
    Cypress.on('uncaught:exception',()=>{
      return false
    })
  })

  it('user click on cart',()=>{
    cy.get(el.cart).scrollIntoView({duration:3000}).click()
  })
  it('Verify cart table is visible',()=>{
    cy.get(el.cartTable).should('be.visible')
  })
  it('User click on Proceed to Checkout',()=>{
    cy.get(el.proceedCheckout).click()
  })

  it('Verify Delivery Address and Address Invoice is Visible',()=>{
    cy.get(el.deliveryAddress).should('be.visible')
    cy.get(el.addressInvoice).should('be.visible')
  })

  it('Verify Delivery Address and Address Invoice is Visible',()=>{
    cy.get(el.deliveryComment).type('I am learning Cypress')
  })
  it('User Click on Place Order',()=>{
    cy.get(el.placeOrder).click()
  })

  it('Verify payment order Form is Visible',()=>{
    cy.get(el.cardForm).should('be.visible')
  })

  it('User complete Form details',()=>{
    cy.get(el.addNameOfCard).type('Segun Samson')
    cy.get(el.addCardNo).type('5234-3635-5657')
    cy.get(el.addCvv).type('324')
    cy.get(el.addMonth).type('March')
    cy.get(el.addYear).type('2025')
  })
  it('User click on Pay and Confirm Order',()=>{
    cy.get(el.confirmPay).click()
  })

  it('Verify user receive successful message',()=>{
    cy.get(el.placeoder).should('be.visible')
    cy.contains('Congratulations! Your order has been confirmed!').should('be.visible')
  })

  it('User click on Download Receipt',()=>{
    cy.get(el.downloadReceipt).click()
  })

  it('User click on Continue Button',()=>{
    cy.get(el.continuebutton).click()
  })

  it('Verify user can logout',()=>{
    cy.get(el.subscribeButton).click()
    cy.contains('Logout').click()
  })

})