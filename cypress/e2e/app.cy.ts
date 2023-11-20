
describe('Navigation', () => {
  it('[broken] should navigate to the foo page', () => {
    cy.task('jambox.config', {
      stub: {
        '**/foo': {
          preferNetwork: false,
          status: 200,
          body: {text:`You're visiting foo!`}
        }
      }
    })
    cy.visit('/')
    cy.get("[data-test-id='link']").click();
    cy.url().should('contain', 'foo')
    cy.get('body' ).should('contain', `You're visiting foo!`)
    cy.task('jambox.reset');
  })
  it('[working] should navigate to the foo page', () => {
    cy.visit('/')
    cy.task('jambox.config', {
      stub: {
        '**/foo': {
          preferNetwork: false,
          status: 200,
          body: {text:`You're visiting foo!`}
        }
      }
    })
    cy.get("[data-test-id='link']").click();
    cy.url().should('contain', 'foo')
    cy.get('body' ).should('contain', `You're visiting foo!`)
    cy.task('jambox.reset');
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
