import { test, expect } from '@playwright/test';
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 
})

test("UI Controls DropdownList", async ({page})=>{
   await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const userName=page.locator("#username");
   const signIn=page.locator("#signInBtn");
   const dropdown=page.locator("#select.form-control");
   await dropdown.selectOption("consult");


})