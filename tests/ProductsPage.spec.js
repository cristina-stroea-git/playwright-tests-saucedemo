const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');



test('Saucedemo - Products page is loaded properly', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    // url is correct:
    await expect(page).toHaveURL(/inventory.html/);
    // Products page title: Products
    await expect(page.locator(products.title)).toHaveText("Products");
    // Sort dropdown to be displayed:
    await expect(page.locator(products.sortProducts)).toBeVisible();
    // Shopping cart link
    await expect(page.locator(products.shoppingCart)).toBeVisible();
    // products:
    await expect(page.locator(products.productName)).toHaveCount(6);
    await expect(page.locator(products.productsDesc)).toHaveCount(6);
    await expect(page.locator(products.productsPrice)).toHaveCount(6);
    await expect(page.locator(products.productImage)).toHaveCount(6);
    await expect(page.locator(products.addToCartButtons)).toHaveCount(6);


});



test('Saucedemo - Product name redirects to product page', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.clickFirstProductName();
    // URL must contain inventory-item
    await expect(page).toHaveURL(/inventory-item.html/);

});

test('Saucedemo - Product image redirects to product page', async ({ page }) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.clickFirstProductImage();
    // URL must contain inventory-item
    await expect(page).toHaveURL(/inventory-item.html/);

});

test('Saucedemo - Products page - sort options are correct' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.expandSortDropdown();
    var sortOptions = await products.getSortOptions();
    console.log(sortOptions)

    const expectedSortOptions = [ "Name (A to Z)", "Name (Z to A)", "Price (low to high)", "Price (high to low)" ];
    await expect(sortOptions).toEqual(expectedSortOptions);

});


test('Saucedemo - Products page - sort by Name (Z to A) is working properly' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.expandSortDropdown();
    // Name (Z to A)
    await page.locator(products.sortProducts).selectOption('za');
    var actualProductsNames = await page.locator(products.productName).allTextContents();
    console.log(actualProductsNames);
    var expectedProductsNames= ['Test.allTheThings() T-Shirt (Red)',   'Sauce Labs Onesie',  'Sauce Labs Fleece Jacket',   'Sauce Labs Bolt T-Shirt',   'Sauce Labs Bike Light',   'Sauce Labs Backpack'] ;
    await expect(actualProductsNames).toEqual(expectedProductsNames);

});


test('Saucedemo - Products page - sort by Name (A to Z) is working properly' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.expandSortDropdown();
    // Name (A to Z)
    await page.locator(products.sortProducts).selectOption('az');
    var actualProductsNames = await page.locator(products.productName).allTextContents();
    console.log(actualProductsNames);
    var expectedProductsNames= [ 'Sauce Labs Backpack',   'Sauce Labs Bike Light',   'Sauce Labs Bolt T-Shirt',   'Sauce Labs Fleece Jacket',   'Sauce Labs Onesie',   'Test.allTheThings() T-Shirt (Red)'] ;
    await expect(actualProductsNames).toEqual(expectedProductsNames);

});


test('Saucedemo - Products page - sort by Price (low to high) is working properly' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.expandSortDropdown();
    // Price (low to high)
    await page.locator(products.sortProducts).selectOption('lohi');
    var actualProductsPrices = await page.locator(products.productsPrice).allTextContents();
    console.log(actualProductsPrices);
    var expectedProductsPrices= [ '$7.99', '$9.99', '$15.99', '$15.99', '$29.99', '$49.99' ] ;
    await expect(actualProductsPrices).toEqual(expectedProductsPrices);

});



test('Saucedemo - Products page - sort by Price (high to low) is working properly' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.expandSortDropdown();
    // Price (high to low)
    await page.locator(products.sortProducts).selectOption('hilo');
    var actualProductsPrices = await page.locator(products.productsPrice).allTextContents();
    console.log(actualProductsPrices);
    var expectedProductsPrices= [ '$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99'  ] ;
    await expect(actualProductsPrices).toEqual(expectedProductsPrices);

});




test('Saucedemo - Products page - Add to cart changes to Remove and vice versa' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    
    await products.addremoveFirstProductToCart();
    await expect (page.locator(products.addToCartButtons).first()).toContainText("Remove");

    
    await products.addremoveFirstProductToCart();
    await expect (page.locator(products.addToCartButtons).first()).toContainText("Add to cart");
});


test('Saucedemo - Products page - Shopping cart link redirects to Shopping cart page' , async({page}) => {
    const login = new LoginPage(page);
    const products = new ProductsPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');
    await products.openShoppingCartPage();

    await expect(page).toHaveURL(/cart.html/);
});

