import {expect} from "@playwright/test"
import registrationJSON from "../testData/registration.json"
import emailJSON from "../testData/email.json"

export class emailPOM {
    constructor(page) {
        this.page=page
        this.searchBox=page.locator('#small-searchterms')
        this.searchButton=page.locator('//input[@value="Search"]')
        this.product1=page.locator('//div[@class="product-item"]/child::div[@class="picture"]/child::a/child::img')
        this.emailFriendButton=page.locator("//input[@value='Email a friend']")
        this.currentEmail=page.locator("#YourEmailAddress")
        this.friendEmail=page.locator('#FriendEmail')
        this.messageBox=page.locator('#PersonalMessage')
        this.emailSendButton=page.locator("//input[@value='Send email']")
        this.emailResult=page.locator("//div[@class='result']")
        this.product2=page.locator('(//div[@class="product-item"]/child::div[@class="picture"]/child::a/child::img)[1]')
        this.emailError=page.locator("//div[@class='validation-summary-errors']")
    }

    async emailWithLogin(){
        await this.searchBox.fill(emailJSON.product)
        await this.searchButton.click()
        await this.product1.click()
        await this.emailFriendButton.click()
        await expect(this.currentEmail).toHaveValue(registrationJSON.email)
        await this.friendEmail.fill(emailJSON.fEmail)
        await this.messageBox.fill(emailJSON.pMessage)
        await this.emailSendButton.click()
        await expect(this.emailResult).toBeVisible()
    }

    async emailWithNoLogin(){
        await this.product2.click()
        await this.emailFriendButton.click()
        await this.friendEmail.fill(emailJSON.fEmail)
        await this.currentEmail.fill(registrationJSON.email)
        await this.messageBox.fill(emailJSON.pMessage)
        await this.emailSendButton.click()
        await expect(this.emailError).toBeVisible()
    }
}