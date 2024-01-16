import { test, expect } from '@playwright/test';

test('schedule view', async ({ page }) => {
  await page.goto('https://pre-release.unisched.pages.dev/');
  // Wait for Blazor WASM to load
  await page.waitForLoadState('networkidle');
  // Expect to have schedule view selected by default
  await expect(page.getByText('Розклад занять', { exact: true })).toBeVisible();
  await expect(page.locator('.mud-chip-selected')).toBeVisible();
  await expect(page.locator('.mud-chip-selected .mud-chip-content')).toHaveText('Цей тиждень');
});

test('schedule days', async ({ page }) => {
  await page.goto('https://pre-release.unisched.pages.dev/');
  // Wait for Blazor WASM to load
  await page.waitForLoadState('networkidle');

  await page.locator('.d-flex.flex-column.gap-2').first().waitFor();
  await expect(page.locator('.d-flex.flex-row.justify-space-between.align-center.gap-3')).toHaveCount(3);
});

test('schedule items count on the fist day', async ({ page }) => {
  await page.goto('https://pre-release.unisched.pages.dev/');
  // Wait for Blazor WASM to load
  await page.waitForLoadState('networkidle');

  await page.locator('.flex-column.gap-2 .mud-list-item').first().waitFor();
  await expect(page.locator('.flex-column.gap-2 .flex-column').first()
      .locator('.mud-list-item')).toHaveCount(4);
});

test('lesson modal', async ({ page }) => {
  await page.goto('https://pre-release.unisched.pages.dev/');
  // Wait for Blazor WASM to load
  await page.waitForLoadState('networkidle');

  await page.locator('.mud-list-item-clickable').first().waitFor();
  await page.locator('.mud-list-item-clickable').first().click();
  await page.locator('.mud-dialog.mud-dialog-width-xs').first().waitFor();

  await expect(page.locator('.mud-dialog.mud-dialog-width-xs .mud-dialog-title .mud-typography-h6')
      .first()).toHaveText('4-е заняття');

  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('Надійність програмно-апаратних систем', { exact: true })).toBeVisible();

  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('13:30', { exact: true })).toBeVisible();
  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('14:50', { exact: true })).toBeVisible();

  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('Лаб', { exact: true })).toBeVisible();
  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('ас. Гура Володимир Тарасович', { exact: true })).toBeVisible();
  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('підгр. 1', { exact: true })).toBeVisible();
  await expect(page.locator('.mud-dialog.mud-dialog-width-xs').first()
      .getByText('313/Т', { exact: true })).toBeVisible();
});
