import DownloadResumeLink from "./DownloadResumeLink";

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
        <blockquote>
          I am a multidisciplinary technologist with over a decade of experience
          working in people-centered, fast-paced environments. Understanding how
          individuals and communities connect has always been at the heart of my
          work. With a foundation in psychology and years spent across
          entertainment, customer-facing roles, and operations, I bring a
          thoughtful, human-first perspective to the way I approach technology
          and problem-solving.
        </blockquote>
        <blockquote>
          Since 2023, I’ve been actively developing web applications using
          modern JavaScript frameworks and tooling, focusing on clarity,
          maintainability, and intentional technical execution. I’m driven to
          create technology that improves people’s lives, strengthens
          communities, and feels genuinely beautiful to use—especially as
          emerging tools like AI continue to reshape how we interact with and
          build digital experiences.
        </blockquote>
      </div>
    </section>
  );
}

export default ResumeBio;
