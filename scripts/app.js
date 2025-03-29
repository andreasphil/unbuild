import { html } from "@/lib.js";
import { useThemeColor } from "@vendor/andreasphil/design-system@v0.43.0/scripts/utils.js";
import {
  createApp,
  defineComponent,
  onMounted,
  ref,
} from "@vendor/vue@3.5.13/dist/vue.esm-browser.prod.js";

const App = defineComponent({
  setup() {
    const name = ref("world");

    onMounted(() => {
      useThemeColor();
    });

    return { name };
  },

  template: html`<h1>Hello {{ name }}!</h1>`,
});

createApp(App).mount("#app");
