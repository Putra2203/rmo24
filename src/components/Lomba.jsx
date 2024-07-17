import { lomba } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Lomba";
import ClipPath from "../assets/svg/ClipPath";

const Lomba = () => {
  return (
    <Section id="lomba" crosses>
      <div className="container relative z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Olympiade"
          text="6 Cabang perlombaan RMO 24"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {lomba.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 h5 text-n-9">{item.title}</h5>
                <p className="mb-6 body-2 text-n-2">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto text-xs font-bold tracking-wider uppercase font-code text-n-2">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-[#FEAE6F]"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-15">
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
