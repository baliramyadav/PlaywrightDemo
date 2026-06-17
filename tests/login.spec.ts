// tests/first-test.spec.ts
import { test, expect } from '@playwright/test';
const BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL);
});

test('Login to OrangeHRM', async ({page})=>{
    //Go to login page
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input[name="username"]').fill('Admin');
    await page.locator('input[name="password"]').fill('admin123');

    //Click login button
    await page. click('button[type="submit"]');
    //verify login success
    await expect(page.locator('h6')).toHaveText('Dashboard');

    // 4. Take a screenshot of the entire page
  await page.screenshot({ path: 'screenshots/dashboard1.png', fullPage: true });


});