import NonThemeIconToggle from "../../ui/NonThemeIconToggle";
import SocialMediaLinkList from "../../ui/SocialMediaLinkList";
import SidebarHeader from "./SidebarHeader";
import SidebarNavList from "./SidebarNavList";

function Sidebar() {
  return (
    <>
      <div className="lg:fixed lg:w-[49%] h-auto lg:h-screen pb-4 border-neutral-300 border-b dark:border-neutral-800 dark:text-[#d6d3cc] lg:border-0 title">
        <NonThemeIconToggle />
        {/* <div className="stars"></div> */}
        <div className="animate-twinkling"></div>
        <div className="px-8 title">
          <SidebarHeader />
          <SidebarNavList />
          <SocialMediaLinkList />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
