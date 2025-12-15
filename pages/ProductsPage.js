// pages/ProductsPage.js

class ProductsPage {
    constructor(page) {
        this.page = page;
        // locators:
        this.productName = ".inventory_item_name ";
        this.title = ".title";
        // sort:
        this.sortProducts = ".product_sort_container" ;
        this.sortProductsOptions = ".product_sort_container option"
        //
        this.shoppingCart = ".shopping_cart_link" ;
        // products:
        this.productsName = ".inventory_item_name " ;
        this.productsDesc = ".inventory_item_desc" ;
        this.productsPrice = ".inventory_item_price";
        this.productImage = "img.inventory_item_img" ;
        this.addToCartButtons = "button.btn_inventory";
        //
        this.errorMsg = "[data-test='error']";
        



    }

    // methods:
    async clickFirstProductName(){
        await this.page.locator(this.productsName).first().click();
    }

    async clickFirstProductImage(){
        await this.page.locator(this.productsName).first().click();
    }

    async expandSortDropdown(){
        await this.page.locator(this.sortProducts).click();
    }

    async getSortOptions(){
        return await this.page.locator(this.sortProductsOptions).allTextContents();
    }


    async addremoveFirstProductToCart(){
        await this.page.locator(this.addToCartButtons).first().click();
    }

    async addProductsByIndex(i){
        await this.page.locator(this.addToCartButtons).nth(i).click();
    }

    async openShoppingCartPage(){
        await this.page.locator(this.shoppingCart).click();
    }


    error() {
        return this.page.locator(this.errorMsg);
    }
}

module.exports = { ProductsPage };
