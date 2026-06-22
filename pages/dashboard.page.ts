import { Page, Locator, expect } from '@playwright/test';

export default class DashboardPage {
    constructor(public page: Page) {}

    // ==============================================
    // LOCATORS
    // ==============================================
    get dashboardHeading() {
        return this.page.getByRole('heading', { name: 'Dashboard' });
    }

    get quickLaunch() {
        return this.page.getByText('Quick Launch');
    }

    get userDropdown() {
        return this.page.locator('.oxd-userdropdown');
    }

    get adminMenu() {
        return this.page.getByText('Admin');
    }

    get pimMenu() {
        return this.page.getByText('PIM');
    }

    get leaveMenu() {
        return this.page.getByText('Leave');
    }

    // ==============================================
    // VALIDATION METHODS
    // ==============================================

    async validateDashboard() {
        await expect(this.page).toHaveURL(/.*dashboard/);
        await expect(this.dashboardHeading).toBeVisible();
        await expect(this.quickLaunch).toBeVisible();
        return this;
    }

    async waitForDashboardLoad() {
        await this.dashboardHeading.waitFor({ state: 'visible' });
        await this.page.waitForLoadState('networkidle');
        return this;
    }

    async isDashboardLoaded(): Promise<boolean> {
        try {
            await this.dashboardHeading.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }
}