import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/CybitSolutions/);
  });

  test('displays hero section with CTA', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.getByRole('link', { name: /consultation/i })).toBeVisible();
  });

  test('header navigation is visible on desktop', async ({ page }) => {
    await expect(page.getByRole('navigation', { name: /main/i })).toBeVisible();
  });

  test('footer is present with contact info', async ({ page }) => {
    await expect(page.getByRole('contentinfo')).toBeVisible();
    await expect(page.getByText('info@cybitsolutions.net')).toBeVisible();
  });

  test('chat widget button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: /chat assistant/i })).toBeVisible();
  });
});

test.describe('Navigation', () => {
  test('navigates to services page', async ({ page }) => {
    await page.goto('/what-we-do/services');
    await expect(page).toHaveTitle(/Services/);
    await expect(page.locator('h1')).toContainText(/Services/);
  });

  test('navigates to contact page', async ({ page }) => {
    await page.goto('/contact');
    await expect(page).toHaveTitle(/Contact/);
  });

  test('navigates to about page', async ({ page }) => {
    await page.goto('/who-we-are/about');
    await expect(page).toHaveTitle(/About/);
  });

  test('blog article pages render', async ({ page }) => {
    await page.goto('/insights/news');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('404 page shows for invalid routes', async ({ page }) => {
    await page.goto('/this-does-not-exist');
    await expect(page.getByText(/not found|404/i)).toBeVisible();
  });
});

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('contact form is present', async ({ page }) => {
    await expect(page.getByRole('textbox', { name: /name/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /email/i })).toBeVisible();
  });

  test('shows validation errors on empty submit', async ({ page }) => {
    await page.getByRole('button', { name: /send|submit/i }).click();
    // Form should show validation errors
    await expect(page.getByText(/required|must|please/i).first()).toBeVisible();
  });
});
