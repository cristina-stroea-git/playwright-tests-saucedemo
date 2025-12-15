const {test, expect} = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const users = require('../data/users')

const validUsers = users.filter(user => user.shouldLogin);
const invalidUsers = users.filter(user => !user.shouldLogin);


for (const user of validUsers){
    test(`Saucedemo - user ${user.role} - valid login redirects to products page`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    console.log(`Testing valid login: ${user.role} - username: ${user.username} ,password:  ${user.password}`);
    await login.login(user.username, user.password);
    
    await expect(page).toHaveURL(/inventory.html/);
    console.log(await page.title());
    await expect (page).toHaveTitle('Swag Labs');
      
})
};


for (const user of invalidUsers){
    test(`Saucedemo - user ${user.role} - invalid login returns error`, async ({ page }) => {
    const login = new LoginPage(page);

    await login.goto();
    console.log(`Testing invalid login: ${user.role} - username: ${user.username} , password: ${user.password}, expected error: ${user.error} `);
    
    await login.login(user.username, user.password);
    
    await expect(login.error()).toHaveText(user.error);  
})
};
