import { describe, expect, it } from "vitest";
import { nav } from "../test-menus";
import BaseMenu from "../../src/BaseMenu";

describe("BaseMenu validation tests", () => {
  // Set up the DOM.
  document.body.innerHTML = nav;

  it("will not validate if menuElement is not a DOM element.", () => {
    // Initialize the menu.
    const menu = new BaseMenu({
      menuElement: "nav ul",
    });

    expect(menu._validate()).toBe(false);
  });

  it.each([
    "menuItemSelector",
    "menuLinkSelector",
    "submenuItemSelector",
    "submenuToggleSelector",
    "submenuSelector",
  ])("will not validate if %s is not a valid query selector", prop => {
    // Set the menu options.
    const menuOptions = {
      menuElement: document.querySelector("nav ul"),
      submenuItemSelector: "li",
    };
    menuOptions[prop] = 0;

    // Initialize the menu.
    const menu = new BaseMenu(menuOptions);

    expect(menu._validate()).toBe(false);
  });
});
