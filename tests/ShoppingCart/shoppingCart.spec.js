import {test,expect} from "@playwright/test"
import registrationJSON from "../../testData/registration.json"
import shoppingJSON from "../../testData/shoppingCart.json"
import { multipress, multiElementVerify, updateNVerify, multiFill } from "../../utils/shoppingCart"
import { LoginPOM } from "../../PageObjectModel/LoginPOM"
import { ShoppingCartPOM } from "../../PageObjectModel/ShoppingCartPOM"

//json
// test('Shopping Cart', async({page})=>{
//     await page.goto(registrationJSON.url)

//     //login
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('#Email').fill(registrationJSON.email)
//     await page.locator('#Password').fill(registrationJSON.password)
//     await page.locator('//input[@value="Log in"]').click()

//     //Shopping Cart
//     await page.locator("(//a[contains(text(),'Books')])[3]").click()
//     const addButton= await page.locator('//input[@value="Add to cart"]').all()
//     for (let index = 0; index < 3; index++) {
//         await addButton[0].click()
        
//     }
//     await addButton[1].click()
//     for (let index = 0; index < 2; index++) {
//         await addButton[2].click()
        
//     }
//     await page.locator("//span[text()='Shopping cart']").click()
//     const productName= await page.locator("//a[@class='product-name']").all()
//     for (let index = 0; index < productName.length; index++) {
//         await expect(productName[index]).toHaveText(shoppingJSON.product[index])
        
//     }
    
//     const productPrice= await page.locator("//span[@class='product-unit-price']").all()
//     for (let index = 0; index < productPrice.length; index++) {
//         await expect(productPrice[index]).toHaveText(shoppingJSON.price[index])
        
//     }
    
//     const productQTY= await page.locator("//input[@class='qty-input']").all()
//     for (let index = 0; index < productQTY.length; index++) {
//         await expect(productQTY[index]).toHaveValue(shoppingJSON.quantity[index])
        
//     }
    
//     await productQTY[1].fill("5")
//     await page.locator("//input[@class='button-2 update-cart-button']").click()
//     await expect(page.locator("//span[@class='product-price order-total']/child::strong")).toHaveText(shoppingJSON.total)
//     await productQTY[2].fill("0")
//     await page.locator("//input[@class='button-2 update-cart-button']").click()
//     await expect(page.locator("//span[@class='product-price order-total']/child::strong")).toHaveText(shoppingJSON.total2)

//     //clear cart
//     const productQTYNew= await page.locator("//input[@class='qty-input']").all()
//     for (let item of productQTYNew) {
//         await item.fill("0")
        
//     }
//     await page.locator("//input[@class='button-2 update-cart-button']").click()

// })

//json utils
// test('Shopping Cart', async({page})=>{
//     await page.goto(registrationJSON.url)

//     //login
//     await page.locator('//a[text()="Log in"]').click()
//     await page.locator('#Email').fill(registrationJSON.email)
//     await page.locator('#Password').fill(registrationJSON.password)
//     await page.locator('//input[@value="Log in"]').click()

//     //Shopping Cart
//     await page.locator("(//a[contains(text(),'Books')])[3]").click()
//     const addButton= await page.locator('//input[@value="Add to cart"]').all()

//     await multipress(addButton[0],Number(shoppingJSON.quantity[0]))
//     await multipress(addButton[1],Number(shoppingJSON.quantity[1]))
//     await multipress(addButton[2],Number(shoppingJSON.quantity[2]))
//     // for (let index = 0; index < 3; index++) {
//     //     await addButton[0].click()
        
//     // }
//     // await addButton[1].click()
//     // for (let index = 0; index < 2; index++) {
//     //     await addButton[2].click()
        
//     // }

//     await page.locator("//span[text()='Shopping cart']").click()

//     const productName= await page.locator("//a[@class='product-name']").all()
//     await multiElementVerify(productName,shoppingJSON.product,"text")
//     // for (let index = 0; index < productName.length; index++) {
//     //     await expect(productName[index]).toHaveText(shoppingJSON.product[index])
        
//     // }
    
//     const productPrice= await page.locator("//span[@class='product-unit-price']").all()
//     await multiElementVerify(productPrice,shoppingJSON.price,"text")
//     // for (let index = 0; index < productPrice.length; index++) {
//     //     await expect(productPrice[index]).toHaveText(shoppingJSON.price[index])
        
//     // }
    
//     const productQTY= await page.locator("//input[@class='qty-input']").all()
//     await multiElementVerify(productQTY,shoppingJSON.quantity,"value")
//     // for (let index = 0; index < productQTY.length; index++) {
//     //     await expect(productQTY[index]).toHaveValue(shoppingJSON.quantity[index])
        
//     // }
//     await updateNVerify(page,productQTY[1],shoppingJSON.updateQTY[0],"//input[@class='button-2 update-cart-button']","//span[@class='product-price order-total']/child::strong",shoppingJSON.total)
//     await updateNVerify(page,productQTY[2],shoppingJSON.updateQTY[1],"//input[@class='button-2 update-cart-button']","//span[@class='product-price order-total']/child::strong",shoppingJSON.total2)
//     // await productQTY[1].fill("5")
//     // await page.locator("//input[@class='button-2 update-cart-button']").click()
//     // await expect(page.locator("//span[@class='product-price order-total']/child::strong")).toHaveText(shoppingJSON.total)
//     // await productQTY[2].fill("0")
//     // await page.locator("//input[@class='button-2 update-cart-button']").click()
//     // await expect(page.locator("//span[@class='product-price order-total']/child::strong")).toHaveText(shoppingJSON.total2)

//     //clear cart
//     const productQTYNew= await page.locator("//input[@class='qty-input']").all()
//     await multiFill(productQTYNew,"0")
//     // for (let item of productQTYNew) {
//     //     await item.fill("0")
        
//     // }
//     await page.locator("//input[@class='button-2 update-cart-button']").click()

// })

//json utils and pom
test('Shopping Cart', async({page})=>{
    await page.goto(registrationJSON.url)

    //login
    const loginMod=new LoginPOM(page)
    const shoppingMod=new ShoppingCartPOM(page)

    await loginMod.login()

    //Shopping Cart
    await shoppingMod.shopCart()

    //clear cart
    await shoppingMod.clearCart()

})