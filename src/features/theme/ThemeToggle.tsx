import { moon, sun } from "../../ui/Icons";
import { useTheme } from "./useTheme";

function ThemeToggle() {
  const { isDark, handleSetTheme } = useTheme();

  return (
    <button
      className="hover:rotate-[35deg] transition-all ease-in-out absolute lg:fixed top-8 right-8"
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
