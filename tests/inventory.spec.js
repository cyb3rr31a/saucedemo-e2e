// @ts-check
import {test, expect} from '@playwright/test';
import {login} from '../utils/login.js';

test.beforeEach(async({page}) => {
  await login(page);
});

test('Displays 6 products', async({page}) => {
    const items = await page.locator('.inventory_item').count();
    expect(items).toBe(6);
});

test('Have item names and prices', async({page}) => {
  const item_names = 
  await page.locator('[data-test="inventory-item-name"]').count();
  expect(item_names).toBe(6);
  const item_prices = 
  await page.locator('[data-test="inventory-item-price"]').count();
  expect(item_prices).toBe(6);
});