import { moon, sun } from "./ThemeToggleIcons";
import { useTheme } from "./useTheme";

function ThemeToggle() {
  const { isDark, handleSetTheme } = useTheme();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        localStorage.setItem(
          "color-theme",
          localStorage.getItem("color-theme") === "light" ? "dark" : "light"
        );
        handleSetTheme();
      }}
    >
      {isDark ? moon : sun}
    </button>
  );
}

export default ThemeToggle;
