import { createCustomTheme } from "@roq/nextjs";

export const roqThemeLight = createCustomTheme({
  name: "ROQ Custom Theme",
  base: {
    primary: "#4e465e",
    secondary: "#E96479",
  },
  spacing: {
    borderRadius: "12px",
  },
  typography: {
    family: "'Lato', sans-serif",
  },
});
