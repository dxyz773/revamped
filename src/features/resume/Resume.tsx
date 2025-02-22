import ThemeToggle from "../theme/ThemeToggle";
import ResumeBio from "./ResumeBio";

function Resume() {
  const resumeSections = [
    "projects",
    "experience-before-tech",
    "education",
    "volunteer",
  ];
  return (
    <>
      <ThemeToggle />
      <div className="lg:absolute lg:right-16 lg:w-[55%] lg:top-36 bottom-0 ">
        <ResumeBio />
        <ul className="flex flex-col gap-20">
          {resumeSections.map((section) => (
            <li id={section}>{section}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Resume;
