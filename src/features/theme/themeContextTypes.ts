export type Theme = "light" | "dark" | "system";

export type ThemeProviderState = {
  theme: Theme;
  handleSetTheme: () => void;
  isDark: boolean;
};

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};
