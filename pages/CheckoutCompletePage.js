class CheckoutCompletePage {
    constructor(page) {
        this.page = page;
        // locators:
        this.title = ".title";
        this.completeHeader = "[data-test='complete-header']";
        this.completeText = "[data-test='complete-text']";
        this.backHomeButton = "[data-test='back-to-products']";
        
          }

    // methods:

    
    async backHome(){
        await this.page.locator(this.backHomeButton).click();
    }

    async checkoutErrorMessage(){
        return await this.page.locator(this.errorMsg).textContent();
    }

    

}

module.exports = { CheckoutCompletePage };
