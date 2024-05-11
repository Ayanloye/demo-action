
describe('CYPRESS PROJECT', () => {
  before(()=>{
    
    Cypress.on('uncaught:exception',()=>{
      return false
    })
  })

  it('Verify user can navigate to URl',()=>{
    cy.visit('/')
  })

  it('Verify that homepage logo is Visible',()=>{
    cy.get('img').should('be.visible')
  })

  it('Verify user can click on cart',()=>{
    cy.get('.shop-menu > .nav > :nth-child(3) > a').click()
  })

  it('Verify Cart is empty',()=>{
    cy.contains('Cart is empty')
  })
  it('Verify user can click on Product',()=>{
    cy.get('.nav > :nth-child(2) > a').click()
  })

  it('user click on men T-shirt',()=>{
    cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
    cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()
  })
  it('Verify user add first product',()=>{
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-content').should('be.visible') //To check product is added successfully
    cy.get('.modal-footer > .btn').click()

  })

  it('Verify user can add second product',()=>{
    cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
    cy.get('.modal-footer > .btn').click()
  })

  it('Verify user can add third product',()=>{
    cy.get(':nth-child(6) > .product-image-wrapper > .single-products > .productinfo > .btn').click()

  })
  it('Verify user can view cart on the success banner',()=>{
    cy.get('.modal-body > :nth-child(2)').click()
  })

  it('Verify user can view the cart',()=>{
    cy.get('#cart_info').should('be.visible')
  })

  it('Verify the cost of each items',()=>{
    cy.contains('Rs. 1500').should('be.visible')
    cy.contains('Rs. 400').should('be.visible')
    cy.contains('Rs. 1299').should('be.visible')
  })

  })