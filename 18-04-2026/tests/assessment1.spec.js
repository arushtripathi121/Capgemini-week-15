import { test, expect } from '@playwright/test';

test('Assesment test 1', async ({page}) => {
    await page.goto('https://demoqa.com/automation-practice-form');
    await page.locator('#firstName').fill("Arush");
    await page.locator('#lastName').fill("Tripathi");
    await page.locator('#userEmail').fill("test@gmail.com");
    await page.locator('#gender-radio-1').click();
    await page.locator("#userNumber").fill("98765432211");
    await page.locator('#dateOfBirthInput').fill("12 Jul 2004");
    await page.waitForTimeout(1000);
    await page.keyboard.press("Escape");
    await page.locator('#subjectsInput').fill("Maths");
    await page.waitForTimeout(500);
    await page.keyboard.press("Enter");
    await page.locator('#hobbies-checkbox-1').click();
    // await page.locator('#uploadPicture').click();
    await page.locator('#currentAddress').fill("xyz, chandigarh");
    await page.locator('#react-select-3-input').click();
    await page.keyboard.press("Enter");
    await page.locator('#react-select-4-input').click();
    await page.keyboard.press("Enter");
    await page.getByRole("button", {name: "Submit"}).click();
    await page.screenshot({path: 'screenshot/image1.png'})

    const tbody = page.locator('tbody');

    await expect(tbody).toBeVisible();
    await expect(tbody).toContainText("Arush");
    await expect(tbody).not.toContainText("Physics");
    await expect(page.locator('td').first()).toHaveText("Student Name");
    await expect(page.locator('#userEmail')).toHaveValue("test@gmail.com");
    await expect(page.locator('tbody tr')).toHaveCount(10);
    await expect(tbody).toHaveScreenshot({maxDiffPixelRatio: 0.90});

    await page.screenshot({path: 'screenshot/image2.png'})
});