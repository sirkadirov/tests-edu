import {expect, test} from '@playwright/test';

test('institution view', async ({ page }) => {
    await page.goto('https://pre-release.unisched.pages.dev/Institution');
    // Wait for Blazor WASM to load
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Мої сервіси', { exact: true })).toBeVisible();
});

test('services list', async ({ page }) => {
    await page.goto('https://pre-release.unisched.pages.dev/Institution');
    // Wait for Blazor WASM to load
    await page.waitForLoadState('networkidle');

    await expect(page.locator('.mud-grid')).toBeVisible();
    await expect(page.locator('.mud-grid .mud-grid-item')).toHaveCount(4);
});

test('social links', async ({ page }) => {
    await page.goto('https://pre-release.unisched.pages.dev/Institution');
    // Wait for Blazor WASM to load
    await page.waitForLoadState('networkidle');

    await page.locator('.d-flex.flex-row.justify-center.gap-2').waitFor();
    await expect(page.locator('.d-flex.flex-row.justify-center.gap-2')).toBeVisible();

    await page.locator('.d-flex.flex-row.justify-center.gap-2 .mud-icon-button').first().waitFor();
    await expect(page.locator('.d-flex.flex-row.justify-center.gap-2 .mud-icon-button')).toHaveCount(6);
});

test('news feed', async ({ page }) => {
    await page.goto('https://pre-release.unisched.pages.dev/Institution');
    // Wait for Blazor WASM to load
    await page.waitForLoadState('networkidle');

    await expect(page.getByText('Новини і події')).toBeVisible();

    await page.locator('.mud-list-item.mud-list-item-gutters.mud-list-item-clickable').first().waitFor();
    await expect(page.locator('.mud-list-item.mud-list-item-gutters.mud-list-item-clickable')).toHaveCount(10);
});
