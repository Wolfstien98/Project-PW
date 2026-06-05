import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"


test('Opening facebook', async({page})=>{
    await page.goto(registrationJSON.url)
    //login
    await page.locator('//a[text()="Log in"]').click()
    await page.locator('#Email').fill(registrationJSON.email)
    await page.locator('#Password').fill(registrationJSON.password)
    await page.locator('//input[@value="Log in"]').click()
})