import { test, expect } from 'playwright/test';

test('Mostrou a mensagem de erro?', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.getByRole('textbox').fill('xxx');
  await page.getByRole('button').click();

  const messageErrorParagraph = page.locator('.pError');

  await expect(messageErrorParagraph).toHaveText(
    'NÃO CONSEGUIMOS ENCONTRAR ESSE POKÉMON, TENTE PROCURAR POR OUTRO NOME.'
  );
});
