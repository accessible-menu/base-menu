import { describe, it, expect } from "vitest";
import BaseMenu from "../../src/BaseMenu";
import BaseMenuItem from "../../src/BaseMenuItem";
import BaseMenuLink from "../../src/BaseMenuLink";
import BaseMenuToggle from "../../src/BaseMenuToggle";

describe("BaseMenu constructor tests:", () => {
  // Initialize the menu.
  const menu = new BaseMenu();

  it.concurrent("has _MenuType set to BaseMenu.", async () => {
    expect(menu._MenuType).toBe(BaseMenu);
  });

  it.concurrent("has _MenuItemType set to BaseMenuItem", async () => {
    expect(menu._MenuItemType).toBe(BaseMenuItem);
  });

  it.concurrent("has _MenuLinkType set to BaseMenuLink", async () => {
    expect(menu._MenuLinkType).toBe(BaseMenuLink);
  });

  it.concurrent("has _MenuToggleType set to BaseMenuToggle", async () => {
    expect(menu._MenuToggleType).toBe(BaseMenuToggle);
  });
});
