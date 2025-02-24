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
    order,
  } = entry;

  console.log(order);
  return (
    <div className="mb-5 max-w-[37.5rem]">
      <p className="text-xs uppercase mb-1 text-neutral-400">{date}</p>

      <div className="flex gap-2">
        <header className="dark:font-semibold capitalize font-bold dark:text-lime-400">
          {title}
        </header>
        <div className="flex gap-2 items-center">
          <p className="text-neutral-300 text-sm self-end ">{organization}</p>
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
        <p className="text-sm text-neutral-400 mt-1">{entry.descriptor}</p>
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

      {textContent ? <p className="mt-4">{entry.textContent}</p> : null}
    </div>
  );
}
export default ResumeEntryElement;
