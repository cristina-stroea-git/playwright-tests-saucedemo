const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { ShoppingCartPage } = require('../pages/ShoppingCartPage');
const { CheckoutStepOnePage } = require('../pages/CheckoutStepOnePage');
const { CheckoutStepTwoPage } = require('../pages/CheckoutStepTwoPage');
const { CheckoutCompletePage } = require('../pages/CheckoutCompletePage');

test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    
});


test('Saucedemo - Checkout Complete - page is loaded', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);
    const checkoutStepTwo = new CheckoutStepTwoPage(page);
    const checkoutComplete = new CheckoutCompletePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();
    await checkoutStepOne.fillCheckoutForm('Cristina' , 'Stroea' , '123456');
    await checkoutStepOne.continueCheckout();
    await checkoutStepTwo.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);
    await expect(page.locator(checkoutComplete.title)).toHaveText("Checkout: Complete!");
    await expect(page.locator(checkoutComplete.completeHeader)).toHaveText('Thank you for your order!');
    await expect(page.locator(checkoutComplete.completeText)).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    await expect(page.locator(checkoutComplete.backHomeButton)).toHaveText('Back Home');
     
    
});



test('Saucedemo - Checkout Complete - Back Home redirects to Products page', async ({ page }) => {
    const products = new ProductsPage(page);
    const shoppingCart = new ShoppingCartPage(page);
    const checkoutStepOne = new CheckoutStepOnePage(page);
    const checkoutStepTwo = new CheckoutStepTwoPage(page);
    const checkoutComplete = new CheckoutCompletePage(page);

    await products.openShoppingCartPage();
    await shoppingCart.proceedToCheckout();
    await checkoutStepOne.fillCheckoutForm('Cristina' , 'Stroea' , '123456');
    await checkoutStepOne.continueCheckout();
    await checkoutStepTwo.finishCheckout();

    await expect(page).toHaveURL(/checkout-complete/);
    await checkoutComplete.backHome();
    await expect(page).toHaveURL(/inventory/);
    

    
});

