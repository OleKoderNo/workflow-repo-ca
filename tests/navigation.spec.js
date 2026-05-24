import { expect, test } from "@playwright/test";

test("user can navigate from home page to first venue details page", async ({ page }) => {
	await page.goto("/index.html");

	await expect(page.getByRole("heading", { name: /welcome to this site/i })).toBeVisible();

	const firstVenue = page.locator('a[href*="venue"]').first();

	await expect(firstVenue).toBeVisible();

	await firstVenue.click();

	await expect(page.getByRole("heading", { name: /venue details/i })).toBeVisible();
});
