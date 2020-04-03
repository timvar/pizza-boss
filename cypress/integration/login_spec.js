describe('Login', function () {
  it('successful login', function () {
    cy.visit('/admin');
    cy.get('#email').type('fejop@getnada.com');
    cy.get('#password').type('fejop123');
    cy.get('.primary').click();
  });
});
/*
<v-text-field id="email"  v-model="email" outlined label="Email">

cy.get('input[name="firstName"]').should('have.value', 'Homer')

describe('login', () => {
  beforeEach(() => {

    it('greets with please login', () => {

      cy.contains('p', 'Please login');
    });
  });
});
*/
