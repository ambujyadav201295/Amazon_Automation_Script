import { Page, Locator } from "@playwright/test";
import { GenricMethods } from "../utils/GenricMethods.ts";

export class ProductPage extends GenricMethods {

    productName: Locator;

    constructor(page: Page) {
        super(page);
         this.productName = page.locator("(//span[contains(text(),'Pyle 6.5 Inch Dual Marine Speakers - 2 Way Waterpr')])[1]");
        //this.productName = page.locator("//a[@class='a-link-normal s-line-clamp-2 puis-line-clamp-3-for-col-4-and-8 s-link-style a-text-normal']//h2[@aria-label='Sponsored Ad - Pyle 6.5 Inch Dual Marine Speakers - 2 Way Waterproof and Weather Resistant Outdoor Stereo Sound System with 400 Watt Power, Polypropylene Cone and Butyl Rubber Surround - 1 Pair - PLMR605W(White)']//span[contains(text(),'Pyle 6.5 Inch Dual Marine Speakers - 2 Way Waterpr')]");
    }


    async clickOnProduct(){
        await this.productName.click();
    }
}