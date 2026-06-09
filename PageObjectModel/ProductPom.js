import productJSON from "../testData/product.json"
import { txtVisible } from "../utils/registration.js"
import { matchText } from "../utils/product.js"

export class ProductPom {
    constructor(page) {
        this.page = page
        this.pSearchBox=page.locator('#small-searchterms')
        this.pSearchButton=page.locator('//input[@value="Search"]')
        this.pName=page.locator('//h2[@class="product-title"]/child::a')
        this.pPrice=page.locator('//span[@class="price actual-price"]')
        this.pIMG=page.locator('//div[@class="product-item"]/child::div[@class="picture"]/child::a/child::img')
        this.pAvail=page.locator('//div[@class="stock"]/child::span[@class="value"]')
        this.pCompare=page.locator('//div[@class="compare-products"]/child::input')
        this.pName2=page.locator('//td[@class="a-center"]/child::a')
        this.pClear=page.locator('//a[@class="clear-list"]')

    }
    async productPage(){
        await this.pSearchBox.fill(productJSON.product)
        await this.pSearchButton.click()
        await matchText(this.pName,productJSON.pname)
        await matchText(this.pPrice,productJSON.price)
        await this.pIMG.click()
        await matchText(this.pAvail,productJSON.avialability)
        await this.pCompare.click()
        await matchText(this.pName2,productJSON.pname)
        await this.pClear.click()
        await txtVisible(this.page,productJSON.listCleartxt)



    }
}