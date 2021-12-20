

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('[name="username"]');
    }

    get inputEmail() {
        return $('[name="email"]');
    }
    get inputPassword() {
        return $('[name="password"]');
    }

    get btnSubmit() {
        return $('button[type="button"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username,email, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.inputEmail.setValue(email);
        await this.btnSubmit.click();
        await browser.pause(3000);
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
