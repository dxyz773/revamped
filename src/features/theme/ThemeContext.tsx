import { createContext } from "react";
import { ThemeProviderState } from "./themeContextTypes";

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
);

export default ThemeProviderContext;
