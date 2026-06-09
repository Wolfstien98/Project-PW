import { expect } from "@playwright/test";

export async function matchText(page,locator,text) {
    await expect(page.locator(locator)).toHaveText(text)
}