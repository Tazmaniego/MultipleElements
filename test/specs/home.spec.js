import homePage from '../pageobjects/home.page.js';

describe ('My Home Page', () => {
    it ('Should verify list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});
    });
    it ('Should fail test by changing assertion number from 44 to 45', async () => {
        await homePage.open();
        await !(expect(homePage.listExamples).toBeElementsArrayOfSize(45));
    });
});