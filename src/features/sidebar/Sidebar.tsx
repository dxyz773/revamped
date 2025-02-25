import { github } from "../../ui/NonPhosphorIcons";
import NonThemeIconToggle from "../../ui/NonThemeIconToggle";
import SidebarHeader from "./SidebarHeader";
import SidebarNavList from "./SidebarNavList";

function Sidebar() {
  return (
    <div className="lg:fixed lg:w-[49%] h-auto lg:h-screen">
      <NonThemeIconToggle />
      <div className="px-8">
        <SidebarHeader />
        <SidebarNavList />
        <span>{github}</span>
      </div>
    </div>
  );
}

export default Sidebar;
