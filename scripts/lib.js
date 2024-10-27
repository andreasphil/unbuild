/* -------------------------------------------------- *
 * Utils                                              *
 * -------------------------------------------------- */

/**
 * @param {TemplateStringsArray} strings
 * @param {unknown[]} values
 * @returns {string}
 */
const tag = (strings, ...values) => String.raw({ raw: strings }, ...values);

/**
 * Helper for HTML template strings. The tag does nothing, but using it will
 * allow syntax highlighting and formatting if your editor supports it.
 */
export const html = tag;
