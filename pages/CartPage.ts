import{Page, Locator} from "@playwright/test";
import { GenricMethods } from '../utils/GenricMethods.ts'


export class CartPage extends GenricMethods{

     addToCartBT: Locator;
     addToCartLink: Locator;


    constructor(page:Page){
        super(page);
     
        this.addToCartBT = page.locator("//input[@id='add-to-cart-button']");
        this.addToCartLink= page.locator("//span[@id='nav-cart-count']");

    }


    async clickOnAddToCart(){
        await this.addToCartBT.click();
    }


    async clickOnAddToCartLink() {
        await this.addToCartLink.click();
    }
}