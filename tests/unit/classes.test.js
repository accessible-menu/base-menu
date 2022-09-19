import { describe, it, expect } from "vitest";
import { nav } from "../test-menus";
import BaseMenu from "../../src/BaseMenu";
import BaseMenuItem from "../../src/BaseMenuItem";
import BaseMenuLink from "../../src/BaseMenuLink";
import BaseMenuToggle from "../../src/BaseMenuToggle";

describe("BaseMenu constructor tests", () => {
  document.body.innerHTML = nav;

  // Initialize the menu.
  const menu = new BaseMenu({
    menuElement: document.querySelector("nav ul"),
  });

  it("has _MenuType set to BaseMenu.", () => {
    expect(menu._MenuType).toBe(BaseMenu);
  });

  it("has _MenuItemType set to BaseMenuItem", () => {
    expect(menu._MenuItemType).toBe(BaseMenuItem);
  });

  it("has _MenuLinkType set to BaseMenuLink", () => {
    expect(menu._MenuLinkType).toBe(BaseMenuLink);
  });

  it("has _MenuToggleType set to BaseMenuToggle", () => {
    expect(menu._MenuToggleType).toBe(BaseMenuToggle);
  });
});
