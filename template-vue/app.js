import fine from "fine" assert { type: "css" };
import { createApp, defineComponent, ref } from "vue";
import { html } from "./lib.js";
import styles from "./styles/styles.css" assert { type: "css" };

// Apply styles
document.adoptedStyleSheets = [fine, styles];

const App = defineComponent({
  setup() {
    const count = ref(0);
    const increment = () => count.value++;
    const decrement = () => count.value--;

    return () => html`
      <div f-container style="text-align: center">
        <h1 style="font-size: var(--small-font-size); color: var(--c-primary)">
          HELLO, WORLD! 🎉
        </h1>
        <strong style="margin: 3rem 0; font-size: 6rem; display: block">
          ${count.value}
        </strong>

        <div style="display: flex; gap: 1rem">
          <button role="button" f-outline onClick=${decrement}>-1</button>
          <button role="button" onClick=${increment}>+1</button>
        </div>
      </div>
    `;
  },
});

createApp(App).mount("body");
