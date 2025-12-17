function SidebarHeader() {
  return (
    <header className="mt-32">
      <h1 className="text-[52px] sm:text-[58px] lg:text-[50px] font-extrabold text-shadow max-w-[436px] dark:text-stone-200 leading-16 text-shadow-stone-50 flush-text tracking-wide">
        <span className="bebas-neue-regular">Demitry Edwards</span>
      </h1>
      <div className="pt-3 flex flex-col max-w-[330px]">
        <span className="uppercase tracking-wider font-semibold text-shadow dark:text-[]"></span>
        <blockquote className="pb-5 tracking-widest dark:text-stone-200 leading-7 text-xs text-shadow-xl uppercase text-shadow-black">
          Blending art & technology.
        </blockquote>
      </div>
    </header>
  );
}

export default SidebarHeader;
