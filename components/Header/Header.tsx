import { useState } from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import { Button } from "../Button/Button";
export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <header className="text-white body-font ">
      <div className="container mx-auto flex flex-wrap md:flex-row">
        <a
          className="flex title-font font-medium text-white self-center  "
          href="#/"
        >
          <Image
            src={logo}
            alt="Geek Code Planet"
            title="Geek Code Planet Logo"
          />
        </a>
        <button
          className="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <nav className="md:ml-auto flex space-x-4 flex-wrap items-center text-base justify-center font-semibold pl-7">
            <a
              className=" hover:bg-black px-4 py-2 rounded-lg text-black hover:text-white transition duration-500 ease-in-out"
              href="#"
            >
              Client Stories
            </a>
            <a
              className="hover:bg-black px-4 py-2 rounded-lg text-black hover:text-white transition duration-500 ease-in-out"
              href="/contact"
            >
              About
            </a>
            <Button
              onClick={() => console.log("button clicked")}
              background={"bg-gray-900 "}
              color={"text-white"}
              hover={"bg-cyan-900"}
              hoverText={""}
              extraClasses={"focus:outline-none focus:shadow-outline focus:text-white "}
            >
              Request Quote
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
