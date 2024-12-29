/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    VContainer: {
      style: {
        "margin-top": "25px",
      },
    },
    VRow: {
      style: {
        "margin-bottom": "-20px",
      },
    },
    VTextField: {
      variant: "outlined",
      rounded: "xl",
      density: "comfortable",
      style: {
        "margin-bottom": "5px",
      },
    },
    VBtn: {
      rounded: "xl",
      variant: "flat",
      style: {
        fontSize: "9pt", // Set default text size for buttons to 9pt
      },
    },
  },
  theme: {
    defaultTheme: "light",
    typography: {
      fontFamily: "Roboto, sans-serif", // Use your desired font
    },
  },
});
