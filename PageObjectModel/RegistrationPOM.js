import registrationJSON from "../testData/registration.json"
import { selectDropdown, txtVisible } from "../utils/registration.js"

export class RegistrationPOM {
    constructor(page) {
        this.page = page
        this.register=page.locator("//a[text()='Register']")
        this.gender=page.locator("#gender-male")
        this.firstName=page.locator("#FirstName")
        this.lastName=page.locator("#LastName")
        this.email=page.locator("#Email")
        this.pwd=page.locator("#Password")
        this.cpwd=page.locator("#ConfirmPassword")
        this.rButton=page.locator("#register-button")
        this.nEmail=page.locator("#newsletter-email")
        this.nSButton=page.locator("#newsletter-subscribe-button")
        this.addressLink=page.locator("//a[text()='Addresses']")
        this.addButton=page.locator("//input[@value='Add new']")
        this.aFirstName=page.locator("#Address_FirstName")
        this.aLastName=page.locator("#Address_LastName")
        this.aEmail=page.locator("#Address_Email")
        this.aCompany=page.locator("#Address_Company")
        this.aCountry=page.locator('#Address_CountryId')
        this.aState=page.locator('#Address_StateProvinceId')
        this.aCity=page.locator("#Address_City")
        this.aAddress1=page.locator("#Address_Address1")
        this.aAddress2=page.locator("#Address_Address2")
        this.aZip=page.locator("#Address_ZipPostalCode")
        this.aPhone=page.locator("#Address_PhoneNumber")
        this.aFax=page.locator("#Address_FaxNumber")
        this.aSave=page.locator('//input[@value="Save"]')
    }
    async registeration() {
        await this.register.click()
        await this.gender.check()
        await this.firstName.fill(registrationJSON.fname)
        await this.lastName.fill(registrationJSON.lname)
        await this.email.fill(Date.now()+registrationJSON.email)
        await this.pwd.fill(registrationJSON.password)
        await this.cpwd.fill(registrationJSON.password)
        await this.rButton.click()
    }
    async newsletter(){
        await this.nEmail.fill(registrationJSON.email)
        await this.nSButton.click()
        await txtVisible(this.page,registrationJSON.newsletterTxt)
    }

    async address(){
        await this.addressLink.click()
        await this.addButton.click()
        await this.aFirstName.fill(registrationJSON.fname)
        await this.aLastName.fill(registrationJSON.lname)
        await this.aEmail.fill(registrationJSON.email)
        await this.aCompany.fill(registrationJSON.company)
        await selectDropdown(this.aCountry,registrationJSON.country)
        await selectDropdown(this.aState,registrationJSON.state)
        await this.aCity.fill(registrationJSON.city)
        await this.aAddress1.fill(registrationJSON.address1)
        await this.aAddress2.fill(registrationJSON.address2)
        await this.aZip.fill(registrationJSON.zipcode)
        await this.aPhone.fill(registrationJSON.phone)
        await this.aFax.fill(registrationJSON.fax)
        await this.aSave.click()
    }
}