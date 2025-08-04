function SidebarHeader() {
  return (
    <header className="mt-36">
      <h1 className="text-6xl font-bold text-shadow shadow-2xl max-w-[436px] dark:text-fuchsia-50">
        Demitry Edwards
      </h1>
      <div className="pt-8 flex flex-col max-w-[330px]">
        <span className="uppercase tracking-wider font-semibold text-shadow dark:text-[#d6d3cc]"></span>
        <blockquote className="pb-3 tracking-wide dark:text-fuchsia-100 shadow-2xl">
          Software Engineer with a passion for blending artistry & technology.
        </blockquote>
      </div>
    </header>
  );
}

export default SidebarHeader;
