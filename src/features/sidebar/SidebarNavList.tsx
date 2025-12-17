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
      <ul className="flex flex-col gap-3 mt-15">
        {resumeSections.map((section) => (
          <li key={section.name} className="w-max">
            <a
              href={`#${section.name.split(" ").join("-").toLowerCase()}`}
              className="flex gap-2 dark:text-[#fdfdf9] text-shadow-black text-shadow-lg dark:hover:text-[#ff6f61] uppercase font-light"
            >
              <span className="hover:translate-x-2.5 transition ease-in-out dark:hover:translate-none tracking-widest text-xl bebas-neue-regular">
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
