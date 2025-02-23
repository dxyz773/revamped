import { useEffect } from "react";
import { getResume } from "../../services/resumeAPI";
// import { Resume } from "./resumeTypes";

function ResumeList() {
  // const resumeSections = [
  //   "projects",
  //   "experience-before-tech",
  //   "education",
  //   "volunteer",
  // ];

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
  return <div>Test</div>;
}

export default ResumeList;
