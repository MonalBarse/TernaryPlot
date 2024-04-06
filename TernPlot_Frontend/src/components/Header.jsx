import React from "react";
import { brainwave } from "../assets";
import Button from "./Button";
import { navigation } from "../constants/index";
import { useLocation } from "react-router-dom";

const Header = () => {
  const pathname = useLocation();
  const handleClick = (e) => {
    /*   e.preventDefault();
    const target = e.target.getAttribute("href");
    const element = document.querySelector(target);
    const offset = window.innerWidth > 1024 ? 0 : 80;
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: "smooth" }); */
  };

  return (
    <div className="fixed w-full left-0 top-0 z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className=" flex  ml-6 w-[3rem] xl:mr-8" Sshref="#hero">
          <img src={brainwave} className="align" alt="Ternary Plot" />
          <div className="font-bold text-[1.3rem] ml-2">Tern Plot</div>
        </a>

        <nav
          className={`hidden fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={`${item.url}`}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                }
                px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold
                ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12
                `}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>
        <Button className={`hidden lg:flex`} href="#login">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
