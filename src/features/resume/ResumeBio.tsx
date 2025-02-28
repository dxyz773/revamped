function ResumeBio() {
  return (
    <section
      id="about-me"
      className="flex flex-col gap-4 scroll-m-24 mb-5 border-neutral-200 border-b border-t lg:border-t-0 dark:border-neutral-800 mt-5 pt-10 lg:pt-0"
    >
      <header className="uppercase px-8 tracking-wider font-stretch-expanded dark:font-[400] font-bold flex gap-4 items-center">
        <span> About Me</span>
        <a
          href="/DemitryEdwardsResume.pdf"
          download="DemitryEdwardsResume"
          className="dark:fill-neutral-400 dark:hover:fill-[#84cc16] fill-[#000] hover:scale-90 dark:hover:scale-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="inherit"
            viewBox="0 0 256 256"
          >
            <path d="M222,152a6,6,0,0,1-6,6H190v20h18a6,6,0,0,1,0,12H190v18a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6h32A6,6,0,0,1,222,152ZM90,172a26,26,0,0,1-26,26H54v10a6,6,0,0,1-12,0V152a6,6,0,0,1,6-6H64A26,26,0,0,1,90,172Zm-12,0a14,14,0,0,0-14-14H54v28H64A14,14,0,0,0,78,172Zm84,8a34,34,0,0,1-34,34H112a6,6,0,0,1-6-6V152a6,6,0,0,1,6-6h16A34,34,0,0,1,162,180Zm-12,0a22,22,0,0,0-22-22H118v44h10A22,22,0,0,0,150,180ZM42,112V40A14,14,0,0,1,56,26h96a6,6,0,0,1,4.25,1.76l56,56A6,6,0,0,1,214,88v24a6,6,0,0,1-12,0V94H152a6,6,0,0,1-6-6V38H56a2,2,0,0,0-2,2v72a6,6,0,0,1-12,0ZM158,82h35.52L158,46.48Z"></path>
          </svg>
        </a>
      </header>
      <div className="py-5 dark:hover:bg-[#111827] px-8 flex flex-col gap-4 tracking-wider leading-7 rounded-md dark:hover:shadow-lg dark:hover:transition-all dark:ease-in-out hover:border-neutral-100  hover:shadow-md hover:shadow-neutral-600 dark:hover:shadow-[#0a0909]">
        <p>
          My path to software development wasn’t traditional, but that’s what
          makes it exciting. With a background in psychology and a decade in
          acting, I’ve always been drawn to{" "}
          <span className="dark:text-[#84cc16] font-bold dark:font-normal">
            storytelling{" "}
          </span>
          and human connection—skills that naturally translated into coding.
          Learning JavaScript, React, and Python opened up a whole new world
          where I could turn ideas into interactive, beautifully designed
          applications. From building Petite Leaf, a plant lover’s e-commerce
          site, to creating the game-inspired Camp Retro, I’ve found so much joy
          in crafting engaging digital spaces. Lately, I’ve been deepening my
          expertise in{" "}
          <span className="dark:text-[#84cc16] font-bold dark:font-normal">
            TypeScript, SQL, and NoSQL
          </span>{" "}
          databases to make my applications even more scalable and efficient.
        </p>
        <p>
          Beyond coding,{" "}
          <span className="dark:text-[#84cc16] font-bold dark:font-normal">
            collaboration{" "}
          </span>
          is what drives me. I love working with diverse teams, solving
          challenges together, and bringing projects to life. Leading Mind
          Matters for the Women Who Code Hackathon was a defining moment—I
          wasn’t just coding; I was guiding a remote team, managing schedules,
          and debugging through pair programming. It reminded me of my theater
          days, where every moving part needed to come together for a great
          performance. Whether supporting fellow developers, conducting code
          reviews, or brainstorming solutions, I thrive in spaces where{" "}
          <span className="dark:text-[#84cc16] font-bold dark:font-normal">
            creativity and teamwork{" "}
          </span>
          go hand in hand. My journey has been anything but linear, but that’s
          exactly what makes it mine.
        </p>
      </div>
    </section>
  );
}

export default ResumeBio;
