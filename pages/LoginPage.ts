import { Page, Locator } from "@playwright/test";
import { GenricMethods } from "../utils/GenricMethods.ts";


export class LoginPage extends GenricMethods {

    continueBT: Locator;
    accountLink: Locator;
    signInLink: Locator;
    emailTB: Locator;
    submitEmailBT: Locator;
    passwordTB: Locator;
    sign_inBT: Locator;

    constructor(page: Page) {
        super(page);
        this.continueBT = page.locator("//button[contains(text(),Continue)]");
        this.accountLink = page.locator("//span[normalize-space()='Account & Lists']");
        this.signInLink = page.locator("//span[@class='nav-action-inner']")
        this.emailTB = page.locator("//input[@id='ap_email_login']");
        this.submitEmailBT = page.locator("//input[@type='submit']");
        this.passwordTB = page.locator("//input[@id='ap_password']");
        this.sign_inBT = page.locator("//input[@id='signInSubmit']");
    }



    async enterOpenUrl(url: string) {
        await this.hitUrl(url);

    }


    async clickOnContinueBT() {
        await this.continueBT.click();
    }


    async HoverOnAccountBT(){
        await this.accountLink.hover();
    }


    async clickOnSignInLink(){
       await this.signInLink.click();
    }
    


    async enterEmail(email: string) {
        await this.emailTB.fill(email)
    }


    async submitEmailCountinue() {
        await this.submitEmailBT.click();
    }


    async enterPassword(password: string) {
        await this.passwordTB.fill(password)
    }


    async clicOnSignIn() {
        await this.sign_inBT.click();
    }




}