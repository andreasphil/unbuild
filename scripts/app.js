import { html } from "@/lib.js";
import { createApp, defineComponent, ref } from "@vendor/vue.esm-browser.prod.js";

const App = defineComponent({
  setup() {
    const name = ref("world");

    return { name };
  },

  template: html`<h1>Hello {{ name }}!</h1>`,
});

createApp(App).mount("#app");
