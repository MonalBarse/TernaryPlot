import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="caption text-n-4 lg:block">
          <p> © Indian Institure of Technology (BHU).</p>{" "}
          <p className="ml-3">{new Date().getFullYear()}. </p>
        </div>

        <ul className="flex gap-6 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
