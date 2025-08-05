import { useEffect, useState } from "react";
import { getResume } from "../../services/resumeAPI";
import { Resume } from "./resumeTypes";
import ResumeEntryElement from "./ResumeEntry";
import Loader from "../../ui/Loader";

function ResumeList() {
  const [resume, setResume] = useState<Resume>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  const loadingArr = ["projects", "experience before tech", "education"];

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const data: Resume = await getResume();
        setResume(data);
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "There was an error fetching resume data.";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  if (isLoading) {
    return (
      <>
        {loadingArr.map((section) => (
          <section
            key={`${section} ${1}`}
            className="flex flex-col scroll-m-24 gap-2 mt-5"
          >
            <h2 className="capitalize tracking-wider font-stretch-expanded text-lg px-8 mb-5 dark:font-[400] font-bold">
              {section}
            </h2>
            <Loader />
          </section>
        ))}
      </>
    );
  }

  if (isError) {
    return (
      <div>
        <p className="mb-2 dark:hover:bg-[#111827] px-8 py-5 rounded-md  hover:transition-all dark:ease-in-out dark:hover:shadow-xl hover:shadow-md hover:shadow-neutral-600 dark:hover:shadow-[#0a0909]">
          <span className="text-red-600">Error!</span> Failed to load resume
          data. Please download resume via pdf link in
          <a className="dark:hover:text-[#84cc16]" href="#about-me">
            {" "}
            About Me
          </a>{" "}
          section above.
        </p>
      </div>
    );
  }

  return (
    <>
      {loadingArr.map((section) => (
        <section
          key={section}
          id={section.split(" ").join("-")}
          className="flex flex-col scroll-m-24 gap-2 tracking-wide
           border-neutral-300 dark:border-neutral-800 mt-5 lg:p-2"
        >
          <h2 className="tracking-wider font-stretch-expanded text-lg px-8 mb-5 dark:font-[400] font-bold text-fuchsia-50 uppercase">
            {section}
          </h2>
          {resume
            .filter((curr) => curr.section === section)
            .sort((a, b) => a.order - b.order)
            .map((entry) => (
              <ResumeEntryElement key={entry.id} entry={entry} />
            ))}
        </section>
      ))}
    </>
  );
}

export default ResumeList;
