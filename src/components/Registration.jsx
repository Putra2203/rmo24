import Section from "./Section";
import Heading from "./Heading";
import { regist1, regist2, regist3, closedRegist } from "../assets";

const Registration = () => {
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
        <div className="shadow-xl lg:cursor-pointer card bg-base-100 w-96 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:duration-500">
          <figure>
            <img
              src={regist1}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center card-title">Early Regist</h2>
            <p>Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024</p>
            <div className="justify-end pt-5 card-actions">
              <button className="text-white btn bg-n-3 hover:bg-[#EF5A6F]">
                <a href="https://forms.gle/NZ9f9gJgCuUmUZ7g9">Register Now</a>
              </button>
            </div>
          </div>
        </div>
        
        <div className="shadow-xl lg:cursor-pointer card bg-base-100 w-96 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:duration-500">
          <figure>
            <img
              src={closedRegist}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center card-title">Late Regist</h2>
            <p>Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024</p>
            <div className="justify-end pt-5 card-actions">
              <button className="text-white pointer-events-none btn bg-n-3">
                <a href="https://www.youtube.com/">Register Now</a>
              </button>
            </div>
          </div>
        </div>

        <div className="shadow-xl lg:cursor-pointer card bg-base-100 w-96 lg:group-hover:blur-sm lg:hover:!blur-none lg:group-hover:scale-[0.85] lg:hover:!scale-100 lg:duration-500">
          <figure>
            <img
              src={closedRegist}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-center card-title">Semifinal & Final Regist</h2>
            <p>Daftarkan tim Anda sekarang di Regional Medical Olympiad 2024</p>
            <div className="justify-end pt-5 card-actions">
              <button className="text-white pointer-events-none btn bg-n-3">
                <a href="https://www.youtube.com/">Register Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Registration;
