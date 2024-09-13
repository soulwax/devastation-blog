// File tests/test.ts
// Description: This is a test file that uses Playwright to test the home page of the SvelteKit app.
import { expect, test } from '@playwright/test';

test('home page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toBeVisible();
});
