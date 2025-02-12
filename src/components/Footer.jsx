import logoRMO from "../assets/FRMO.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center p-10 footer bg-neutral text-neutral-content lg:flex-row">
      <aside>
        <div className="flex justify-center w-full pr-3 lg:justify-start lg:w-[74rem]">
          <img src={logoRMO} alt="#" width={150} />
        </div>
        <div>
          <p className="pt-3 text-center lg:text-left">
            Regional Medical Olympiad 2024
            <br />
            Universitas Muhammadiyah Semarang (UNIMUS)
          </p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">For More information :</h6>
        <div className="text-center">
          <a
            className="text-white w-[2rem]"
            href="https://www.instagram.com/rmounimus2024?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <svg
              className="w-8 h-8 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
