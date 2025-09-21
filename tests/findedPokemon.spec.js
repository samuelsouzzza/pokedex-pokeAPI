import { test, expect } from 'playwright/test';

test('Encontrou um pokémon?', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByRole('textbox').fill('Pikachu');
  await page.getByRole('button').click();

  const namePokemonparagraph = page.locator('.namePokemon');

  await expect(namePokemonparagraph).toHaveText('PIKACHU');
});
