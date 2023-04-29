import elementPage from '../pageobjects/element.page.js';

describe ('My Add/Remove page', () => {
    it ('should verify element buttons', async () => {
        await elementPage.open();
        await (elementPage).addButton.click();
        await browser.pause(500);
        await (elementPage).addButton.click();
        await browser.pause(500);
        await (elementPage).addButton.click();
        await browser.pause(500);
        await (elementPage).addButton.click();
        await browser.pause(1500);
        await expect(elementPage.elementButton1).toBeExisting();
        await expect(elementPage.elementButton2).toBeExisting();
        await expect(elementPage.elementButton3).toBeExisting();
        await expect(elementPage.elementButton4).toBeExisting();
    });
});