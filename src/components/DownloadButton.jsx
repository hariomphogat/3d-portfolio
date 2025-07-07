const DownloadButton = () => {
  return (
    <a
      href="/hariom_resume.pdf"
      download="hariom_resume.pdf"
      rel="noopener noreferrer"
      className="h-12 w-72 lg:h-18 lg:w-72 btn-base btn-gradient-dark btn-shadow-inner btn-hover-glow btn-active-glow text-white text-xl lg:text-2xl font-sans flex items-center justify-center"
    >
      <img
        src="/images/arrows-down.webp"
        alt="download icon"
        className="inline-block mr-2 h-6 w-6"
      />
      Download Resume
    </a>
  );
};

export default DownloadButton;
