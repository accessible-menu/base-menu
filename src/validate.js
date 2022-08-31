/**
 * Check to see if the provided elements have a specific contructor.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * This is essentially just a wrapper function around checking instanceof with
 * more descriptive error message to help debugging.
 *
 * Will return true is the check is successful.
 *
 * @param  {object}  contructor - The constructor to check for.
 * @param  {object}  elements   - The element(s) to check.
 * @return {boolean}            - The result of the check.
 */
export function isValidInstance(contructor, elements) {
  try {
    if (typeof elements !== "object") {
      const elementsType = typeof elements;

      throw new TypeError(
        `AccessibleMenu: Elements given to isValidInstance() must be inside of an object. ${elementsType} given.`
      );
    }

    for (const key in elements) {
      if (!(elements[key] instanceof contructor)) {
        const elementType = typeof elements[key];
        throw new TypeError(
          `AccessibleMenu: ${key} must be an instance of ${contructor.name}. ${elementType} given.`
        );
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

/**
 * Checks to see if the provided values are valid CSS selectors.
 *
 * The values must be provided inside of an object
 * so the variable name can be retrieved in case of errors.
 *
 * Will return true is the check is successful.
 *
 * @param  {Object<string>} values - The value(s) to check.
 * @return {boolean}                - The result of the check.
 */
export function isCSSSelector(values) {
  try {
    if (typeof values !== "object") {
      const type = typeof values;

      throw new TypeError(
        `AccessibleMenu: Values given to isCSSSelector() must be inside of an object. ${type} given.`
      );
    }

    for (const key in values) {
      try {
        if (values[key] === null) {
          throw new Error();
        }

        document.querySelector(values[key]);
      } catch (error) {
        throw new TypeError(
          `AccessibleMenu: ${key} must be a valid CSS selector. "${values[key]}" given.`
        );
      }
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
