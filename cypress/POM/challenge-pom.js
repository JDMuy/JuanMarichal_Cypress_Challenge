
const pom = {
    elements: {

        // Login
        get usernameTextbox() { return cy.get('#username') },
        get passwordTextbox() { return cy.get('#password') },
        get signInButton() { return cy.get('#log-in') },

        // Fill contact form
        get bookThisRoomButton() { return cy.get('button[type=button').contains('Book this room') },
        get nameTextbox() { return cy.get('input[placeholder="Name"]') },
        get emailTextbox() { return cy.get('input[placeholder="Email"]') },
        get phoneTextbox() { return cy.get('input[placeholder="Phone"]') },
        get subjectTextbox() { return cy.get('input[placeholder="Subject"]') },
        get messageTextbox() { return cy.get('[data-testid="ContactDescription"]'); },
        get submitButton() { return cy.get('button[type=button').contains('Submit') },
    },

    methods: {
        login,
        fillContactForm
    }
};

function login(username, password) {
    pom.elements.usernameTextbox.type(username);
    pom.elements.passwordTextbox.type(password);
    pom.elements.signInButton.should('be.visible').click();
}

function fillContactForm(name, email, phone, subject, message) {
    pom.elements.bookThisRoomButton.should('be.visible').click();
    pom.elements.nameTextbox.type(name);
    pom.elements.emailTextbox.last().type(email);
    pom.elements.phoneTextbox.last().type(phone);
    pom.elements.subjectTextbox.last().type(subject);
    pom.elements.messageTextbox.last().type(message);
    pom.elements.submitButton.should('be.visible').click();
    cy.contains('h2', `Thanks for getting in touch ${name}!`)
}   

export default pom;