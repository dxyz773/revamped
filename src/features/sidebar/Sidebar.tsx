import NonThemeIconToggle from "../../ui/NonThemeIconToggle";
import SocialMediaLinkList from "../../ui/SocialMediaLinkList";
import SidebarHeader from "./SidebarHeader";
import SidebarNavList from "./SidebarNavList";

function Sidebar() {
  return (
    <div className="lg:fixed lg:w-[49%] h-auto lg:h-screen">
      <NonThemeIconToggle />
      <div className="px-8">
        <SidebarHeader />
        <SidebarNavList />
        <SocialMediaLinkList />
      </div>
    </div>
  );
}

export default Sidebar;
