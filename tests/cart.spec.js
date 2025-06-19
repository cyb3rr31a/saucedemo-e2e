// @ts-check
import {test, expect} from '@playwright/test';
import {login} from '../utils/login.js';

test('Add item to cart', async({page}) => {
    await login(page);
    await page.click('button[data-test="add-to-cart-sauce-labs-bike-light"]');
    const  cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    await expect(cartBadge).toHaveText('1');
})