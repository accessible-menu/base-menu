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
}

export default BaseMenu;
