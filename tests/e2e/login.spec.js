import { expect, test } from "@playwright/test";

test("user can log in with valid credentials", async ({ page }) => {
	test.skip(!process.env.E2E_EMAIL || !process.env.E2E_PASSWORD, "Missing login env vars");

	await page.goto("/login/");

	await page.getByPlaceholder("Email").fill(process.env.E2E_EMAIL);
	await page.getByPlaceholder("Password").fill(process.env.E2E_PASSWORD);

	await page.getByRole("button", { name: /login/i }).click();

	await expect(page).toHaveURL("http://127.0.0.1:5500/");
});

test("user sees an error message with invalid credentials", async ({ page }) => {
	await page.goto("/login/");

	await page.getByPlaceholder("Email").fill("wrong@example.com");
	await page.getByPlaceholder("Password").fill("wrongpassword");

	await page.getByRole("button", { name: /login/i }).click();

	await expect(page.locator("#message-container")).toBeVisible();
	await expect(page.locator("#message-container")).not.toBeEmpty();
});
