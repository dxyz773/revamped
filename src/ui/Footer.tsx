function Footer() {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <p className="text-sm text-end pb-3 pt-10 dark:text-neutral-300 tracking-wider">&copy;
      {` ${currentYear}, Demitry Edwards`}
    </p>
  );
}

export default Footer;
