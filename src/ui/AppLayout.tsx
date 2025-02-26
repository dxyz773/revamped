import Resume from "../features/resume/Resume";
import Sidebar from "../features/sidebar/Sidebar";

function AppLayout() {
  return (
    <div className="px-12 relative flex flex-col lg:flex-row gap-8 pb-10 lg:gap-10">
      <Sidebar />
      <Resume />
    </div>
  );
}

export default AppLayout;
