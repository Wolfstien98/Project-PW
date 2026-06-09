import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
import openJSON from "../../testData/openfacebook.json"
import { newPage } from "../../utils/openFacebook"
import { LoginPOM } from "../../PageObjectModel/LoginPOM"
import { openFacebookPOM } from "../../PageObjectModel/openFacebookPOM"

//json 
// test('Opening facebook', async({page})=>{
//     await page.goto(registrationJSON.url)
//     //login
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('#Email').fill(registrationJSON.email)
//     await page.locator('#Password').fill(registrationJSON.password)
//     await page.locator('//input[@value="Log in"]').click()

//     //open facebook
//     await page.locator("//a[text()='Facebook']").scrollIntoViewIfNeeded()

//     let [page1]= await Promise.all([page.waitForEvent('popup'),
//         await page.locator("//a[text()='Facebook']").click()
//     ])
//     await page1.waitForLoadState()
//     await page1.bringToFront()
//     await expect(page1).toHaveURL(openJSON.url);
//     await expect(page1).toHaveTitle(openJSON.title);
//     await page1.close()
//     await page.bringToFront()
// })

//json utils
// test('Opening facebook', async({page})=>{
//     await page.goto(registrationJSON.url)
//     //login
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('#Email').fill(registrationJSON.email)
//     await page.locator('#Password').fill(registrationJSON.password)
//     await page.locator('//input[@value="Log in"]').click()

//     //open facebook
//     await page.locator("//a[text()='Facebook']").scrollIntoViewIfNeeded()

//     let [page1]= await newPage(page,"//a[text()='Facebook']")
//     await page1.waitForLoadState()
//     await page1.bringToFront()
//     await expect(page1).toHaveURL(openJSON.url);
//     await expect(page1).toHaveTitle(openJSON.title);
//     await page1.close()
//     await page.bringToFront()
// })

//json utils and pom
test('Opening facebook', async({page})=>{
    await page.goto(registrationJSON.url)
    //login
    const loginMod=new LoginPOM(page)
    const fbMod=new openFacebookPOM(page)
    await loginMod.login()

    //open facebook
    await fbMod.openFB()
})