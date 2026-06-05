import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
import productJSON from "../../testData/product.json"

test('Product', async({page})=>{
    await page.goto(registrationJSON.url)
    //login
    await page.locator('//a[text()="Log in"]').click()
    await page.locator('#Email').fill(registrationJSON.email)
    await page.locator('#Password').fill(registrationJSON.password)
    await page.locator('//input[@value="Log in"]').click()


    //Search Product
    await page.locator('#small-searchterms').fill(productJSON.product)
    await page.locator('//input[@value="Search"]').click()
    await expect(page.locator('//h2[@class="product-title"]/child::a')).toHaveText(productJSON.pname)
    await expect(page.locator('//span[@class="price actual-price"]')).toHaveText(productJSON.price)
    await page.locator('//div[@class="product-item"]/child::div[@class="picture"]/child::a/child::img').click()
    await expect(page.locator('//div[@class="stock"]/child::span[@class="value"]')).toHaveText(productJSON.avialability)
    await page.locator('//div[@class="compare-products"]/child::input').click()
    await expect(page.locator('//td[@class="a-center"]/child::a')).toHaveText(productJSON.pname)
    await page.locator('//a[@class="clear-list"]').click()
    await expect(page.getByText(productJSON.listCleartxt)).toBeVisible()
    


})