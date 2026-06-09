import { expect } from "@playwright/test";

export async function multipress(locator,value) {
    for (let index = 0; index < value; index++) {
        await locator.click()
        
    }
}

export async function multiElementVerify(locator,data,vtype) {
    if (vtype==="text") {
        for (let index = 0; index < locator.length; index++) {
        await expect(locator[index]).toHaveText(data[index])
        
    }
    } else if(vtype==="value"){
        for (let index = 0; index < locator.length; index++) {
        await expect(locator[index]).toHaveValue(data[index])
        
    }
    }
}

export async function updateNVerify(locator,value,locator2,locator3,value2){
    await locator.fill(value)
    await locator2.click()
    await expect(locator3).toHaveText(value2)
}

export async function multiFill(locator,value) {
    for (let item of locator) {
        await item.fill(value)
        
    }
    
}