import Section from "./Section";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { regist1, regist2, regist3, closedRegist } from "../assets";

const Registration = () => {
  const [form1Status, setForm1Status] = useState({
    isOpen: false,
    statusMessage: "",
    countdown: "",
  });
  const [form2Status, setForm2Status] = useState({
    isOpen: false,
    statusMessage: "",
    countdown: "",
    extended: false,
  });
  const [form3Status, setForm3Status] = useState({
    isOpen: false,
    statusMessage: "",
    countdown: "",
  });

  useEffect(() => {
    const updateFormStatus = (openDate, closeDate, setStatus, extendDate) => {
      const currentDate = new Date();
      let countdownMessage = "";
      let extended = false;

      if (currentDate < openDate) {
        countdownMessage = getTimeRemaining(openDate);
        setStatus({
          isOpen: false,
          statusMessage: "Pendaftaran belum dibuka.",
          countdown: countdownMessage,
        });
      } else if (currentDate >= openDate && currentDate <= closeDate) {
        countdownMessage = getTimeRemaining(closeDate);
        extended = currentDate > extendDate;
        setStatus({
          isOpen: true,
          statusMessage: "Pendaftaran sedang dibuka.",
          countdown: countdownMessage,
          extended,
        });
      } else {
        setStatus({
          isOpen: false,
          statusMessage: "Pendaftaran telah ditutup.",
          countdown: "0d 00h 00m 0s",
          extended: false,
        });
      }
    };

    // Tanggal pendaftaran yang disesuaikan
    const form1OpenDate = new Date("2024-07-27T00:00:00");
    const form1CloseDate = new Date("2024-08-04T23:59:59");
    const form2OpenDate = new Date("2024-08-05T00:00:00");
    const form2CloseDate = new Date("2024-08-28T23:59:59");
    const extendDate = new Date("2024-08-21T00:00:00");
    const form3OpenDate = new Date("2024-09-26T00:00:00");
    const form3CloseDate = new Date("2024-10-02T23:59:59");

    updateFormStatus(form1OpenDate, form1CloseDate, setForm1Status);
    updateFormStatus(form2OpenDate, form2CloseDate, setForm2Status, extendDate);
    updateFormStatus(form3OpenDate, form3CloseDate, setForm3Status);

    const timer = setInterval(() => {
      updateFormStatus(form1OpenDate, form1CloseDate, setForm1Status);
      updateFormStatus(
        form2OpenDate,
        form2CloseDate,
        setForm2Status,
        extendDate
      );
      updateFormStatus(form3OpenDate, form3CloseDate, setForm3Status);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeRemaining = (endTime) => {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <Section id="registration" crosses>
      <div className="container">
        <Heading
          title="Registrasi RMO24."
          text="Push Your Limit, Keep Studied for Community Medicine Orientied"
          className="flex-col items-center justify-center mb-6 text-center text-n-2"
        />
      </div>

      <div className="flex flex-wrap justify-center w-5/6 gap-8 mx-auto m-11 group">
        <div className="shadow-xl lg:cursor-pointer card bg-[#FCF8F3] w-96 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:duration-500">
          {form1Status.isOpen ? (
            <>
              <figure>
                <img src={regist1} alt="Early Registration" />
              </figure>
              <p className="flex justify-center p-2 bg-n-3 font-code">
                {form1Status.countdown}
              </p>
              <div className="pt-4 card-body">
                <h2 className="text-center card-title">Early Regist</h2>
                <p>
                  Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024.
                </p>
                <div className="flex flex-col items-end justify-center pt-5 card-actions">
                  <div className="">
                    <a
                      href="https://forms.gle/NZ9f9gJgCuUmUZ7g9"
                      className="text-white btn bg-n-3 hover:bg-[#EF5A6F]"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <figure>
                <img src={closedRegist} alt="Registration Closed" />
              </figure>
              <div className="card-body">
                <h2 className="text-center card-title">Early Regist</h2>
                <p>
                  Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024
                </p>
                <div className="justify-end pt-5 card-actions">
                  <a
                    href="https://forms.gle/NZ9f9gJgCuUmUZ7g9"
                    className="text-white btn bg-n-3 hover:bg-[#EF5A6F]"
                  >
                    closed
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="shadow-xl lg:cursor-pointer card bg-[#FCF8F3] w-96 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:duration-500">
          {form2Status.isOpen ? (
            <>
              <figure>
                <img src={regist2} alt="Semifinal & Final Registration" />
              </figure>
              <p className="flex justify-center p-2 bg-n-3 font-code">
                {form2Status.countdown}
              </p>
              <div className="pt-4 card-body">
                <h2 className="text-center card-title">
                  Late Regist {form2Status.extended ? "(Extended)" : ""}
                </h2>
                <p>
                  Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024.
                </p>
                <div className="flex flex-col items-end justify-center pt-5 card-actions">
                  <div className="">
                    <a
                      href="https://forms.gle/NZ9f9gJgCuUmUZ7g9"
                      className="text-white btn bg-n-3 hover:bg-[#EF5A6F]"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <figure>
                <img src={closedRegist} alt="Registration Closed" />
              </figure>
              <div className="card-body">
                <h2 className="text-center card-title">
                  Late Regist {form2Status.extended ? "(Extended)" : ""}
                </h2>
                <p>
                  Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024
                </p>
                <div className="justify-end pt-5 card-actions">
                  <a
                    href="https://forms.gle/NZ9f9gJgCuUmUZ7g9"
                    className="text-white btn bg-n-3 hover:bg-[#EF5A6F]"
                  >
                    closed
                  </a>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="shadow-xl lg:cursor-pointer card bg-[#FCF8F3] w-96 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:duration-500">
          {form3Status.isOpen ? (
            <>
              <figure>
                <img src={regist3} alt="Semifinal & Final Registration" />
              </figure>
              <p className="flex justify-center p-2 bg-n-3 font-code">
                {form3Status.countdown}
              </p>
              <div className="pt-4 card-body">
                <h2 className="text-center card-title">
                  Semifinal & Final Regist
                </h2>
                <p>
                  Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024.
                </p>
                <div className="flex flex-col items-end justify-center pt-5 card-actions">
                  <div className="">
                    <a
                      href="https://forms.gle/NZ9f9gJgCuUmUZ7g9"
                      className="text-white btn bg-n-3 hover:bg-[#EF5A6F]"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <figure>
                <img src={closedRegist} alt="Registration Closed" />
              </figure>
              <div className="card-body">
                <h2 className="text-center card-title">
                  Semifinal & Final Regist
                </h2>
                <p>
                  Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024
                </p>
                <div className="justify-end pt-5 card-actions">
                  <a
                    href="https://forms.gle/NZ9f9gJgCuUmUZ7g9"
                    className="text-white btn bg-n-3 hover:bg-[#EF5A6F]"
                  >
                    closed
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Registration;
