import '../../public/CoffeeArt.png'
import Navbar from '../components/Navbar';
const About = () => {
  return (
    <>
      <Navbar/>
      <div
        className="grid grid-flow-row grid-cols-2 mx-16 py-16 auto"
        id="about"
      >
        <div className="flex justify-items-center items-center mx-auto cards">
          <img
            src="CoffeeArt.png"
            alt=""
            className="w-[250px] h-[465px]  mx-20"
          />
        </div>
        <div className=" cards mr-10 ">
          <h1 className="text-6xl text-white font-caveat font-semibold">
            About Shreya
          </h1>
          <hr className="w-10 my-8 flex justify-items-start border-cyen" />
          <p className="uppercase text-base pb-5 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            corporis voluptas inventore at.
          </p>
          <p className="text-xl base whitespace-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            pariatur, explicabo rem reprehenderit possimus earum nulla modi
            atque eligendi velit placeat id et quaerat iusto non quos provident
          </p>
          <p className="text-xl base whitespace-normal pt-5">
            ipsum voluptates? Quisquam totam sapiente necessitatibus, cum minima
            ab iste blanditiis officiis nisi velit numquam sunt consectetur
            fugiat voluptatum esse rem. Aperiam nostrum ad, incidunt nemo nulla
            repellat unde veritatis ipsam ipsum. Odit sed voluptate,
          </p>
          <p className="text-xl base whitespace-normal pt-5">
            ipsum voluptates? Quisquam totam sapiente necessitatibus, cum minima
            ab iste blanditiis officiis nisi velit numquam sunt consectetur
            fugiat voluptatum esse rem. Aperiam nostrum ad, incidunt nemo nulla
            repellat unde veritatis ipsam ipsum. Odit sed voluptate,
          </p>
        </div>
      </div>
    </>
  );
}

export default About
