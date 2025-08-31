import { useEffect, useState } from "react";
import { getResume } from "../../services/resumeAPI";
import { Resume } from "./resumeTypes";
import ResumeEntryElement from "./ResumeEntry";
import Loader from "../../ui/Loader";
import DownloadResumeLink from "./DownloadResumeLink";

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
      <div className="mb-2  px-8 py-5 rounded-sm  hover:transition-all dark:ease-in-out dark:hover:shadow-xl hover:shadow-md hover:shadow-neutral-600 dark:hover:shadow-[#0a0909] dark:hover:bg-zinc-500/10 ">
        <span className="dark:text-red-600 uppercase text-xl font-extrabold tracking-wide">
          Error!
        </span>

        <span className="ml-1"> Failed to load resume data.</span>
        <div className="flex gap-2 items-center">
          <p className="mt-4">Please download resume via PDF link.</p>
          <div className="pt-4">
            <DownloadResumeLink />
          </div>
        </div>
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
          <h2 className="tracking-wider font-stretch-expanded px-8 mb-5 text-2xl font-extrabold text-stone-200 text-shadow-black uppercase">
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
