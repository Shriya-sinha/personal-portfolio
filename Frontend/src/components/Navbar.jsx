import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
// shadow-[0_1px_100px_#015c5a]
  return (
    <>
      <nav className="text-xl backdrop-blur-md text-white flex lg:flex-row justify-end justify-items-center space-x-16 h-24">
        <div className="container mx-auto px-4 py-3 flex justify-between justify-items-center">
          <span className="text-4xl flex items-center font-caveat ">
            Shreya Sinha
          </span>
          <ul className="flex items-center space-x-16">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
            <div className="flex items-center flex-row space-x-4 " id="icons">
              <a href="https://github.com/Shriya-sinha" className="icon-git">
                <FaGithub size={25} />
              </a>
              <a href="https://instagram.com/shreya_ev14" className="icon-igm">
                <FaInstagram size={25} />
              </a>
              <a
                href="https://linkedin.com/in/shreya-sinha-22217b256"
                className="icon-ln"
              >
                <FaLinkedin size={25} />
              </a>
              <a href="https://twitter.com/shreya_sin72637" className="icon-x">
                <FaSquareXTwitter size={25} />
              </a>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar
