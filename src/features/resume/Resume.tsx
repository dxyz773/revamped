import Footer from "../../ui/Footer";
import ThemeToggle from "../theme/ThemeToggle";
import ResumeBio from "./ResumeBio";
import ResumeList from "./ResumeList";

function Resume() {
  return (
    <>
      <ThemeToggle />
      <div className="lg:absolute lg:right-18 lg:w-[51%] lg:top-36 bottom-0 max-w-[740px] lg:mr-5">
        <ResumeBio />
        <ul className="flex flex-col gap-4">
          <ResumeList />
        </ul>
        <Footer />
      </div>
    </>
  );
}

export default Resume;
