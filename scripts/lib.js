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

/**
 * Simple heuristic for detecting if an app is running in development (a.k.a
 * served from localhost) or production (everything else).
 */
export function isDev() {
  return window.location.hostname === "localhost";
}
