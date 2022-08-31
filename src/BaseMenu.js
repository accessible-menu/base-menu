import BaseMenuItem from "./BaseMenuItem";
import BaseMenuLink from "./BaseMenuLink";
import BaseMenuToggle from "./BaseMenuToggle";
import { isCSSSelector, isValidInstance } from "./validate";

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
   * @property {HTMLElement[]} menuLinks      - An array of menu links or buttons.
   * @property {HTMLElement[]} submenuItems   - An array of menu items that also contain submenus.
   * @property {HTMLElement[]} submenuToggles - An array of menu links or buttons that function as submenu toggles.
   * @property {HTMLElement[]} submenus       - An array of submenu elements.
   */
  _dom = {
    menu: null,
    menuItems: [],
    menuLinks: [],
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

    if (
      submenuItemSelector !== "" &&
      submenuToggleSelector !== menuLinkSelector
    ) {
      this._selectors.menuLinks = `${menuLinkSelector},${submenuToggleSelector}`;
    }
  }

  /**
   * Initializes the menu.
   *
   * The following steps will be taken to initialize the menu:
   * - Validate that the menu can initialize, and
   * - populate all the DOM elements within the menu.
   */
  initialize() {
    if (!this._validate()) {
      throw new Error(
        "AccessibleMenu: cannot initialize menu. See other error messages for more information."
      );
    }

    // Set all DOM elements.
    this._setDOMElements();
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

  /**
   * Validates all aspects of the menu.
   *
   * @protected
   *
   * @return {boolean} - The result of the validation.
   */
  _validate() {
    let check = true;

    // Check the base menu element.
    if (!isValidInstance(HTMLElement, { menuElement: this._dom.menu })) {
      check = false;
    }

    // Check the CSS selectors.
    if (
      this._selectors.submenuItems !== "" &&
      !isCSSSelector({
        menuItemSelector: this._selectors.menuItems,
        menuLinkSelector: this._selectors.menuLinks,
        submenuItemSelector: this._selectors.submenuItems,
        submenuToggleSelector: this._selectors.submenuToggles,
        submenuSelector: this._selectors.submenus,
      })
    ) {
      check = false;
    } else if (
      !isCSSSelector({
        menuItemSelector: this._selectors.menuItems,
        menuLinkSelector: this._selectors.menuLinks,
      })
    ) {
      check = false;
    }

    return check;
  }

  /**
   * Sets DOM elements within the menu.
   *
   * Elements that are not stored inside of an array cannot be set
   * through this method.
   *
   * @protected
   *
   * @param {string}      elementType            - The type of element to populate.
   * @param {HTMLElement} [base = this.dom.menu] - The element used as the base for the query selector.
   * @param {boolean}     [overwrite = true]     - A flag to set if the existing elements will be overwritten.
   */
  _setDOMElementType(elementType, base = this.dom.menu, overwrite = true) {
    // If the selector doesn't exist, throw an error.
    if (typeof this.selectors[elementType] !== "string") {
      throw new Error(
        `AccessibleMenu: "${elementType}" is not a valid element type within the menu.`
      );
    }

    // If the dom storage isn't an array, throw an error.
    // We do not set non-arrays through this method.
    if (!Array.isArray(this.dom[elementType])) {
      throw new Error(
        `AccessibleMenu: "${elementType}" elements cannot be set through _setDOMElementType().`
      );
    }

    // If the base is not the default value, make sure it's
    // an HTML element for moving further.
    if (base !== this.dom.menu) isValidInstance(HTMLElement, { base });

    // Get all the elements matching the selector.
    const domElements = Array.from(
      base.querySelectorAll(`:scope > ${this.selectors[elementType]}`)
    );

    if (overwrite) {
      this._dom[elementType] = domElements;
    } else {
      this._dom[elementType] = [...this._dom[elementType], ...domElements];
    }
  }

  /**
   * Sets all the DOM elements within the menu.
   *
   * Utilizes the _setDOMElementType() method.
   */
  _setDOMElements() {
    // Set the menu items.
    this._setDOMElementType("menuItems");

    // Set the menu links.
    this.dom.menuItems.forEach(item => {
      this._setDOMElementType("menuLinks", item, false);
    });

    // Set the submenu items, toggles, and menus if needed.
    if (this.selectors.submenuItems !== "") {
      this._setDOMElementType("submenuItems");

      this.dom.submenuItems.forEach(item => {
        this._setDOMElementType("submenuToggles", item, false);
        this._setDOMElementType("submenus", item, false);
      });
    }
  }
}

export default BaseMenu;
