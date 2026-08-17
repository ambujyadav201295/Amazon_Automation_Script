import { Page, Locator } from "@playwright/test";
import { GenricMethods } from "../utils/GenricMethods.ts";


export class HomePage extends GenricMethods {

    poupMsg: Locator;
    searchBox: Locator;
    productSagetion: Locator;
    

    constructor(page: Page) {
        super(page);
        this.poupMsg = page.locator("//div[@class='glow-toaster-footer']//input[@data-action-type='DISMISS']")
        this.searchBox = page.locator("//input[@name='field-keywords']");
        this.productSagetion = page.locator("//div[@id='nav-flyout-searchAjax']//div[@aria-label='boat speakers waterproof']");
       

    }



    async dismissPoup() {
    if (await this.poupMsg.isVisible({ timeout: 5000 }).catch(() => false)) {
        await this.poupMsg.click();
    }
}


    // async dismissPoup() {
    //     await this.poupMsg.click();
    // }

    async enterProductName(value: string) {
        await this.searchBox.fill(value);
    }


    async clickOnProductList(){
        await this.productSagetion.click();
    }
   

    




}
