import { describe, it, expect } from "vitest";
import { nav } from "../test-menus";
import BaseMenu from "../../src/BaseMenu";

describe("BaseMenu default dom tests:", () => {
  // Set up the DOM.
  document.body.innerHTML = nav;

  // Get the DOM elements.
  const menuElement = document.querySelector("nav");

  // Initialize the menu.
  const menu = new BaseMenu({
    menuElement,
  });

  it("has the nav element set as the menu element.", () => {
    expect(menu.dom.menu).toBe(menuElement);
  });
});
