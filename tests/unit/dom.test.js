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

  it.concurrent("has the correct nav element in the dom.", async () => {
    expect(menu.dom.menu).toBe(menuElement);
  });

  it.concurrent("has menu items matching the dom.", async () => {
    expect(menu.dom.menuItems).toStrictEqual(menuItems);
  });

  it.concurrent("has menu links matching the dom.", async () => {
    expect(menu.dom.menuLinks).toStrictEqual(menuLinks);
  });

  it.concurrent("has no submenu items.", async () => {
    expect(menu.dom.submenuItems).toStrictEqual([]);
  });

  it.concurrent("has no submenu toggles.", async () => {
    expect(menu.dom.submenuToggles).toStrictEqual([]);
  });

  it.concurrent("has no submenus.", async () => {
    expect(menu.dom.submenus).toStrictEqual([]);
  });
});
