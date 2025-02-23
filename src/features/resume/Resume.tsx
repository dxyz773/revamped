import { useEffect } from "react";
import ThemeToggle from "../theme/ThemeToggle";
import ResumeBio from "./ResumeBio";
import { getResume } from "../../services/resumeAPI";

function Resume() {
  const resumeSections = [
    "projects",
    "experience-before-tech",
    "education",
    "volunteer",
  ];

  useEffect(() => {
    async function getData() {
      try {
        const data = await getResume();
        console.log(data);
      } catch (err) {
        if (err instanceof Error) {
          console.log(err);
        }
        throw new Error("Error fetching data...");
      }
    }
    getData();
  }, []);
  return (
    <>
      <ThemeToggle />
      <div className="lg:absolute lg:right-18 lg:w-[51%] lg:top-36 bottom-0 ">
        <ResumeBio />
        <ul className="flex flex-col gap-20">
          {resumeSections.map((section) => (
            <li key={section} id={section}>
              {section}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Resume;
