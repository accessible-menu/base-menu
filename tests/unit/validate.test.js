import { describe, expect, it } from "vitest";
import { isValidInstance } from "../../src/validate";

describe("isValueInstance tests", () => {
  it("will return false if 'constructor' or 'elements' is not passed.", () => {
    expect(isValidInstance()).toBeFalsy();
  });

  it("will return false if 'elements' is not passed.", () => {
    expect(isValidInstance(HTMLElement)).toBeFalsy();
  });

  it("will return false if 'elements' in not an object.", () => {
    const element = document.createElement("div");

    expect(isValidInstance(HTMLElement, element));
  });

  it("will return false if 'elements' is an empty object.", () => {
    const elements = {};

    expect(isValidInstance(HTMLElement, elements)).toBeFalsy();
  });

  it("will return false if the single entry in 'elements' does not match the given 'constructor'.", () => {
    const elements = {
      element: "This is a string.",
    };

    expect(isValidInstance(HTMLElement, elements)).toBeFalsy();
  });

  it("will return true if the single entry in 'elements' does match the given 'constructor'.", () => {
    const elements = {
      element: document.createElement("div"),
    };

    expect(isValidInstance(HTMLElement, elements)).toBeTruthy();
  });

  it("will return false if one of the entries in 'elements' does not match the given 'contructor'.", () => {
    const elements = {
      element: document.createElement("div"),
      otherElement: "This is a string.",
    };

    expect(isValidInstance(HTMLElement, elements)).toBeFalsy();
  });

  it("will return true if all of the entries in 'elements' do match the given 'contructor'.", () => {
    const elements = {
      element: document.createElement("div"),
      otherElement: document.createElement("p"),
    };

    expect(isValidInstance(HTMLElement, elements)).toBeTruthy();
  });
});
