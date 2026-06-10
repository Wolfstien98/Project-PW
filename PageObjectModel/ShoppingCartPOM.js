import shoppingJSON from "../testData/shoppingCart.json"
import { multipress, multiElementVerify, updateNVerify, multiFill } from "../utils/shoppingCart"

export class ShoppingCartPOM {
    constructor(page) {
        this.page=page
        this.sBookNavi=page.locator("(//a[contains(text(),'Books')])[3]")
        this.addCart=page.locator('//input[@value="Add to cart"]')
        this.checkout=page.locator("//span[text()='Shopping cart']")
        this.pName=page.locator("//a[@class='product-name']")
        this.pPrice=page.locator("//span[@class='product-unit-price']")
        this.pQTY=page.locator("//input[@class='qty-input']")
        this.updateCart=page.locator("//input[@class='button-2 update-cart-button']")
        this.pTotal=page.locator("//span[@class='product-price order-total']/child::strong")
    }
    async shopCart(){
        await this.sBookNavi.click()
        const addButton= await this.addCart.all()
        //let index=0
        // for (let alocator of addButton) {
            
        //     await multipress(alocator,Number(shoppingJSON.quantity[index]))
                
        //     index=index+1
            
        // }
        

        await multipress(this.page,addButton[0],Number(shoppingJSON.quantity[0]))
        await multipress(this.page,addButton[1],Number(shoppingJSON.quantity[1]))
        await multipress(this.page,addButton[2],Number(shoppingJSON.quantity[2]))

        await this.checkout.click()
        // let time=new Date().getTime()
        // await this.page.screenshot({path:`screenshot/task1/${time}.png`})

        const productName= await this.pName.all()
        await multiElementVerify(productName,shoppingJSON.product,"text")

        
        const productPrice= await this.pPrice.all()
        await multiElementVerify(productPrice,shoppingJSON.price,"text")
        
        
        const productQTY= await this.pQTY.all()
        await multiElementVerify(productQTY,shoppingJSON.quantity,"value")
        
        await updateNVerify(productQTY[1],shoppingJSON.updateQTY[0],this.updateCart,this.pTotal,shoppingJSON.total)
        await updateNVerify(productQTY[2],shoppingJSON.updateQTY[1],this.updateCart,this.pTotal,shoppingJSON.total2)
        
    }
    async clearCart(){
        const productQTYNew= await this.pQTY.all()
        await multiFill(productQTYNew,"0")
            
        await this.updateCart.click()
    }
}