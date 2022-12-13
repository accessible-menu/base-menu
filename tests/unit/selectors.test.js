import { describe, expect, it } from "vitest";
import { nav } from "../test-menus";
import BaseMenu from "../../src/BaseMenu";

describe("BaseMenu default selector tests", () => {
  // Set up the DOM.
  document.body.innerHTML = nav;

  // Initialize the menu.
  const menu = new BaseMenu({
    menuElement: document.querySelector("nav ul"),
  });

  it("has the 'menuItems' selector set to 'li'", () => {
    expect(menu.selectors.menuItems).toBe("li");
  });

  it("has the 'menuLinks' selector set to 'a'", () => {
    expect(menu.selectors.menuLinks).toBe("a");
  });

  it("has the 'submenuItems' selector set to ''", () => {
    expect(menu.selectors.submenuItems).toBe("");
  });

  it("has the 'submenuToggles' selector set to 'button'", () => {
    expect(menu.selectors.submenuToggles).toBe("button");
  });

  it("has the 'submenus' selector set to 'ul'", () => {
    expect(menu.selectors.submenus).toBe("ul");
  });
});

describe("BaseMenu custom selector tests", () => {
  // Set the custom selector.
  const customSelector = ".custom";

  // Set up the DOM.
  document.body.innerHTML = nav;

  it("has menu item selector set to custom value", () => {
    // Initialize the menu.
    const menu = new BaseMenu({
      menuElement: document.querySelector("nav ul"),
      menuItemSelector: customSelector,
    });

    expect(menu.selectors.menuItems).toBe(customSelector);
  });

  it("has menu link selector set to custom value", () => {
    // Initialize the menu.
    const menu = new BaseMenu({
      menuElement: document.querySelector("nav ul"),
      menuLinkSelector: customSelector,
    });

    expect(menu.selectors.menuLinks).toBe(customSelector);
  });

  it("has submenu item selector set to custom value", () => {
    // Initialize the menu.
    const menu = new BaseMenu({
      menuElement: document.querySelector("nav ul"),
      submenuItemSelector: customSelector,
    });

    expect(menu.selectors.submenuItems).toBe(customSelector);
  });

  it("has submenu toggle selector set to custom value", () => {
    // Initialize the menu.
    const menu = new BaseMenu({
      menuElement: document.querySelector("nav ul"),
      submenuToggleSelector: customSelector,
    });

    expect(menu.selectors.submenuToggles).toBe(customSelector);
  });

  it("has submenu selector set to custom value", () => {
    // Initialize the menu.
    const menu = new BaseMenu({
      menuElement: document.querySelector("nav ul"),
      submenuSelector: customSelector,
    });

    expect(menu.selectors.submenus).toBe(customSelector);
  });
});
