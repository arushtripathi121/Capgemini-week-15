import { test, expect } from '@playwright/test';

test('Assesment test 2', async ({page}) => {
    await page.goto('https://vinothqaacademy.com/demo-site/');
    await page.locator('#vfb-5').fill("Arush");
    await page.locator('#vfb-7').fill("Tripathi");
    await page.locator('#vfb-31-1').click();
    await page.locator('#vfb-20-0').click();
    await page.locator('#vfb-20-4').click();

    await page.locator('#vfb-13-address').fill("158");
    await page.locator('#vfb-13-address-2').fill("158");
    await page.locator('#vfb-13-city').fill("Delhi");
    await page.locator('#vfb-13-state').fill("Delhi");
    await page.locator('#vfb-13-zip').fill("100001");
    await page.locator('(//span[@class="select2-selection__arrow"])[1]').click();
    await page.keyboard.type("India");
    await page.keyboard.press("Enter");
    await page.locator('#vfb-14').fill("test@gmail.com");

    await page.locator('#vfb-18').fill("04/24/2026");
    await page.keyboard.press("Enter");
    await page.locator('(//span[@class="select2-selection__arrow"])[2]').click();
    await page.keyboard.insertText("12");
    await page.keyboard.press("Enter");
    await page.locator('(//*[@class="select2-selection__arrow"])[3]').click();
    await page.keyboard.insertText("45");
    await page.keyboard.press("Enter");

    await page.locator("#vfb-19").fill("98765432211");
    await page.locator("#vfb-23").fill("Are you flexible with the timings?");

    await page.locator("#vfb-3").fill("33");
    await page.screenshot({path: 'screenshot/image1.png'})

    await page.screenshot({path: 'screenshot/image2.png'})

    await expect(page.locator('#vfb-5')).toHaveValue("Arush");
    await expect(page.locator('#vfb-7')).toHaveValue("Tripathi");
    await expect(page.locator('#vfb-14')).toHaveValue("test@gmail.com");
    await expect(page.locator('#vfb-19')).toHaveValue("98765432211");
    await expect(page.locator('#vfb-3')).toHaveValue("33");

    await expect(page.locator('#vfb-13-address')).toHaveValue("158");
    await expect(page.locator('#vfb-13-address-2')).toHaveValue("158");
    await expect(page.locator('#vfb-13-city')).toHaveValue("Delhi");
    await expect(page.locator('#vfb-13-state')).toHaveValue("Delhi");
    await expect(page.locator('#vfb-13-zip')).toHaveValue("100001");

    await expect(page.locator('#vfb-23')).toHaveValue("Are you flexible with the timings?");

    await expect(page.locator('#vfb-5')).toBeVisible();
    await expect(page.locator('#vfb-7')).toBeEnabled();
    await expect(page.locator('#vfb-19')).toHaveClass(/vfb/);
    await expect(page.locator('#vfb-13-city')).toHaveValue("Delhi");
    await expect(page.locator('#vfb-13-state')).toHaveValue("Delhi");
    await expect(page.locator('#vfb-23')).toBeEditable();

    await expect(page).toHaveScreenshot({maxDiffPixelRatio: 0.90});

    await expect(page.getByRole("button", { name: "Submit" })).toBeVisible();
    await expect(page).toHaveURL(/demo-site/);
});