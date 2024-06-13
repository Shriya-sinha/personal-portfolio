import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {

  return (
    <>
      <nav className="text-xl text-white flex lg:flex-row justify-end items-center space-x-16">
        <div className="container pt-10 mx-auto px-4 py-3 flex justify-between items-center">
          <h3 className="justify-self-start font-sans">Shreya Sinha</h3>
          <ul className="flex space-x-16">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
            <div className="flex items-center flex-row space-x-6 " id="icons">
              <a
                href="https://github.com/Shriya-sinha"
                className="icon-git hover:text-[#00fff2b6]"
              >
                <FaGithub size={25} />
              </a>
              <a
                href="https://instagram.com/shreya_ev14"
                className="icon-igm hover:text-[#00fff2b6]"
              >
                <FaInstagram size={25} />
              </a>
              <a
                href="https://linkedin.com/in/shreya-sinha-22217b256"
                className="icon-ln hover:text-[#00fff2b6]"
              >
                <FaLinkedin size={25} />
              </a>
              <a
                href="https://twitter.com/shreya_sin72637"
                className="icon-x hover:text-[#00fff2b6]"
              >
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
