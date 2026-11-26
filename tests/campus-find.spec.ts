import { test, expect } from "@playwright/test";

test("board filters, sorting, and saved items work across navigation", async ({
  page,
}) => {
  await page.goto("/items");
  await expect(page.locator(".item-card")).toHaveCount(16);
  await page.getByRole("button", { name: "Found items", exact: true }).click();
  await expect(page.locator(".item-card")).toHaveCount(9);
  await page.getByLabel("Category", { exact: true }).selectOption("Keys");
  await expect(page.locator(".item-card")).toHaveCount(2);
  await page.getByLabel("Sort by").selectOption("name");
  await expect(page.locator(".item-card h3").first()).toHaveText(
    "House keys with green tag",
  );
  await page
    .getByRole("button", {
      name: "Save House keys with green tag",
      exact: true,
    })
    .click();
  await page.getByRole("link", { name: "Saved items", exact: true }).click();
  await expect(page.locator(".item-card")).toHaveCount(1);
  await page.getByLabel("Search items").fill("backpack");
  await page.getByRole("button", { name: "Lost items", exact: true }).click();
  await page.getByLabel("Category", { exact: true }).selectOption("Books");
  await page.getByLabel("Sort by").selectOption("name");
  await expect(page.locator(".item-card")).toHaveCount(0);
  await page.getByRole("button", { name: "Clear filters" }).click();
  await expect(page.getByLabel("Search items")).toHaveValue("");
  await expect(page.getByRole("button", { name: "All items" })).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await expect(page.getByLabel("Category", { exact: true })).toHaveValue("All");
  await expect(page.getByLabel("Sort by")).toHaveValue("newest");
  await expect(page.locator(".item-card")).toHaveCount(1);
  await page
    .getByRole("button", {
      name: "Unsave House keys with green tag",
      exact: true,
    })
    .click();
  await expect(
    page.getByRole("heading", { name: "No saved items yet" }),
  ).toBeVisible();
});

test("clear filters restores the item board defaults", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto("/items");

  const search = page.getByLabel("Search items");
  const category = page.getByLabel("Category", { exact: true });
  const sort = page.getByLabel("Sort by");
  const allItems = page.getByRole("button", { name: "All items" });
  const lostItems = page.getByRole("button", { name: "Lost items" });
  const clear = page.getByRole("button", { name: "Clear filters" });
  const cards = page.locator(".item-card");
  await expect(clear).toBeVisible();
  await expect(cards).toHaveCount(16);
  const defaultOrder = await cards.locator("h3").allTextContents();

  await search.fill("backpack");
  await expect(cards).not.toHaveCount(16);
  await clear.click();
  await expect(search).toHaveValue("");

  await lostItems.click();
  await expect(lostItems).toHaveAttribute("aria-pressed", "true");
  await clear.click();
  await expect(allItems).toHaveAttribute("aria-pressed", "true");

  await category.selectOption("Books");
  await clear.click();
  await expect(category).toHaveValue("All");

  await sort.selectOption("name");
  await clear.click();
  await expect(sort).toHaveValue("newest");

  await search.fill("zzzz-no-such-campus-item");
  await lostItems.click();
  await category.selectOption("Books");
  await sort.selectOption("name");
  await expect(
    page.getByRole("heading", { name: "No matching items" }),
  ).toBeVisible();
  await clear.click();
  await expect(search).toHaveValue("");
  await expect(allItems).toHaveAttribute("aria-pressed", "true");
  await expect(category).toHaveValue("All");
  await expect(sort).toHaveValue("newest");
  await expect(cards.locator("h3")).toHaveText(defaultOrder);
  await expect(page.locator(".result-count")).toHaveText("16 items to explore");

  await page.goto("/");
  await expect(clear).toHaveCount(0);
});

test("report validates, appears on board, and opens a session detail", async ({
  page,
}) => {
  await page.goto("/report");
  const description = page.getByLabel("Description", { exact: true });
  await expect(page.locator("#description-count")).toHaveText(
    "0 characters — minimum 20",
  );
  await description.fill("  hello  ");
  await expect(page.locator("#description-count")).toHaveText(
    "5 characters — minimum 20",
  );
  await expect(description).toHaveAttribute(
    "aria-describedby",
    "description-count",
  );

  await page.getByRole("button", { name: "Publish report" }).click();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await expect(description).toHaveAttribute(
    "aria-describedby",
    "description-count description-error",
  );
  await page
    .getByLabel("Item name", { exact: true })
    .fill("Purple test notebook");
  await page.getByLabel("Report type").selectOption("Found");
  await page.getByLabel("Category", { exact: true }).selectOption("Books");
  await page.getByLabel("Last seen / found location").fill("Main Library");
  await page.getByLabel("Date lost / found").fill("2026-11-20");
  await page
    .getByLabel("Description", { exact: true })
    .fill("A purple notebook with a small star on the cover.");
  await page.getByLabel("Your name", { exact: true }).fill("Demo Student");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("student@example.com");
  await page.getByRole("button", { name: "Publish report" }).click();
  await expect(
    page.getByRole("heading", { name: "Your report is on the board." }),
  ).toBeVisible();
  await page.getByRole("link", { name: "View the item board" }).click();
  await page.getByLabel("Search items").fill("Purple test notebook");
  await expect(page.locator(".item-card")).toHaveCount(1);
  await page
    .getByRole("link", { name: "Purple test notebook", exact: true })
    .click();
  await expect(
    page.getByRole("heading", { name: "Purple test notebook" }),
  ).toBeVisible();
  await page.getByLabel("Your name", { exact: true }).fill("Another student");
  await page
    .getByLabel("Email address", { exact: true })
    .fill("another@example.com");
  await page
    .getByLabel("Identifying details")
    .fill("The inside cover has my initials beside a blue star.");
  await page.getByRole("button", { name: "Send request" }).click();
  await expect(
    page.getByRole("heading", { name: "Request recorded" }),
  ).toBeVisible();
});

test("unknown item IDs render the required not-found page", async ({
  page,
}) => {
  await page.goto("/items/99999");
  await expect(
    page.getByRole("heading", { name: "This page wandered off." }),
  ).toBeVisible();
  await page.goto("/items/00000000-0000-4000-8000-000000000000");
  await expect(
    page.getByRole("heading", { name: "This page wandered off." }),
  ).toBeVisible();
});

test("all main pages fit mobile, tablet, and desktop", async ({ page }) => {
  for (const width of [375, 768, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      "/",
      "/items",
      "/items/1",
      "/report",
      "/saved",
      "/about",
      "/contact",
    ]) {
      await page.goto(route);
      await expect(page.locator("h1")).toBeVisible();
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      );
      expect(overflow, `${route} overflows at ${width}px`).toBe(false);
      if (route === "/") {
        await page.screenshot({
          path: `artifacts/home-${width}.png`,
          fullPage: true,
        });
      }
    }
  }
});
