import { useEffect, useState } from "react";
import { getResume } from "../../services/resumeAPI";
import { Resume } from "./resumeTypes";
import ResumeEntryElement from "./ResumeEntry";

function ResumeList() {
  const [resume, setResume] = useState<Resume>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

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

  const sectionList = new Set(resume.map((el) => el.section));
  const sections = [...sectionList];

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {isError}</p>;
  }

  return (
    <>
      {sections.map((section) => (
        <section
          key={section}
          id={section.split(" ").join("-")}
          className="flex flex-col scroll-m-24 gap-2 tracking-wide"
        >
          <h2 className="uppercase pb-5 font-bold dark:font-normal px-8">
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
