type ResumeSection = { name: string };

function SidebarNavList() {
  const resumeSections: ResumeSection[] = [
    { name: "about me" },
    { name: "projects" },
    { name: "experience before tech" },
    { name: "education" },
    { name: "volunteer" },
  ];
  return (
    <nav>
      <ul className="flex flex-col gap-1.5 mt-5">
        {resumeSections.map((section) => (
          <li key={section.name} className="w-max">
            <a
              href={`#${section.name.split(" ").join("-").toLowerCase()}`}
              className="flex gap-2 dark:text-[#d6d3cc] text-[#181717] dark:hover:text-[#84cc16]"
            >
              <span className="hover:translate-x-2.5 transition ease-in-out dark:hover:translate-none">
                {section.name.toUpperCase()}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNavList;
