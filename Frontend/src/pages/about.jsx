import "../../public/CoffeeArt.png";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        className="grid grid-flow-row grid-cols-1 md:grid-cols-2 mx-4 md:mx-16 py-16"
        id="about"
      >
        <div className="flex justify-center items-center mx-auto cards my-10">
          <img
            src="CoffeeArt.png"
            alt="Coffee Art"
            className="w-[250px] h-[465px] md:w-[300px] md:h-[550px] mx-10"
          />
        </div>
        <div className="cards mr-4 md:mx-10">
          <h1 className="text-4xl md:text-6xl text-white font-caveat font-semibold">
            About Shreya
          </h1>
          <hr className="w-10 my-8 border-cyan-300" />
          <p className="text-base whitespace-normal">
            My coding odyssey began unexpectedly in 11th grade when my aversion
            to Hindi's complex "vowel diacritics" (matras) led me to choose
            Computer Science as my fifth subject. This decision opened the door
            to a fascinating new world, with Python as my first programming
            language. Alongside Python, I delved into MySQL, SQL queries, and
            operating systems, Computer Networks, Data structures laying a solid
            foundation in computer science fundamentals.
          </p>
          <p className="text-base whitespace-normal pt-5">
            Initially, pattern problems posed a challenge, but their intricacy
            only fueled my curiosity. Programming became my escape—a sci-fi
            realm where logic and creativity intertwined. Whenever the
            complexities of the real world overwhelmed me, I found solace in
            coding, each line of syntax offering a new adventure.
          </p>
          <p className="text-base whitespace-normal pt-5">
            This early passion ignited a fire that guided my career path towards
            Software Development. While I'm deeply intrigued by machine learning
            and its potential, my love for Python remains unwavering.
          </p>
          <p className="text-base whitespace-normal pt-5">
            Today, as I navigate the ever-expanding universe of technology, I
            carry with me the same sense of wonder that first drew me to
            programming. My journey from a Hindi-avoiding student to a dedicated
            software developer is a testament to the transformative power of
            finding one's true calling in the digital realm.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
