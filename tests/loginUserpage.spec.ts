import test, { expect, Page } from "@playwright/test";
import loginPage from "../pages/loginPage";
import DashboardPage from '../pages/dashboard.page'; 

//const email="Admin";
//const pass="admin123";

test("Login and validate dashboard TC_01",async ({page, baseURL}) => {
    // 1. Test Data
    const email = 'Admin';
    const pass = 'admin123';
    
    // 2. Create Page Object instance
    const lg=new loginPage(page);

    // 3. Navigate to login page
    await page.goto(`${baseURL}`); 

    // 4. Perform login actions (ADDED await)
    await lg.enterUserName(email);   
    await lg.enterPassword(pass);    
    await lg.ClickLogin(); 
     // ✅ Method 1: Validate URL (MOST RELIABLE)
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
   console.log('✅ Login successful! User is on Dashboard.');

})