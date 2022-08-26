import BaseMenu from "../../src/BaseMenu";
import BaseMenuItem from "../../src/BaseMenuItem";
import BaseMenuLink from "../../src/BaseMenuLink";
import BaseMenuToggle from "../../src/BaseMenuToggle";

describe("BaseMenu's constructors are as follows:", () => {
  // Initialize the menu.
  const menu = new BaseMenu();

  test("_MenuType is BaseMenu.", () => {
    expect(menu._MenuType).toBe(BaseMenu);
  });

  test("_MenuItemType is BaseMenuItem", () => {
    expect(menu._MenuItemType).toBe(BaseMenuItem);
  });

  test("_MenuLinkType is BaseMenuLink", () => {
    expect(menu._MenuLinkType).toBe(BaseMenuLink);
  });

  test("_MenuToggleType is BaseMenuToggle", () => {
    expect(menu._MenuToggleType).toBe(BaseMenuToggle);
  });
});
