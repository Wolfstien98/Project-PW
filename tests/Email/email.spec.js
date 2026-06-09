import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
import emailJSON from "../../testData/email.json"
import { LoginPOM } from "../../PageObjectModel/LoginPOM"
import { emailPOM } from "../../PageObjectModel/emailPOM"

//with json
// test('Friend Email', async({page})=>{
//     await page.goto(registrationJSON.url)
//     //login
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('#Email').fill(registrationJSON.email)
//     await page.locator('#Password').fill(registrationJSON.password)
//     await page.locator('//input[@value="Log in"]').click()

//     //email
//     await page.locator('#small-searchterms').fill(emailJSON.product)
//     await page.locator('//input[@value="Search"]').click()
//     await page.locator('//div[@class="product-item"]/child::div[@class="picture"]/child::a/child::img').click()
//     await page.locator("//input[@value='Email a friend']").click()
//     await expect(page.locator("#YourEmailAddress")).toHaveValue(registrationJSON.email)
//     await page.locator('#FriendEmail').fill(emailJSON.fEmail)
//     await page.locator('#PersonalMessage').fill(emailJSON.pMessage)
//     await page.locator("//input[@value='Send email']").click()
//     await expect(page.locator("//div[@class='result']")).toBeVisible()

//     //logout
//     await page.locator("//a[text()='Log out']").click()

//     //email without login
//     await page.locator('(//div[@class="product-item"]/child::div[@class="picture"]/child::a/child::img)[1]').click()
//     await page.locator("//input[@value='Email a friend']").click()
//     await page.locator('#FriendEmail').fill(emailJSON.fEmail)
//     await page.locator('#YourEmailAddress').fill(registrationJSON.email)
//     await page.locator('#PersonalMessage').fill(emailJSON.pMessage)
//     await page.locator("//input[@value='Send email']").click()
//     await expect(page.locator("//div[@class='validation-summary-errors']")).toBeVisible()
// })


//json util and pom
test('Friend Email', async({page})=>{
    await page.goto(registrationJSON.url)
    //login
    const loginMod=new LoginPOM(page)
    const emailMod=new emailPOM(page)
    await loginMod.login()

    //email
    await emailMod.emailWithLogin()

    //logout
    await loginMod.logout()

    //email without login
    await emailMod.emailWithNoLogin()
})