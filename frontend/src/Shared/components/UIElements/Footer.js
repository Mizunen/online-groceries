const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full text-center bg-green text-white p-[1rem] fixed bottom-0 z-10">
      <p>InstaPantry &copy; {currentYear} </p>
    </footer>
  );
};

export default Footer;
