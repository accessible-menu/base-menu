var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class BaseMenuItem {
}
class BaseMenuLink {
}
class BaseMenuToggle {
}
class BaseMenu {
  constructor() {
    __publicField(this, "_MenuType", BaseMenu);
    __publicField(this, "_MenuItemType", BaseMenuItem);
    __publicField(this, "_MenuLinkType", BaseMenuLink);
    __publicField(this, "_MenuToggleType", BaseMenuToggle);
  }
}
export {
  BaseMenu as default
};
