import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import { HomePage } from "../pages/HomePage.ts";
import { ProductPage } from "../pages/ProductPage.ts";
import { CartPage } from "../pages/CartPage.ts";
import { CheckoutPage } from "../pages/CheckoutPage.ts";


type myFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
}


export const test = base.extend<myFixtures>({

    loginPage: async ({ page }, use) => {
        let loginPage: LoginPage = new LoginPage(page);
        await use(loginPage);
    },

    homePage: async ({ page }, use) => {
        let homePage: HomePage = new HomePage(page);
        await use(homePage);
    },

    productPage: async ({ page }, use) => {
        let productPage: ProductPage = new ProductPage(page);
        await use(productPage);
    },

    cartPage: async ({ page }, use) => {
        let cartPage: CartPage = new CartPage(page);
        await use(cartPage);
    },

    checkoutPage: async ({page},use)=>{
        let checkoutPage:CheckoutPage = new CheckoutPage(page);
        await use(checkoutPage);
    }

})