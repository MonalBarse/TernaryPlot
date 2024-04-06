import { curve, hero, heroBackground, robot, BG } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);
  return (
    <>
      <Section
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
        id="hero"
      >
        <div className="container relative" ref={parallaxRef}>
          <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
            <h1 className="h1 mb-6">
              Tool to study a{" "}
              <span className="inline-block relative">
                ternary{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />{" "}
              </span>{" "}
              plot
            </h1>
            <p className="body-2 max-w-3xl mx-auto mb-2 text-n-3 lg:mb-2 text-left  ">
              {" "}
              Ternary plots are a useful tool for visualizing the composition of
              three-component systems.
            </p>
            <p className="body-2 max-w-3xl mx-auto mb-2 text-n-3 lg:mb-2 text-left  ">
              Compatibility triangles, a subset of ternary diagrams, focus on
              the mutual solubility of three components. They aid in
              understanding the compatibility of materials in various
              applications, such as alloy development and geological studies,
              facilitating the design and optimization of materials with desired
              properties.
            </p>
            <p
              className="
            mt-4 body-1 max-w-3xl mx-auto mb-6 text-n-1 lg:mb-8"
            >
              And our tool helps you study that
              <img
                src={curve}
                className="relative top-full left-60  w-72 xl:mt-1"
                width={624}
                height={28}
                alt="Curve"
              />{" "}
            </p>
            <Button href="/tool" white>
              Get started
            </Button>
            <div className="relative mt-20 max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
              <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                <div className="relative bg-n-8 rounded-[1rem]">
                  <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img
                      src={
                        "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                      width={1024}
                      height={490}
                      alt="AI"
                    />
                    <ScrollParallax isAbsolutelyPositioned>
                      <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        {heroIcons.map((icon, index) => (
                          <li className="p-5" key={index}>
                            <img src={icon} width={24} height={25} alt={icon} />
                          </li>
                        ))}
                      </ul>
                    </ScrollParallax>
                  </div>
                </div>
                <Gradient />
              </div>
              <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                <img
                  src={BG}
                  className="w-full"
                  width={1440}
                  height={1800}
                  alt="hero"
                />
              </div>
              <BackgroundCircles />
            </div>
          </div>
        </div>
        <BottomLine />
      </Section>
    </>
  );
};

export default Hero;
