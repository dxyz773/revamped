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
    <div className="mb-5 dark:hover:bg-[#151414] px-8 py-5 rounded-md shadow-2xl">
      <p className="text-sm uppercase mb-1 text-neutral-400">{date}</p>

      <div className="flex gap-2 flex-wrap sm:flex-nowrap">
        <header className="dark:font-semibold text-lg capitalize font-bold dark:text-lime-400">
          {title}
        </header>
        <div className="flex gap-2 items-end">
          <p className="text-neutral-100 text-md">{organization}</p>
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
        <p className="text-sm text-[#e5e5e5] mt-1 tracking-wider">
          {entry.descriptor}
        </p>
      ) : null}
      {video && (
        <div className="flex">
          <video
            id="video"
            className="mt-5 mb-5 rounded-md shadow-xl"
            src={video}
            width="750"
            height="500"
            autoPlay={true}
            muted={true}
            loop={true}
          ></video>
        </div>
      )}

      {textContent ? (
        <p className="mt-4 tracking-wider">{entry.textContent}</p>
      ) : null}
    </div>
  );
}
export default ResumeEntryElement;
