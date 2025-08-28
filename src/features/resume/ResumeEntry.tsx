import { isMobile } from "../../helpers/isMobile";
import { type ResumeEntry } from "./resumeTypes";

interface ResumeProps {
  entry: ResumeEntry;
}

function ResumeEntryElement({ entry }: ResumeProps) {
  const isMobileDevice = isMobile();

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

  const hasThumbnailForSmScreen =
    title.toLowerCase() === "petite leaf" ||
    title.toLowerCase() === "camp retro" ||
    title.toLowerCase() === "actor";

  return (
    <div
      className={`mb-2  px-8 py-5 rounded-md  hover:transition-all dark:ease-in-out dark:hover:shadow-xl hover:shadow-md hover:shadow-neutral-600 dark:hover:shadow-[#0a0909] dark:hover:bg-fuchsia-200/7 ${
        isMobileDevice && "dark:bg-fuchsia-200/7"
      }`}
    >
      <p className="text-sm uppercase mb-1 dark:text-neutral-200 pt-2">
        {date}
      </p>

      <div className="flex gap-2 flex-wrap">
        <header className="dark:font-light text-xl  uppercase">{title}</header>
        <div className="flex gap-2 items-end">
          <p className="dark:text-fuchsia-50 text-md">{organization}</p>
          <div className="flex gap-1 ">
            {github ? (
              <a
                href={github}
                target="_blank"
                className="dark:fill-neutral-400 dark:hover:fill-[#84cc16] fill-[#000] hover:scale-90 dark:hover:scale-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="inherit"
                  viewBox="0 0 256 256"
                >
                  <path d="M206.13,75.92A57.79,57.79,0,0,0,201.2,29a6,6,0,0,0-5.2-3,57.77,57.77,0,0,0-47,24H123A57.77,57.77,0,0,0,76,26a6,6,0,0,0-5.2,3,57.79,57.79,0,0,0-4.93,46.92A55.88,55.88,0,0,0,58,104v8a54.06,54.06,0,0,0,50.45,53.87A37.85,37.85,0,0,0,98,192v10H72a26,26,0,0,1-26-26A38,38,0,0,0,8,138a6,6,0,0,0,0,12,26,26,0,0,1,26,26,38,38,0,0,0,38,38H98v18a6,6,0,0,0,12,0V192a26,26,0,0,1,52,0v40a6,6,0,0,0,12,0V192a37.85,37.85,0,0,0-10.45-26.13A54.06,54.06,0,0,0,214,112v-8A55.88,55.88,0,0,0,206.13,75.92ZM202,112a42,42,0,0,1-42,42H112a42,42,0,0,1-42-42v-8a43.86,43.86,0,0,1,7.3-23.69,6,6,0,0,0,.81-5.76,45.85,45.85,0,0,1,1.43-36.42,45.85,45.85,0,0,1,35.23,21.1A6,6,0,0,0,119.83,62h32.34a6,6,0,0,0,5.06-2.76,45.83,45.83,0,0,1,35.23-21.11,45.85,45.85,0,0,1,1.43,36.42,6,6,0,0,0,.79,5.74A43.78,43.78,0,0,1,202,104Z"></path>
                </svg>
              </a>
            ) : null}
            {website ? (
              <a
                href={website}
                target="_blank"
                className="dark:fill-neutral-400 dark:hover:fill-[#84cc16] fill-[#000] hover:scale-90 dark:hover:scale-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="inherit"
                  viewBox="0 0 256 256"
                >
                  <path d="M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z"></path>
                </svg>
              </a>
            ) : null}
            {!hasThumbnailForSmScreen && img ? (
              <a
                href={img}
                target="_blank"
                className="dark:fill-neutral-400 dark:hover:fill-[#84cc16] fill-[#000] hover:scale-90 dark:hover:scale-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="inherit"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"></path>
                </svg>
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
      {video && !isMobileDevice ? (
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
      ) : video ? (
        <img src={img} className="mt-5 mb-5 dark:rounded-sm shadow-xl" />
      ) : null}

      {textContent ? (
        <p className="mt-4 tracking-wider leading-7">{entry.textContent}</p>
      ) : null}
    </div>
  );
}
export default ResumeEntryElement;
