import { lomba } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Lomba";
import ClipPath from "../assets/svg/ClipPath";
import Button from "./Button";

const Lomba = () => {
  return (
    <Section id="lomba">
      <div className="container">
        <Heading
          className="text-center text-black md:max-w-md lg:max-w-2xl"
          title="Olympiade"
          text="6 Cabang perlombaan RMO 2024"
        />

        <div className="flex flex-wrap justify-center gap-10 mb-10 lg:gap-20">
          {lomba.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[20rem] w-[20rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 text-black h5">{item.title}</h5>
                <p className="mb-5 leading-tight ">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={58}
                    height={58}
                    alt={item.title}
                  />
                  <a
                    className="ml-auto text-xs font-bold tracking-wider uppercase pointer-events-auto font-code text-n-2" href="#registration"
                  >
                      Register Now
                    
                  </a>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-[#E68369]"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-25">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Lomba;
