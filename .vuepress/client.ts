import wool from "./components/wool.vue";

import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("wool", wool);
  },
});
