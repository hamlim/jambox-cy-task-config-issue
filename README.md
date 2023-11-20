# Jambox and Cypress - cy.task error

This repo is meant to showcase an issue in Jambox with how it handles the `cy.task('jambox.config')` task.

> [!NOTE]
> This isn't exactly working as I would hope - it's not actually stubbing the `/foo` link click...

## Reproduction

Clone the repo, then:

```bash
yarn
```

```bash
yarn jam:dev
```

and in another terminal

```bash
yarn e2e
```
