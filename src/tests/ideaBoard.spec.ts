import { test, expect } from "@playwright/test";

test("user can create an idea", async ({ page }) => {
  await page.goto("https://likanur.github.io/idea-board/");

  // open create idea modal
  await page.getByRole("button", { name: "Create idea" }).click();

  // fill the form
  await page.getByRole("textbox", { name: "Title*" }).fill("New idea");
  await page
    .getByRole("textbox", { name: "Description*" })
    .fill("This is idea");
  await page.getByRole("button", { name: "Submit button" }).click();

  // assert the idea appears
  await expect(page.getByText("New idea")).toBeVisible();
});
