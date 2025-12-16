class CheckoutStepOnePage {
    constructor(page) {
        this.page = page;
        // locators:
        this.title = ".title";
        this.firstNameInput = '#first-name';
        this.lastNameInput = '#last-name';
        this.zipcodeInput = '#postal-code' ;
        //
        this.cancelCheckoutButton = 'button.cart_cancel_link';
        this.continueCheckoutButton = '#continue';
        this.shoppingCart = ".shopping_cart_link" ;
        //
        this.errorMsg = "[data-test='error']";
        
          }

    // methods:

    async fillFirstName(firstNameValue){
        await this.page.locator(this.firstNameInput).fill(firstNameValue);
    }

    async fillLastName(lastNameValue){
        await this.page.locator(this.lastNameInput).fill(lastNameValue);
    }

    async fillZipcode(zipcodeValue){
        await this.page.locator(this.zipcodeInput).fill(zipcodeValue);
    }

    async fillCheckoutForm(first, last, zipcode) {
        if (first !== undefined) {
            await this.page.locator(this.firstNameInput).fill(first);
        }
        if (last !== undefined) {
            await this.page.locator(this.lastNameInput).fill(last);
        }
        if (zipcode !== undefined) {
            await this.page.locator(this.zipcodeInput).fill(zipcode);
        }
    }


    async cancelCheckout(){
        await this.page.locator(this.cancelCheckoutButton).click();
    }

    async continueCheckout(){
        await this.page.locator(this.continueCheckoutButton).click();
    }

    async checkoutErrorMessage(){
        return await this.page.locator(this.errorMsg).textContent();
    }

    

}

module.exports = { CheckoutStepOnePage };
