import homePage from '../pageobjects/home.page.js';

describe ('My Home Page', () => {
    it ('Should verify list items', async () => {
        await homePage.open();
        await expect(homePage.listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});