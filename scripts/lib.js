import htm from "../common/htm.js";
import { h } from "../common/vue.esm-browser.prod.js";

// Utils --------------------------------------------------

/**
 * @param {TemplateStringsArray} strings
 * @param {unknown[]} values
 * @returns {string}
 */
const tag = (strings, ...values) => String.raw({ raw: strings }, ...values);

// Choose one of the html helpers below (either the tag alias when using Vue
// templates, or the htm binding when using JSX)
//
// export const html = tag;
export const html = htm.bind(h);

/**
 * Simple heuristic for detecting if an app is running in development (a.k.a served from localhost)
 * or production (everything else).
 */
export function isDev() {
  return window.location.hostname === "localhost";
}
