import { useState } from "react";
import { star, heart } from "./NonPhosphorIcons";

function NonThemeIconToggle() {
  const [iconToggle, setIconToggle] = useState(true);
  return (
    <button
      className="absolute top-8 hover:rotate-[35deg] transition-all ease-in-out z-3"
      onClick={() => setIconToggle((curr) => !curr)}
    >
      {iconToggle ? star : heart}
    </button>
  );
}

export default NonThemeIconToggle;
