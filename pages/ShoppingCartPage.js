class ShoppingCartPage {
    constructor(page) {
        this.page = page;
        // locators:
        this.title = ".title";
        this.continueShoppingButton = 'button.back';
        this.checkoutButton = 'button.checkout_button';
        // product details:
        this.cartproductName = '.inventory_item_name' ;
        this.cartproductPrice = '.inventory_item_price' ;
        this.cartproductDesc = '.inventory_item_desc' ;
        //
        this.removeProduct = 'button.cart_button';
        this.cartproductsCount = '.shopping_cart_badge';
        // 
        this.errorMsg = "[data-test='error']";
        
    }

    // methods:
    async removeFirstProduct(){
        await this.page.locator(this.removeProduct).first().click();
    }

    async continueShopping(){
        await this.page.locator(this.continueShoppingButton).click();
    }

    async proceedToCheckout(){
        await this.page.locator(this.checkoutButton).click();
    }


    error() {
        return this.page.locator(this.errorMsg);
    }
}

module.exports = { ShoppingCartPage };
