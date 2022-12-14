import "../src/assets/main.css"

import { app } from "@storybook/vue3";
import { setUpVueFontAwesome } from "../src/fontawesome";

setUpVueFontAwesome(app)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}