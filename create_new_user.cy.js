describe("RPGMatch.org Login Flow Test", () => {
  const waitTime = 2000;

  beforeEach(() => {
    cy.visit("https://staging.rpgmatch.org/signup");
  });

  it("Should be able to create new account successfully", () => {
    cy.get("#mui-1").type("Cypress_RPGMATCH8");
    cy.get("#mui-2").type("gabriel.cordeiro+cypress8@metaltoad.com");
    cy.get('[data-testid="sign-up-password"] > .MuiInputBase-input').type("##9Wen##5");
    cy.get(".MuiButton-root").click();
    
    cy.wait(30000);

    // Create Profile process
    cy.get('.MuiButtonBase-root').click();
    cy.wait(7000);
    cy.get('.start-button').click();
    
    cy.get('.MuiInputBase-root > #age-picker').click();
    cy.get('[data-value="25-34"]').click();
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get('[data-testid="country-picker-input"]').type("United States");
    cy.get('[data-testid="country-picker-input"]').type('{downArrow}');
    cy.get('[data-testid="country-picker-input"]').type('{enter}');
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get('.MuiInputBase-root > #time-zone').click();
    cy.get('[data-value="-04:00"]').click();
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get('#name').type("Cypress_RPGMATCH7");
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get(':nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get(':nth-child(1) > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.get(':nth-child(2) > [data-testid="loading-button"]').click();
    cy.get('.PrivateSwitchBase-input').click();
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get(':nth-child(2) > [data-testid="loading-button"]').click();
    cy.get('#VTT').click();
    cy.get('[data-value="Arkenforge VTT"] > .MuiButtonBase-root > .PrivateSwitchBase-input').click();
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);

    cy.get(':nth-child(2) > [data-testid="loading-button"]').click();
    cy.get(':nth-child(3) > [data-testid="loading-button"]').click();
    cy.get(':nth-child(4) > [data-testid="loading-button"]').click();
    cy.get('[data-testid="loading-button"]').click();
    cy.wait(waitTime);
  });
});
