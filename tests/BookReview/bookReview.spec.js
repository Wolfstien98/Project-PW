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








})
    