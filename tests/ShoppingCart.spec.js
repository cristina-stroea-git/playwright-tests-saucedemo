const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { ShoppingCartPage } = require('../pages/ShoppingCartPage');


test('Saucedemo - ShoppingCart page is loaded properly', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.openShoppingCartPage();

    // url is correct:
    await expect(page).toHaveURL(/cart/);
    // Shopping Cart page title: Your Cart
    await expect(page.locator(products.title)).toHaveText("Your Cart");
    await expect(page.locator(shoppingCart.continueShoppingButton)).toBeVisible();
    await expect(page.locator(shoppingCart.checkoutButton)).toBeVisible();

});




test('Saucedemo - ShoppingCart - add first product and check details', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);

    // Login:
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    // Add first product to cart
    var firstproductName =  await page.locator(products.productName).first().textContent();
    var firstproductPrice =  await page.locator(products.productsPrice).first().textContent();
    var firstproductDesc =  await page.locator(products.productsDesc).first().textContent();
    console.log("Product details:  " ,"\n", firstproductName , "\n",firstproductPrice ,"\n", firstproductDesc)
    await products.addremoveFirstProductToCart();

    // check shopping cart page - product details:
    await products.openShoppingCartPage();
    var cartproductName = await page.locator(shoppingCart.cartproductName).first().textContent();
    var cartproductPrice = await page.locator(shoppingCart.cartproductPrice).first().textContent();
    var cartproductDesc = await page.locator(shoppingCart.cartproductDesc).first().textContent();
    console.log("Cart Product details:  " , "\n", cartproductName ,"\n", cartproductPrice , "\n",cartproductDesc)
    
    await expect(cartproductName.trim()).toBe(firstproductName.trim());
    await expect(cartproductPrice.trim()).toBe(firstproductPrice.trim());
    await expect(cartproductDesc.trim()).toBe(firstproductDesc.trim());

});

test('Saucedemo - ShoppingCart - product can be removed from cart', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);

    // Login:
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    // Add first product to cart
    await products.addremoveFirstProductToCart();

    // check shopping cart page - product details:
    await products.openShoppingCartPage();
    await expect(page.locator(shoppingCart.cartproductsCount)).toHaveText("1"); // 1 product in shopping cart
    await shoppingCart.removeFirstProduct();
    await expect(page.locator(shoppingCart.cartproductsCount)).not.toBeVisible(); // products count not displayed
    await expect(page.locator(shoppingCart.cartproductName)).toHaveCount(0); // 0 products in shopping cart

});


test('Saucedemo - ShoppingCart - Continue shopping redirects to Products page', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);

    // Login:
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    
    // check shopping cart page :
    await products.openShoppingCartPage();
    // continue shopping:
    await shoppingCart.continueShopping();
    // redirected to Products page:
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator(products.productName).first()).toBeVisible();
});


test('Saucedemo - ShoppingCart - Checkout button redirects to Checkout: Your Information page', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);

    // Login:
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    
    // check shopping cart page :
    await products.openShoppingCartPage();
    // continue shopping:
    await shoppingCart.proceedToCheckout();
    // redirected to Checjout step 1 page:
    await expect(page).toHaveURL(/checkout-step-one/);
});
