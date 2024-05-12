import { useThemeColor } from "@andreasphil/design-system";
import { createApp, defineComponent, onMounted, ref } from "vue";

const App = defineComponent({
  setup() {
    const name = ref("world");

    onMounted(() => {
      useThemeColor();
    });

    return { name };
  },

  template: `<h1>Hello {{ name }}!</h1>`,
});

createApp(App).mount("#app");
