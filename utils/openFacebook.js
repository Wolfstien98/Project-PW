

export async function newPage(page,locator) {
    return await Promise.all([page.waitForEvent('popup'),
        await locator.click()
    ])
}