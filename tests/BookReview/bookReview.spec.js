import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
import bookJSON from "../../testData/bookReview.json"

test('Book Review', async({page})=>{
    await page.goto(registrationJSON.url)
    //login
    await page.locator('//a[text()="Log in"]').click()
    await page.locator('#Email').fill(registrationJSON.email)
    await page.locator('#Password').fill(registrationJSON.password)
    await page.locator('//input[@value="Log in"]').click()

    //Book Review
    await page.locator("(//a[contains(text(),'Books')])[3]").click()
    await page.locator("#products-orderby").click()
    await page.locator("#products-orderby").selectOption(bookJSON.sort)
    await page.locator("#products-pagesize").click()
    await page.locator("#products-pagesize").selectOption(bookJSON.noOfItems)
    const productTitle= await page.locator("//h2[@class='product-title']/child::a")
    await expect(productTitle).toHaveCount(4)
    const firstPageItems= await productTitle.all()
    let itemArray=[]
    for (const item of firstPageItems) {
        const text = await item.innerText();
        itemArray.push(text)
    }
    
    const oldURL= page.url()
    await page.locator("//a[text()='Next']").click()
    await expect(page).not.toHaveURL(oldURL)

    const secondPageItems= await page.locator("//h2[@class='product-title']/child::a").all()
    
    for (let index = 0; index < secondPageItems.length; index++) {
        await expect(secondPageItems[index]).not.toHaveText(itemArray[index])
        
    }
    await secondPageItems[1].click()
    await page.locator("//a[text()='Add your review']").click()
    await page.locator("#AddProductReview_Title").fill(bookJSON.reviewTitle)
    await page.locator("#AddProductReview_ReviewText").fill(bookJSON.reviewText)
    await page.locator("#addproductrating_4").check()
    await page.locator("//input[@name='add-review']").click()
    await expect(page.locator("//div[@class='result']")).toBeVisible()







})
    