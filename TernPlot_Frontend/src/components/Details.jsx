import React from "react";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import Heading from "./Heading";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benifits.jsx";
import ClipPath from "../assets/svg/ClipPath";

const Details = () => {
  const svgCode = `
  <svg preserveAspectRatio="none" width="384" height="356" viewBox="0 0 384 366" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2"/>
    <path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(#paint0_linear_333_9188)" stroke-opacity="0.85" stroke-width="2"/>
    <defs>
      <linearGradient id="paint0_linear_333_9188" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse">
        <stop stop-color="#33CEFF"/>
        <stop offset="0.562842" stop-color="#D633FF" stop-opacity="0"/>
      </linearGradient>
    </defs>
  </svg>
`;
  return (
    <Section id={"details"}>
      <div className="container  relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="What are ternary plots?"
        />
        <div className="flex flex-wrap  gap-20 mb-10 justify-center">
          {benefits.map((item) => (
            <div
              className="block w-full relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              key={item.id}
              style={{
                background: `url("data:image/svg+xml,${encodeURIComponent(
                  svgCode
                )}")`,
              }}
            >
              <div className="relative  z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-3 uppercase tracking-wider">
                    Learn more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
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

export default Details;
