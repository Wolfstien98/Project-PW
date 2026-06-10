import bookJSON from "../testData/bookReview.json"
import { selectDropdown } from "../utils/registration"
import { getTxtArray, newPageItems } from "../utils/bookReview"
import { expect } from "@playwright/test"

export class BookReviewPOM {
    constructor(page) {
        this.page=page
        this.bBookNavi=page.locator("(//a[contains(text(),'Books')])[3]")
        this.bOrder=page.locator("#products-orderby")
        this.bSize=page.locator("#products-pagesize")
        this.bTitle=page.locator("//h2[@class='product-title']/child::a")
        this.bNextNavi=page.locator("//a[text()='Next']")
        this.reviewButton=page.locator("//a[text()='Add your review']")
        this.reviewTitle=page.locator("#AddProductReview_Title")
        this.reviewText=page.locator("#AddProductReview_ReviewText")
        this.reviewRating=page.locator("#addproductrating_4")
        this.confirmReview=page.locator("//input[@name='add-review']")
        this.reviewSuccess=page.locator("//div[@class='result']")
    }

    async bookReviewer(){
        await this.bBookNavi.click()
        await selectDropdown(this.bOrder,bookJSON.sort)
        await selectDropdown(this.bSize,bookJSON.noOfItems)
        
        const productTitle= await this.bTitle
        await expect(productTitle).toHaveCount(4)
        const firstPageItems= await productTitle.all()
        let itemArray=await getTxtArray(firstPageItems)
        
        const oldURL= this.page.url()
        
        await Promise.all([
        this.page.waitForNavigation(), // Waits for the page to load the new URL
        this.bNextNavi.click()
        ]);
        await expect(this.page).not.toHaveURL(oldURL)

        const secondPageItems= await this.bTitle.all()
        
        await newPageItems(secondPageItems,itemArray)
        await secondPageItems[1].click()
        await this.reviewButton.click()
        await this.reviewTitle.fill(bookJSON.reviewTitle)
        await this.reviewText.fill(bookJSON.reviewText)
        await this.reviewRating.check()
        await this.confirmReview.click()
        await expect(this.reviewSuccess).toBeVisible()
    }
}