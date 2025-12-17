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
    techStack,
    logo,
  } = entry;

  return (
    <div
      className={`mb-2  px-8 py-5 rounded-sm  hover:transition-all dark:ease-in-out dark:hover:shadow-xl hover:shadow-md hover:shadow-neutral-600 dark:hover:shadow-[#0a0909] dark:hover:bg-zinc-500/10 ${
        isMobileDevice && "dark:bg-zinc-500/10"
      }`}
    >
      <p className="text-sm uppercase mb-1 dark:text-[#a89b9b] pt-2 items-end">
        {date}
      </p>

      <div>
        <div className="flex gap-2 items-center">
          <div className="flex gap-2 items-end mb-2 mt-2">
            {logo && (
              <p className="w-8 h-8 rounded-full border p-1">
                <img src={logo} className="rounded-full" />
              </p>
            )}
            <header className="dark:font-extrabold text-xl sm:text-2xl font-semibold  uppercase dark:text-[#fdfdf9] tracking-widest bebas-neue-regular">
              {title}
            </header>
          </div>
          <div className="flex gap-1">
            {github ? (
              <a
                href={github}
                target="_blank"
                className="dark:fill-[#ff8c81] dark:hover:fill-[#ff6f61] hover:scale-90 dark:hover:scale-100"
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
                className="dark:fill-[#ff8c81] dark:hover:fill-[#ff6f61] hover:scale-90 dark:hover:scale-100"
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
          </div>
        </div>
        <div>
          {descriptor ? (
            <p className="text-sm dark:text-[#fdfdf9] mt-1 tracking-wider">
              {entry.descriptor}
            </p>
          ) : null}
          {organization && (
            <p className="dark:text-zinc-300 text-md">{organization}</p>
          )}
        </div>
      </div>

      {img &&
        (title === "Mind Matters" ||
          title === "Software Engineering Certification" ||
          title === "Smash or Trash") && (
          <img className="mt-5 mb-5" src={img}></img>
        )}
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
      ) : video && isMobileDevice ? (
        <img src={img} className="mt-5 mb-5 dark:rounded-sm shadow-xl" />
      ) : null}

      {textContent ? (
        <p className="mt-4 tracking-wider leading-7 dark:text-[#fdfdf9]">
          {entry.textContent}
        </p>
      ) : null}
      {techStack && (
        <ul className="flex gap-2 capitalize shrink flex-wrap mt-4">
          {techStack.map((tech) => (
            <li
              className="bg-[#ff6f61] text-black flex items-center rounded-md  px-3 text-xs tracking-wider font-medium shadow-2xl shadow-black border border-black "
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default ResumeEntryElement;
