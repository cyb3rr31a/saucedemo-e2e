// @ts-check
import {test, expect} from '@playwright/test';
import {login} from '../utils/login.js';
import {users} from '../utils/testData.js';

test('Valid login', async({page}) => {
    await login(page, users.valid.username, users.valid.password);
    await expect(page).toHaveURL(/inventory/);
});

test('Invalid login', async({page}) => {
    await login(page, users.invalid.username, users.invalid.password);
    await expect(page.locator('[data-test="error"]')).toBeVisible();
});