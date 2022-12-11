import fine from "fine" assert { type: "css" };
import { render } from "preact";
import { useReducer } from "preact/hooks";
import { html } from "./lib.js";
import styles from "./styles/styles.css" assert { type: "css" };

// Apply styles
document.adoptedStyleSheets = [fine, styles];

const App = () => {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "increment") {
      return state + 1;
    } else if (action === "decrement") {
      return state - 1;
    } else {
      throw new Error(`Can't handle "${action}"`);
    }
  }, 0);

  return html`
    <div data-container style="text-align: center">
      <h1 style="font-size: var(--font-size-small); color: var(--c-primary)">
        HELLO, WORLD! 🎉
      </h1>
      <strong style="margin: 3rem 0; font-size: 6rem; display: block">
        ${count}
      </strong>

      <div style="display: flex; gap: 1rem">
        <button
          role="button"
          data-variant="outline"
          onClick=${() => dispatch("decrement")}
        >
          -1
        </button>
        <button role="button" onClick=${() => dispatch("increment")}>+1</button>
      </div>
    </div>
  `;
};

render(html`<${App} />`, document.body);
