import DownloadResumeLink from "./DownloadResumeLink";
import resumeBioData from "./ResumeBioData";

function ResumeBio() {
  return (
    <section
      id="about-me"
      className="flex flex-col gap-4 scroll-m-24 mb-5 border-neutral-200 pt-10 lg:p-2 lg:pt-0"
    >
      <header className="uppercase px-8 tracking-widest font-stretch-expanded dark:font-[400] font-bold flex gap-4 items-center">
        <span className="text-2xl font-extrabold dark:text-[#fdfdf9] text-shadow-black bebas-neue-regular">
          About Me
        </span>
        <DownloadResumeLink />
      </header>
      <div className="mt-2 py-5 pt-8  px-8 flex flex-col gap-8 tracking-wider leading-7 rounded-md dark:hover:shadow-lg dark:hover:transition-all dark:ease-in-out  hover:shadow-neutral-600 dark:hover:shadow-[#0a0909] dark:bg-zinc-500/10 ">
        {resumeBioData.map((curr) => (
          <div className="flex flex-col gap-2 text-[#f4f2f2]" key={curr.title}>
            <div className="flex gap-2.5">
              <span className="hover:rotate-10 transition ease-in-out mt-1">
                {curr.icon}
              </span>
              <p className="uppercase text-lg text-[#cdc5c5] font-extrabold text-shadow-black">
                {curr.title}
              </p>
            </div>
            <p className="text-[#fefefe] text-shadow-black">
              {curr.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ResumeBio;
