import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
import shoppingJSON from "../../testData/shoppingCart.json"


test('Shopping Cart', async({page})=>{
    await page.goto(registrationJSON.url)

    //login
    await page.locator('//a[text()="Log in"]').click()
    await page.locator('#Email').fill(registrationJSON.email)
    await page.locator('#Password').fill(registrationJSON.password)
    await page.locator('//input[@value="Log in"]').click()

    //Shopping Cart
    await page.locator("(//a[contains(text(),'Books')])[3]").click()
    await page.locator('(//input[@value="Add to cart"])[1]').click()
    await page.locator('(//input[@value="Add to cart"])[1]').click()
    await page.locator('(//input[@value="Add to cart"])[1]').click()
    await page.locator('(//input[@value="Add to cart"])[2]').click()
    await page.locator('(//input[@value="Add to cart"])[3]').click()
    await page.locator('(//input[@value="Add to cart"])[3]').click()
    await page.locator("//span[text()='Shopping cart']").click()
    await expect(page.locator("(//a[@class='product-name'])[1]")).toHaveText(shoppingJSON.product1)
    await expect(page.locator("(//a[@class='product-name'])[2]")).toHaveText(shoppingJSON.product2)
    await expect(page.locator("(//a[@class='product-name'])[3]")).toHaveText(shoppingJSON.product3)
    await expect(page.locator("(//span[@class='product-unit-price'])[1]")).toHaveText(shoppingJSON.price1)
    await expect(page.locator("(//span[@class='product-unit-price'])[2]")).toHaveText(shoppingJSON.price2)
    await expect(page.locator("(//span[@class='product-unit-price'])[3]")).toHaveText(shoppingJSON.price3)
    await expect(page.locator("(//input[@class='qty-input'])[1]")).toHaveValue(shoppingJSON.quantity1)
    await expect(page.locator("(//input[@class='qty-input'])[2]")).toHaveValue(shoppingJSON.quantity2)
    await expect(page.locator("(//input[@class='qty-input'])[3]")).toHaveValue(shoppingJSON.quantity3)
    await page.locator("(//input[@class='qty-input'])[2]").fill("5")
    await page.locator("//input[@class='button-2 update-cart-button']").click()
    await expect(page.locator("//span[@class='product-price order-total']/child::strong")).toHaveText(shoppingJSON.total)
    await page.locator("(//input[@class='qty-input'])[3]").fill("0")
    await page.locator("//input[@class='button-2 update-cart-button']").click()
    await expect(page.locator("//span[@class='product-price order-total']/child::strong")).toHaveText(shoppingJSON.total2)












})