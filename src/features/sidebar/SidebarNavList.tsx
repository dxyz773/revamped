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
      <ul className="flex flex-col gap-2 mt-8">
        {resumeSections.map((section) => (
          <li key={section.name} className="w-max">
            <a
              href={`#${section.name.split(" ").join("-").toLowerCase()}`}
              className="flex gap-2 dark:text-[#eeeae3] text-[#181717] dark:hover:text-[#84cc16] font-[400]"
            >
              <span className="hover:translate-x-2.5 transition ease-in-out dark:hover:translate-none tracking-wider capitalize text-lg">
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
