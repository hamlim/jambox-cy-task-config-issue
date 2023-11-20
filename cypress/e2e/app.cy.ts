
describe('Navigation', () => {
  it('[broken] should navigate to the foo page', () => {
    cy.task('jambox.config', {
      stub: {
        '**/foo': {
          preferNetwork: false,
          status: 200,
          body: `You're visiting foo!`
        }
      }
    })
    cy.visit('https://local.example.com/')
    cy.get("[data-test-id='link']").click();
    cy.url().should('contain', 'foo')
    cy.get('body' ).should('contain', `You're visiting foo!`)
  })
  it('[working] should navigate to the foo page', () => {
    cy.visit('https://local.example.com/')
    cy.task('jambox.config', {
      stub: {
        '**/foo': {
          preferNetwork: false,
          status: 200,
          body: `You're visiting foo!`
        }
      }
    })
    cy.get("[data-test-id='link']").click();
    cy.url().should('contain', 'foo')
    cy.get('body' ).should('contain', `You're visiting foo!`)
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
