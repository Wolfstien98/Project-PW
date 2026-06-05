import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"

test('Registration', async({page})=>{

    //Registration
    await page.goto(registrationJSON.url)
    await page.locator("//a[text()='Register']").click()
    await page.locator("#gender-male").check()
    await page.locator("#FirstName").fill(registrationJSON.fname)
    await page.locator("#LastName").fill(registrationJSON.lname)
    await page.locator("#Email").fill(registrationJSON.email)
    await page.locator("#Password").fill(registrationJSON.password)
    await page.locator("#ConfirmPassword").fill(registrationJSON.password)
    await page.locator("#register-button").click()

    //Subscribe to Newsletter
    await page.locator("#newsletter-email").fill(registrationJSON.email)
    await page.locator("#newsletter-subscribe-button").click()
    await expect(page.getByText(registrationJSON.newsletterTxt)).toBeVisible();

    //Address
    await page.locator("//a[text()='Addresses']").click()
    await page.locator("//input[@value='Add new']").click()
    await page.locator("#Address_FirstName").fill(registrationJSON.fname)
    await page.locator("#Address_LastName").fill(registrationJSON.lname)
    await page.locator("#Address_Email").fill(registrationJSON.email)
    await page.locator("#Address_Company").fill(registrationJSON.company)
    await page.locator('#Address_CountryId').click()
    await page.locator('#Address_CountryId').selectOption(registrationJSON.country)
    await page.locator('#Address_StateProvinceId').click()
    await page.locator('#Address_StateProvinceId').selectOption(registrationJSON.state)
    await page.locator("#Address_City").fill(registrationJSON.city)
    await page.locator("#Address_Address1").fill(registrationJSON.address1)
    await page.locator("#Address_Address2").fill(registrationJSON.address2)
    await page.locator("#Address_ZipPostalCode").fill(registrationJSON.zipcode)
    await page.locator("#Address_PhoneNumber").fill(registrationJSON.phone)
    await page.locator("#Address_FaxNumber").fill(registrationJSON.fax)
    await page.locator('//input[@value="Save"]').click()
})