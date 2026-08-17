import { expect, Page } from "@playwright/test";
import { test } from "../fixture/BaseFixture.ts";
import TestData from "../testData/TestData.json" with {type: 'json'};



test('verify ShopingFlow', async ({ page, loginPage, homePage, productPage, cartPage, checkoutPage }) => {

    await loginPage.enterOpenUrl(TestData.porductData.url);
    //await page.waitForTimeout(3000);
    await loginPage.clickOnContinueBT();
   // await page.waitForTimeout(3000);
    await homePage.dismissPoup();
    await loginPage.HoverOnAccountBT();
   // await page.waitForTimeout(3000);
    await loginPage.clickOnSignInLink();
    await loginPage.enterEmail(TestData.porductData.email);
   // await page.waitForTimeout(3000);
    await loginPage.submitEmailCountinue();
    await loginPage.enterPassword(TestData.porductData.password);
    await loginPage.clicOnSignIn();
   // await homePage.dismissPoup();
    await homePage.enterProductName(TestData.porductData.productName);
    await homePage.clickOnProductList();
    await productPage.clickOnProduct();
    await cartPage.clickOnAddToCart();
    await cartPage.clickOnAddToCartLink();
    await checkoutPage.clickOnCheckoutLink();
    await page.close();

});



// test('cart Validation', async ({page})=>{


// });
