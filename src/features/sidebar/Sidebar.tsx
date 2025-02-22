import NonThemeIconToggle from "../../ui/NonThemeIconToggle";
import SidebarHeader from "./SidebarHeader";
import SidebarNavList from "./SidebarNavList";

function Sidebar() {
  return (
    <div className="lg:fixed lg:w-[45%] h-auto lg:h-screen">
      <NonThemeIconToggle />
      <SidebarHeader />
      <SidebarNavList />
    </div>
  );
}

export default Sidebar;
