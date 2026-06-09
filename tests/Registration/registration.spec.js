import {test} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
// import { selectDropdown, txtVisible } from "../../utils/registration.js"
import { RegistrationPOM } from "../../PageObjectModel/RegistrationPOM.js"

// with json
// test('Registration', async({page})=>{

//     //Registration
//     await page.goto(registrationJSON.url)
//     await page.locator("//a[text()='Register']").click()
//     await page.locator("#gender-male").check()
//     await page.locator("#FirstName").fill(registrationJSON.fname)
//     await page.locator("#LastName").fill(registrationJSON.lname)
//     await page.locator("#Email").fill(Date.now()+registrationJSON.email)
//     await page.locator("#Password").fill(registrationJSON.password)
//     await page.locator("#ConfirmPassword").fill(registrationJSON.password)
//     await page.locator("#register-button").click()

//     //Subscribe to Newsletter
//     await page.locator("#newsletter-email").fill(registrationJSON.email)
//     await page.locator("#newsletter-subscribe-button").click()
//     await expect(page.getByText(registrationJSON.newsletterTxt)).toBeVisible();

//     //Address
//     await page.locator("//a[text()='Addresses']").click()
//     await page.locator("//input[@value='Add new']").click()
//     await page.locator("#Address_FirstName").fill(registrationJSON.fname)
//     await page.locator("#Address_LastName").fill(registrationJSON.lname)
//     await page.locator("#Address_Email").fill(registrationJSON.email)
//     await page.locator("#Address_Company").fill(registrationJSON.company)
//     await page.locator('#Address_CountryId').click()
//     await page.locator('#Address_CountryId').selectOption(registrationJSON.country)
//     await page.locator('#Address_StateProvinceId').click()
//     await page.locator('#Address_StateProvinceId').selectOption(registrationJSON.state)
//     await page.locator("#Address_City").fill(registrationJSON.city)
//     await page.locator("#Address_Address1").fill(registrationJSON.address1)
//     await page.locator("#Address_Address2").fill(registrationJSON.address2)
//     await page.locator("#Address_ZipPostalCode").fill(registrationJSON.zipcode)
//     await page.locator("#Address_PhoneNumber").fill(registrationJSON.phone)
//     await page.locator("#Address_FaxNumber").fill(registrationJSON.fax)
//     await page.locator('//input[@value="Save"]').click()
// })

//json and utils
// test('Registration', async({page})=>{

//     //Registration
//     await page.goto(registrationJSON.url)
//     await page.locator("//a[text()='Register']").click()
//     await page.locator("#gender-male").check()
//     await page.locator("#FirstName").fill(registrationJSON.fname)
//     await page.locator("#LastName").fill(registrationJSON.lname)
//     await page.locator("#Email").fill(Date.now()+registrationJSON.email)
//     await page.locator("#Password").fill(registrationJSON.password)
//     await page.locator("#ConfirmPassword").fill(registrationJSON.password)
//     await page.locator("#register-button").click()

//     //Subscribe to Newsletter
//     await page.locator("#newsletter-email").fill(registrationJSON.email)
//     await page.locator("#newsletter-subscribe-button").click()
//     await txtVisible(page,registrationJSON.newsletterTxt)
//     // await expect(page.getByText(registrationJSON.newsletterTxt)).toBeVisible();

//     //Address
//     await page.locator("//a[text()='Addresses']").click()
//     await page.locator("//input[@value='Add new']").click()
//     await page.locator("#Address_FirstName").fill(registrationJSON.fname)
//     await page.locator("#Address_LastName").fill(registrationJSON.lname)
//     await page.locator("#Address_Email").fill(registrationJSON.email)
//     await page.locator("#Address_Company").fill(registrationJSON.company)
//     await selectDropdown(page,'#Address_CountryId',registrationJSON.country)
//     // await page.locator('#Address_CountryId').click()
//     // await page.locator('#Address_CountryId').selectOption(registrationJSON.country)
//     await selectDropdown(page,'#Address_StateProvinceId',registrationJSON.state)
//     // await page.locator('#Address_StateProvinceId').click()
//     // await page.locator('#Address_StateProvinceId').selectOption(registrationJSON.state)
//     await page.locator("#Address_City").fill(registrationJSON.city)
//     await page.locator("#Address_Address1").fill(registrationJSON.address1)
//     await page.locator("#Address_Address2").fill(registrationJSON.address2)
//     await page.locator("#Address_ZipPostalCode").fill(registrationJSON.zipcode)
//     await page.locator("#Address_PhoneNumber").fill(registrationJSON.phone)
//     await page.locator("#Address_FaxNumber").fill(registrationJSON.fax)
//     await page.locator('//input[@value="Save"]').click()
// })


//json utils and pom
test('Registration', async({page})=>{

    
    const registerModule= new RegistrationPOM(page)
    await page.goto(registrationJSON.url)
    await registerModule.registeration()
    await registerModule.newsletter()
    await registerModule.address()
})