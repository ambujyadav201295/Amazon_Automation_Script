import{Page, Locator} from "@playwright/test";
import {GenricMethods} from "../utils/GenricMethods.ts";


export class CheckoutPage extends GenricMethods {

    checkoutLink: Locator;

    constructor(page:Page){
    
        super(page);
        this.checkoutLink = page.locator("//input[@name='proceedToRetailCheckout']");

    }


    async clickOnCheckoutLink(){
         await this.checkoutLink.click();
    }
}