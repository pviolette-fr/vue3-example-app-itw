import "../src/assets/main.css"

import { app } from "@storybook/vue3";
import { setUpVueFontAwesome } from "../src/fontawesome";
import { setupI18n } from "../src/i18n";

setupI18n(app)
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