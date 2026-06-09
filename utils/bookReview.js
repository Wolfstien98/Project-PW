import { expect } from "@playwright/test";

export async function getTxtArray(locator) {
    let itemArray=[]
    for (const item of locator) {
        const text = await item.innerText();
        itemArray.push(text)
    }
    return itemArray
}

export async function newPageItems(locator,itemArray) {
    for (let index = 0; index < locator.length; index++) {
            await expect(locator[index]).not.toHaveText(itemArray[index])
            
        }
}