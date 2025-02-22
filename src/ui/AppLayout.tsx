import Resume from "../features/resume/Resume";
import Sidebar from "../features/sidebar/Sidebar";

function AppLayout() {
  return (
    <div className="px-8 relative flex flex-col lg:flex-row gap-8">
      <Sidebar />
      <Resume />
    </div>
  );
}

export default AppLayout;
