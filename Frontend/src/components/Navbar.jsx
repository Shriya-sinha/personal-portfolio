import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="text-xl backdrop-blur-md text-white flex lg:flex-row justify-end justify-items-center space-x-16 h-24">
        <div className="container mx-auto px-4 py-3 flex justify-between justify-items-center">
          <span className="text-4xl flex items-center font-caveat ">
            Shreya Sinha
          </span>
          <button
            className="lg:hidden flex flex-col justify-center items-center w-8 h-8 bg-zinc-900 rounded-full shadow-md hover:shadow-lg"
            onClick={handleToggle}
            aria-label="Toggle navigation"
          >
            <div
              className={`h-1 w-8 bg-white rounded-full transition duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-" : "translate-y-0"
              }`}
            />
            <div
              className={`h-1 w-8 my-1 bg-white rounded-full transition duration-300 ease-in-out ${
                isOpen ? "hidden" : "block"
              }`}
            />
            <div
              className={`h-1 w-8 bg-white rounded-full transition duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0"
              }`}
            />
          </button>
          <ul
            className={`flex flex-col lg:flex-row items-center lg:space-x-14 ${
              isOpen ? "flex" : "hidden lg:flex"
            }`}
          >
            <li>
              <a href="/" className="md:text-lg sm:text-base" aria-label="Home">
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="md:text-lg sm:text-base"
                aria-label="About"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className="md:text-lg sm:text-base"
                aria-label="Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="md:text-lg sm:text-base"
                aria-label="Contact"
              >
                Contact
              </a>
            </li>
            <div className="flex flex-row space-x-3">
              <li>
                <a href="https://github.com/Shriya-sinha" className="icon-git">
                  <FaGithub size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/shreya_ev14"
                  className="icon-igm"
                >
                  <FaInstagram size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/shreya-sinha-22217b256"
                  className="icon-ln"
                >
                  <FaLinkedin size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/shreya_sin72637"
                  className="icon-x"
                >
                  <FaSquareXTwitter size={25} />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
