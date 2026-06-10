import { expect } from "@playwright/test"
import openJSON from "../testData/openfacebook.json"
import { newPage } from "../utils/openFacebook"

export class openFacebookPOM {
    constructor(page) {
        this.page=page
        this.fbLink=page.locator("//a[text()='Facebook']")
    }
    async openFB(){
        await this.fbLink.focus()

        let [page1]= await newPage(this.page,this.fbLink)
        await page1.waitForLoadState()
        await page1.bringToFront()
        await expect(page1.url()).toContain(openJSON.url);
        // let pTitle= await page1.title()
        // await expect(pTitle).toContain(openJSON.title);
        await page1.close()
        await this.page.bringToFront()
    }
}