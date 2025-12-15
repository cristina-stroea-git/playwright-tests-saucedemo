const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { ShoppingCartPage } = require('../pages/ShoppingCartPage');
const { CheckoutStepOnePage } = require('../pages/CheckoutStepOnePage');
const { CheckoutStepTwoPage } = require('../pages/CheckoutStepTwoPage');

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    
});


test('Saucedemo - CheckoutSteTwo page is loaded properly', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);
    const checkoutStepTwo = new CheckoutStepTwoPage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();
    await checkoutStepOne.fillCheckoutForm('Cristina' , 'Stroea' , '123456');
    await checkoutStepOne.continueCheckout();
    
    
    // url is correct:
    await expect(page).toHaveURL(/checkout-step-two/);
    // Checkout Step One page title: Checkout: Overview
    await expect(page.locator(checkoutStepTwo.title)).toHaveText("Checkout: Overview");
    await expect(page.locator(checkoutStepTwo.paymentInfo)).toHaveText('Payment Information:');
    await expect(page.locator(checkoutStepTwo.shippingInfo)).toHaveText('Shipping Information:');
    await expect(page.locator(checkoutStepTwo.summaryInfo)).toHaveText('Price Total');
    await expect(page.locator(checkoutStepTwo.cancelCheckoutButton)).toBeVisible();
    await expect(page.locator(checkoutStepTwo.finishCheckoutButton)).toBeVisible();
    
});

test('Saucedemo - CheckoutSteTwo - Cancel button redirects to Products page', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);
    const checkoutStepTwo = new CheckoutStepTwoPage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();
    await checkoutStepOne.fillCheckoutForm('Cristina' , 'Stroea' , '123456');
    await checkoutStepOne.continueCheckout();
    
    
    // url is correct:
    await expect(page).toHaveURL(/checkout-step-two/);
    await checkoutStepTwo.cancelCheckout();
    await expect(page).toHaveURL(/inventory/);
});


test('Saucedemo - CheckoutSteTwo - Finish button redirects to Checkout Complete page', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);
    const checkoutStepTwo = new CheckoutStepTwoPage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();
    await checkoutStepOne.fillCheckoutForm('Cristina' , 'Stroea' , '123456');
    await checkoutStepOne.continueCheckout();
    
    
    // url is correct:
    await expect(page).toHaveURL(/checkout-step-two/);
    await checkoutStepTwo.finishCheckout();
    await expect(page).toHaveURL(/checkout-complete/);
});

