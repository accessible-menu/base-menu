var c = Object.defineProperty;
var i = (s, e, u) => e in s ? c(s, e, { enumerable: !0, configurable: !0, writable: !0, value: u }) : s[e] = u;
var t = (s, e, u) => (i(s, typeof e != "symbol" ? e + "" : e, u), u);
class _ {
}
class g {
}
class a {
}
class n {
  constructor({
    menuElement: e,
    menuItemSelector: u = "li",
    menuLinkSelector: m = "a",
    submenuItemSelector: l = "",
    submenuToggleSelector: o = "button",
    submenuSelector: r = "ul"
  }) {
    t(this, "_MenuType", n);
    t(this, "_MenuItemType", _);
    t(this, "_MenuLinkType", g);
    t(this, "_MenuToggleType", a);
    t(this, "_selectors", {
      menuItems: "",
      menuLinks: "",
      submenuItems: "",
      submenuToggles: "",
      submenus: ""
    });
    t(this, "_dom", {
      menu: null,
      menuItems: [],
      submenuItems: [],
      submenuToggles: [],
      submenus: []
    });
    this._dom.menu = e, this._selectors.menuItems = u, this._selectors.menuLinks = m, this._selectors.submenuItems = l, this._selectors.submenuToggles = o, this._selectors.submenus = r;
  }
  get dom() {
    return this._dom;
  }
  get selectors() {
    return this._selectors;
  }
}
export {
  n as default
};
