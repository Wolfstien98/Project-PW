import { expect } from "@playwright/test";

export async function matchText(locator,text) {
    await expect(locator).toHaveText(text)
}