function ResumeBio() {
  return (
    <section
      id="about-me"
      className="flex flex-col gap-4 scroll-m-24 mb-5 border-neutral-200 border-b border-t lg:border-t-0 dark:border-neutral-800 mt-5 pt-10 lg:pt-0"
    >
      <header className="uppercase px-8 font-[500] tracking-wide font-stretch-expanded">
        About Me
      </header>
      <div className="py-5 dark:hover:bg-[#151414] px-8 flex flex-col gap-4 tracking-wider leading-7 rounded-md hover:shadow-2xl hover:transition-all dark:ease-in-out hover:border-neutral-100">
        <p>
          My path to software engineering wasn’t traditional, but that’s what
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
