import { test, expect } from 'playwright/test';

test('Carregou a página?', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page).toHaveTitle('Pokédex | Encontre um pokémon');
});
