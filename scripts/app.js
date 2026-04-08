import { createApp, defineComponent, ref } from "@common/vue.esm-browser.prod.js";
import { html } from "@/lib.js";

const App = defineComponent({
  setup() {
    const name = ref("world");

    return { name };
  },

  template: html`<h1>Hello {{ name }}!</h1>`,
});

createApp(App).mount("#app");
