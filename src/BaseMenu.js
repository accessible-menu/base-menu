import BaseMenuItem from "./BaseMenuItem";
import BaseMenuLink from "./BaseMenuLink";
import BaseMenuToggle from "./BaseMenuToggle";

/**
 * An accessible navigation element in the DOM.
 *
 * This is intended to be used as a base to other menus and not to be used on
 * it's own in the DOM.
 */
class BaseMenu {
  /**
   * The class to use when generating submenus.
   *
   * @protected
   *
   * @type {typeof BaseMenu}
   */
  _MenuType = BaseMenu;

  /**
   * The class to use when generating menu items.
   *
   * @protected
   *
   * @type {typeof BaseMenuItem}
   */
  _MenuItemType = BaseMenuItem;

  /**
   * The class to use when generating menu links.
   *
   * @protected
   *
   * @type {typeof BaseMenuLink}
   */
  _MenuLinkType = BaseMenuLink;

  /**
   * The class to use when generating submenu toggles.
   *
   * @protected
   *
   * @type {typeof BaseMenuToggle}
   */
  _MenuToggleType = BaseMenuToggle;

  /**
   * The query selector strings used to populate _dom.
   *
   * @protected
   *
   * @type {Object<string>}
   *
   * @property {string} menuItems      - The query selector for menu items.
   * @property {string} menuLinks      - The query selector for menu links.
   * @property {string} submenuItems   - The query selector for menu items containing submenus.
   * @property {string} submenuToggles - The query selector for menu links or buttons that function as submenu toggles.
   * @property {string} submenus       - The query selector for submenus.
   */
  _selectors = {
    menuItems: "",
    menuLinks: "",
    submenuItems: "",
    submenuToggles: "",
    submenus: "",
  };

  /**
   * The DOM elements within the menu.
   *
   * @protected
   *
   * @type {Object<HTMLElement, HTMLElement[]>}
   *
   * @property {HTMLElement}   menu           - The menu element.
   * @property {HTMLElement[]} menuItems      - An array of menu items.
   * @property {HTMLElement[]} submenuItems   - An array of menu items that also contain submenus.
   * @property {HTMLElement[]} submenuToggles - An array of menu links or buttons that function as submenu toggles.
   * @property {HTMLElement[]} submenus       - An array of submenu elements.
   */
  _dom = {
    menu: null,
    menuItems: [],
    submenuItems: [],
    submenuToggles: [],
    submenus: [],
  };

  /**
   * Constructs the menu.
   *
   * @param {object}      options                       - The options object for generating the menu.
   * @param {HTMLElement} options.menuElement           - The menu element in the DOM.
   * @param {string}      options.menuItemSelector      - The query selector for menu items.
   * @param {string}      options.menuLinkSelector      - The query selector for menu links.
   * @param {string}      options.submenuItemSelector   - The query selector for menu items containing submenus.
   * @param {string}      options.submenuToggleSelector - The query selector for menu links or buttons that function as submenu toggles.
   * @param {string}      options.submenuSelector       - The query selector for submenus.
   */
  constructor({
    menuElement,
    menuItemSelector = "li",
    menuLinkSelector = "a",
    submenuItemSelector = "",
    submenuToggleSelector = "button",
    submenuSelector = "ul",
  }) {
    // Set the DOM elements.
    this._dom.menu = menuElement;

    // Set the query selectors.
    this._selectors.menuItems = menuItemSelector;
    this._selectors.menuLinks = menuLinkSelector;
    this._selectors.submenuItems = submenuItemSelector;
    this._selectors.submenuToggles = submenuToggleSelector;
    this._selectors.submenus = submenuSelector;
  }

  /**
   * The DOM elements within the menu.
   *
   * @type {Object<HTMLElement, HTMLElement[]>}
   *
   * @see _dom
   */
  get dom() {
    return this._dom;
  }

  /**
   * The query selector strings used to populate the dom.
   *
   * @type {Object<string>}
   *
   * @see _selectors
   */
  get selectors() {
    return this._selectors;
  }
}

export default BaseMenu;
