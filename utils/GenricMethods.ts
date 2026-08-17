import { Page, Locator } from '@playwright/test';

export class GenricMethods {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    /**this method is used to get the url then open the browser */

    async hitUrl(url: string): Promise<void> {
        await this.page.goto(url);
    }


    /* this method is used to normal click on element */

    async click(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }


    /** this method is used to fill value into Input Box */

    async fill(locator: Locator, value: string): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }


    async hover(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.hover();
    }
}


