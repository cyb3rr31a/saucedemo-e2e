// @ts-check
import {test, expect, devices} from '@playwright/test';
import {login} from '../utils/login';

test.use({
    ...devices['iPhone12'],
})

test('mobile view shows menu button', async({page}) => {
    await login(page);

    const menuButton = page.locator('#react-burger-menu-btn');
    await expect(menuButton).toBeVisible();

    await menuButton.click();
    const logoutBtn = page.locator('#logout_sidebar_link');
    await expect(logoutBtn).toBeVisible();
});
