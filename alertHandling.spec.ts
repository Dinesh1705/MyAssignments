import  {test,expect} from '@playwright/test';

test('Alert Handling', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  });

  await page.locator('//button[text()="Click for JS Alert"]').click();
  await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

});

test('Confirm Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.accept();
    });

    await page.locator('//button[text()="Click for JS Confirm"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
});

test('Alert Dismiss', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toBe('I am a JS Confirm');
        await dialog.dismiss();
    });

    await page.locator('//button[text()="Click for JS Confirm"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});

test('Prompt Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.on('dialog', async dialog => {
        expect(dialog.type()).toBe('prompt');
        expect(dialog.message()).toBe('I am a JS prompt');
        await dialog.accept('Playwright');
    });

    await page.locator('//button[text()="Click for JS Prompt"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: Playwright');
});
