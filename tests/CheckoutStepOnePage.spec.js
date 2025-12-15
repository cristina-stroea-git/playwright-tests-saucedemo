const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { ShoppingCartPage } = require('../pages/ShoppingCartPage');
const { CheckoutStepOnePage } = require('../pages/CheckoutStepOnePage');

// Before each test on Checkout Step One page: Login and Open shoppingCart 
test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
   

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    
});


test('Saucedemo - CheckoutStepOne page is loaded properly', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();

    // url is correct:
    await expect(page).toHaveURL(/checkout-step-one/);
    // Checkout Step One page title: Checkout: Your Information
    await expect(page.locator(checkoutStepOne.title)).toHaveText("Checkout: Your Information");
    await expect(page.locator(checkoutStepOne.firstNameInput)).toBeVisible();
    await expect(page.locator(checkoutStepOne.lastNameInput)).toBeVisible();
    await expect(page.locator(checkoutStepOne.zipcodeInput)).toBeVisible();
    await expect(page.locator(checkoutStepOne.cancelCheckoutButton)).toBeVisible();
    await expect(page.locator(checkoutStepOne.continueCheckoutButton)).toBeVisible();
    await expect(page.locator(checkoutStepOne.shoppingCart)).toBeVisible();
    
});

test('Saucedemo - CheckoutStepOne page - cancel checkout redirects to Shopping cart page', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();

    // url is correct:
    await expect(page).toHaveURL(/checkout-step-one/);
    await checkoutStepOne.cancelCheckout();
    await expect(page).toHaveURL(/cart/);
});

test('Saucedemo - CheckoutStepOne page - first name is required', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();

    // url is correct:
    await expect(page).toHaveURL(/checkout-step-one/);
    await checkoutStepOne.continueCheckout();
    const errorMsg = await checkoutStepOne.checkoutErrorMessage();
    console.log(errorMsg);
    await expect (errorMsg).toEqual('Error: First Name is required');
});


test('Saucedemo - CheckoutStepOne page - last name is required', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();

    // url is correct:
    await expect(page).toHaveURL(/checkout-step-one/);
    await checkoutStepOne.fillFirstName('Cristina');
    await checkoutStepOne.continueCheckout();
    const errorMsg = await checkoutStepOne.checkoutErrorMessage();
    console.log(errorMsg);
    await expect (errorMsg).toEqual('Error: Last Name is required');
});



test('Saucedemo - CheckoutStepOne page - zip code is required', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();

    // url is correct:
    await expect(page).toHaveURL(/checkout-step-one/);
    await checkoutStepOne.fillFirstName('Cristina');
    await checkoutStepOne.fillLastName('Stroea');
    await checkoutStepOne.continueCheckout();
    const errorMsg = await checkoutStepOne.checkoutErrorMessage();
    console.log(errorMsg);
    await expect (errorMsg).toEqual('Error: Postal Code is required');
});


test('Saucedemo - CheckoutStepOne page - continue redirects to checkout step two page', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();

    // url is correct:
    await expect(page).toHaveURL(/checkout-step-one/);
    await checkoutStepOne.fillCheckoutForm('Cristina' , 'Stroea' , '123456');
    await checkoutStepOne.continueCheckout();
    
    await expect(page).toHaveURL(/checkout-step-two/);
});