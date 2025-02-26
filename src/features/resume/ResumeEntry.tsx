import { type ResumeEntry } from "./resumeTypes";

interface ResumeProps {
  entry: ResumeEntry;
}

function ResumeEntryElement({ entry }: ResumeProps) {
  const {
    date,
    title,
    organization,
    textContent,
    descriptor,
    github,
    website,
    img,
    video,
  } = entry;

  return (
    <div className="mb-2 dark:hover:bg-[#151414] hover:bg-neutral-[#fff] px-8 py-5 rounded-md hover:shadow-2xl hover:transition-all dark:ease-in-out hover:border-neutral-100">
      <p className="text-sm uppercase mb-1 dark:text-neutral-400 pt-2">
        {date}
      </p>

      <div className="flex gap-2 flex-wrap">
        <header className="dark:font-semibold text-lg capitalize font-bold dark:text-lime-400">
          {title}
        </header>
        <div className="flex gap-2 items-end">
          <p className="dark:text-neutral-100 text-md">{organization}</p>
          <div className="flex gap-1 ">
            {github ? (
              <a
                href={github}
                target="_blank"
                className="dark:hover:text-lime-400 transform translate-y-[2.8px]"
              >
                github
              </a>
            ) : null}
            {website ? (
              <a
                href={website}
                target="_blank"
                className="dark:hover:text-lime-400 transform translate-y-[2.8px]"
              >
                website
              </a>
            ) : null}
            {img ? (
              <a
                href={img}
                target="_blank"
                className="dark:hover:text-lime-400 transform translate-y-[2.8px]"
              >
                img
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {descriptor ? (
        <p className="text-sm dark:text-[#e5e5e5] mt-1 tracking-wider">
          {entry.descriptor}
        </p>
      ) : null}
      {video && (
        <div className="flex">
          <video
            id="video"
            className="mt-5 mb-5 dark:rounded-sm shadow-xl"
            src={video}
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </div>
      )}

      {textContent ? (
        <p className="mt-4 tracking-wider leading-7">{entry.textContent}</p>
      ) : null}
    </div>
  );
}
export default ResumeEntryElement;
