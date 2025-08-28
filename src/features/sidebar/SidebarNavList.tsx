type ResumeSection = { name: string };

function SidebarNavList() {
  const resumeSections: ResumeSection[] = [
    { name: "about me" },
    { name: "projects" },
    { name: "experience before tech" },
    { name: "education" },
  ];
  return (
    <nav>
      <ul className="flex flex-col gap-2 mt-14">
        {resumeSections.map((section) => (
          <li key={section.name} className="w-max">
            <a
              href={`#${section.name.split(" ").join("-").toLowerCase()}`}
              className="flex gap-2 dark:text-[#e6e2e2] shadow-2xl  dark:hover:text-[#84cc16] uppercase font-extralight"
            >
              <span className="hover:translate-x-2.5 transition ease-in-out dark:hover:translate-none tracking-widest text-lg">
                {section.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNavList;
