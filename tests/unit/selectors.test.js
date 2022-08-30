import { describe, expect, it } from "vitest";
import { nav } from "../test-menus";
import BaseMenu from "../../src/BaseMenu";

describe("BaseMenu default selector tests:", () => {
  // Set up the DOM.
  document.body.innerHTML = nav;

  // Initialize the menu.
  const menu = new BaseMenu({
    menuElement: document.querySelector("nav"),
  });

  it.concurrent("has the 'menuItems' selector set to 'li'", async () => {
    expect(menu.selectors.menuItems).toBe("li");
  });

  it.concurrent("has the 'menuLinks' selector set to 'a'", async () => {
    expect(menu.selectors.menuLinks).toBe("a");
  });

  it.concurrent("has the 'submenuItems' selector set to ''", async () => {
    expect(menu.selectors.submenuItems).toBe("");
  });

  it.concurrent(
    "has the 'submenuToggles' selector set to 'button'",
    async () => {
      expect(menu.selectors.submenuToggles).toBe("button");
    }
  );

  it.concurrent("has the 'submenus' selector set to 'ul'", async () => {
    expect(menu.selectors.submenus).toBe("ul");
  });
});
