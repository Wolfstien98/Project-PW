import { expect } from "@playwright/test";


export async function selectDropdown(locator,value) {
    await locator.selectOption(value)
}

export async function selectDropdown(page,locator,value) {
    await page.locator(locator).selectOption(value)
}
export async function txtVisible(page,value) {
    await expect(page.getByText(value)).toBeVisible();
}


