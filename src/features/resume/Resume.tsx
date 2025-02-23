import ThemeToggle from "../theme/ThemeToggle";
import ResumeBio from "./ResumeBio";
import ResumeList from "./ResumeList";

function Resume() {
  return (
    <>
      <ThemeToggle />
      <div className="lg:absolute lg:right-18 lg:w-[51%] lg:top-36 bottom-0 ">
        <ResumeBio />
        <ul className="flex flex-col gap-20">
          {/* {resumeSections.map((section) => (
            <li key={section} id={section}>
              {section}
            </li>
          ))} */}
          <ResumeList />
        </ul>
      </div>
    </>
  );
}

export default Resume;
