import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import { logo1, logo2, logo3, logo4 } from "../assets"

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="mb-6 h1 text-n-2 font-outline-n-1 lg:text-[50px]">
            Regional&nbsp;Medical Olympiad 2024
          </h1>
          <p className="max-w-3xl mx-auto mb-6 body-1 text-n-2 lg:mb-8">
            “Push Your Limit, Keep Studied <br /> for Community Medicine Orientied
            (PULMO)”
          </p>
          <Button href="#about" white>
            About Us
          </Button>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-10">
          <div className="relative z-1 p-0.5 rounded-2xl">
            <div className="relative bg-n-1 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-2 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="AI"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                      <li className="flex gap-3 p-5">
                        <img src={logo1} width={55} height={50} />
                        <img src={logo4} width={130} height={50} />
                        <img src={logo2} width={60} height={70} />
                        <img src={logo3} width={60} height={60} />
                        
                      </li>
                  </ul>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={heroBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>
        </div>

        <CompanyLogos className="relative z-10 hidden lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
