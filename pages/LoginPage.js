// pages/LoginPage.js

class LoginPage {
    constructor(page) {
        this.page = page;
        this.username = "#user-name";
        this.password = "#password";
        this.loginButton = "#login-button";
        this.errorMsg = "[data-test='error']";
        this.url = "https://www.saucedemo.com/";

    }

    async goto() {
        await this.page.goto(this.url);
    }

    async login(user, pass) {
        await this.page.locator(this.username).fill(user);
        await this.page.locator(this.password).fill(pass);
        await this.page.locator(this.loginButton).click();
    }

    error() {
        return this.page.locator(this.errorMsg);
    }
}

module.exports = { LoginPage };
