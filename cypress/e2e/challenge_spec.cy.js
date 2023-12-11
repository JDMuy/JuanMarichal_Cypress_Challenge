import pom from '../POM/challenge-pom';
import fixture from '../fixtures/fixture';

const username = fixture.LoginData.username;
const password = fixture.LoginData.password;
const name = fixture.BookData.name;
const email = fixture.BookData.email;
const phone = fixture.BookData.phone;
const subject = fixture.BookData.subject;
const message = fixture.BookData.message;

context('Verify that we are able to login to one site and fill a contact form in another', () => {

    specify('Login using test credentials', () => {
        cy.visit('https://demo.applitools.com/');
        pom.methods.login(username, password);
        cy.waitForUrlToInclude('/app.html');
    });

    specify('Fill contact form', () => {
        cy.visit('https://automationintesting.online/');
        pom.methods.fillContactForm(name, email, phone, subject, message);
    });
});
