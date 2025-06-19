// @ts-check
import {test, expect} from '@playwright/test';
import {login} from '../utils/login.js';

test('Complete checkout flow', async({page}) => {
    await login(page);
    await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
    await page.click('[data-test="shopping-cart-badge"]');
    await page.click('button[data-test="checkout"]');

    await page.fill('[data-test="firstName"]', 'Jane');
    await page.fill('[data-test="lastName"]', 'Doe');
    await page.fill('[data-test="postalCode"]', '00100');

    await page.click('[data-test="continue"]');
    await expect(page.locator('[data-test="total-label"]')).toBeVisible();

    await page.click('[data-test="finish"]');
    await expect(page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!')

});