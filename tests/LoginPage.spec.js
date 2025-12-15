const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../data/users')

for (const user of users){
    test(`Saucedemo - user ${user.role} - valid login redirects to products`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login(user.username, user.password);

    if (user.shouldLogin){
        await expect(page).toHaveURL(/inventory.html/);
        console.log(await page.title());
        await expect (page).toHaveTitle('Swag Labs')
    } else {
        await expect(login.error()).toHaveText(user.error);
    }

    
});

}


test('Saucedemo - valid login redirects to products', async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory.html/);
    console.log(await page.title());
    await expect (page).toHaveTitle('Swag Labs')
});


test('Page saucedemo test - locked login returns error',async ({page})=>{
    const login = new LoginPage(page);

    await login.goto();
    await login.login('locked_out_user', 'secret_sauce');

    await expect(login.error()).toBeVisible();
    await expect(login.error()).toHaveText("Epic sadface: Sorry, this user has been locked out.");
})
;



test('Page saucedemo test - invalid login returns error',async ({page})=>{
    const login = new LoginPage(page);

    await login.goto();
    await login.login('standard_user', 'secret_sauceInvalid');

    await expect(login.error()).toBeVisible();
    await expect(login.error()).toHaveText("Epic sadface: Username and password do not match any user in this service");
})
;

test('Page saucedemo test - no email returns error',async ({page})=>{
    const login = new LoginPage(page);

    await login.goto();
    await login.login('', 'secret_sauce');

    await expect(login.error()).toBeVisible();
    await expect(login.error()).toHaveText("Epic sadface: Username is required");

})
;


test('Page saucedemo test - no password returns error',async ({page})=>{
    const login = new LoginPage(page);

    await login.goto();
    await login.login('standard_user', '');

    await expect(login.error()).toBeVisible();
    await expect(login.error()).toHaveText("Epic sadface: Password is required");

})
;
