/* eslint-disable no-console */

import "./style.css";
import { nav } from "./tests/test-menus";
import BaseMenu from "./src/BaseMenu";

document.querySelector("header").innerHTML = nav;

const menu = new BaseMenu({
  menuElement: document.querySelector("nav ul"),
});

menu.initialize();

console.log(menu);
