class CheckoutStepTwoPage {
    constructor(page) {
        this.page = page;
        // locators:
        this.title = ".title";
        //
        this.paymentInfo = '[data-test="payment-info-label"]';
        this.shippingInfo = '[data-test="shipping-info-label"]';
        this.summaryInfo = '[data-test="total-info-label"]';
        this.cancelCheckoutButton = 'button.cart_cancel_link';
        this.finishCheckoutButton = 'button.cart_button';
        //
        this.errorMsg = "[data-test='error']";
        
          }

    // methods:
    async cancelCheckout(){
        await this.page.locator(this.cancelCheckoutButton).click();
    }
    async finishCheckout(){
        await this.page.locator(this.finishCheckoutButton).click();
    }


    async checkoutErrorMessage(){
        return await this.page.locator(this.errorMsg).textContent();
    }

    

}

module.exports = { CheckoutStepTwoPage };
