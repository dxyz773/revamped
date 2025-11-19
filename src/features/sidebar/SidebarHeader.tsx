function SidebarHeader() {
  return (
    <header className="mt-32">
      <h1 className="text-[50px] sm:text-[53px] font-extrabold text-shadow max-w-[436px] dark:text-stone-200 uppercase leading-16 text-shadow-stone-50 flush-text">
        <span>
          Demitry <br></br>Edwards
        </span>
      </h1>
      <div className="pt-4 flex flex-col max-w-[330px]">
        <span className="uppercase tracking-wider font-semibold text-shadow dark:text-[]"></span>
        <blockquote className="pb-3 tracking-widest dark:text-stone-300 leading-7 text-sm text-shadow-xl uppercase text-shadow-black">
          Blending art & technology.
        </blockquote>
      </div>
    </header>
  );
}

export default SidebarHeader;
