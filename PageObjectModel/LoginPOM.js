import registrationJSON from "../testData/registration.json"

export class LoginPOM {
    constructor(page) {
        this.page = page
        this.loginLink=page.locator('//a[text()="Log in"]')
        this.lEmail=page.locator('#Email')
        this.lPwd=page.locator('#Password')
        this.lButton=page.locator('//input[@value="Log in"]')
        this.logoutLink=page.locator("//a[text()='Log out']")
    }
    async login(){
        await this.loginLink.click()
        await this.lEmail.fill(registrationJSON.email)
        await this.lPwd.fill(registrationJSON.password)
        await this.lButton.click()
    }
    async logout(){
        await this.logoutLink.click()
    }
}