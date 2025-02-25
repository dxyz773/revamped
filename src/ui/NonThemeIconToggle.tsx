import { useState } from "react";
import { star, spaceShip } from "./NonPhosphorIcons";

function NonThemeIconToggle() {
  const [iconToggle, setIconToggle] = useState(true);
  return (
    <button
      className="absolute top-8 hover:rotate-[35deg] transition-all ease-in-out"
      onClick={() => setIconToggle((curr) => !curr)}
    >
      {iconToggle ? star : spaceShip}
    </button>
  );
}

export default NonThemeIconToggle;
