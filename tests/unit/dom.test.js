import { describe, it, expect } from "vitest";
import { nav } from "../test-menus";
import BaseMenu from "../../src/BaseMenu";

describe("BaseMenu default dom tests", () => {
  // Set up the DOM.
  document.body.innerHTML = nav;

  // Get the DOM elements.
  const menuElement = document.querySelector("nav ul");
  const menuItems = Array.from(menuElement.querySelectorAll(":scope > li"));
  const menuLinks = Array.from(menuElement.querySelectorAll("a,button")).filter(
    link => menuItems.includes(link.parentElement)
  );

  // Initialize the menu.
  const menu = new BaseMenu({
    menuElement,
  });
  menu._setDOMElements();

  it("has the correct nav element in the dom.", () => {
    expect(menu.dom.menu).toBe(menuElement);
  });

  it("has menu items matching the dom.", () => {
    expect(menu.dom.menuItems).toStrictEqual(menuItems);
  });

  it("has menu links matching the dom.", () => {
    expect(menu.dom.menuLinks).toStrictEqual(menuLinks);
  });

  it("has no submenu items.", () => {
    expect(menu.dom.submenuItems).toStrictEqual([]);
  });

  it("has no submenu toggles.", () => {
    expect(menu.dom.submenuToggles).toStrictEqual([]);
  });

  it("has no submenus.", () => {
    expect(menu.dom.submenus).toStrictEqual([]);
  });
});
