import {expect, test} from '@playwright/test';

test('wasm load', async ({ page }) => {
    await page.goto('https://pre-release.unisched.pages.dev/');
    await expect(page.title()).resolves.toMatch('UniSched');
    await page.waitForLoadState('networkidle');
    // Expect to have .mud-layout element
    await expect(page.locator('.mud-layout')).toBeVisible();
});
