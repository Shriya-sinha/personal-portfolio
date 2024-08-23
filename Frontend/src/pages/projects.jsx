import Navbar from "../components/Navbar";

const Projects = () => {
  return (
    <>
      <Navbar />
      <h1
        className="flex justify-center text-6xl text-white font-caveat py-4 font-semibold"
        id="projects"
      >
        Projects
      </h1>
      <hr className="flex justify-items-center mx-auto border-cyan w-10 my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mx-4 sm:mx-10 lg:mx-36 py-16 auto my-8">
        <div className="flex justify-center items-center mx-auto cards">
          <div className="grid grid-flow-row">
            <img
              src="../../public/Screenshot 2024-08-23 213916.png"
              alt="Headline Hives"
              className="w-full h-auto"
            />

            <div className="flex flex-row justify-between mt-5">
              <p className="text-xl font-semibold text-cyen">Headline Hives</p>
              <div className="flex items-center">
                <div className="px-4 py-1 text-xs text-fuchsia-700 font-semibold rounded-full border border-fuchsia-700 focus:outline-none dark:ring-offset-zinc-800 bg-fuchsia-700 bg-opacity-10">
                  Personal
                </div>
              </div>
            </div>

            <p className="pt-2">
              A news app that fetches and displays articles from multiple
              sources, offering users a seamless reading experience. Implemented
              news aggregation using News API to fetch articles from sources
              like BBC News, CNN, Fox News, The Guardian, and many others.
            </p>
            <div className="float-left mt-5">
              <button className="btn">
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto cards">
          <div className="grid grid-flow-row">
            <img
              src="../../public/Screenshot 2024-08-23 213348.png"
              alt="LFX Mentorship Metrics"
              className="w-full h-auto"
            />
            <div className="flex flex-row justify-between mt-5">
              <p className="text-xl font-semibold text-cyen">
                LFX Mentorship Metrics
              </p>
              <div className="flex items-center">
                <div className="px-4 py-1 text-xs text-fuchsia-700 font-semibold rounded-full border border-fuchsia-700 focus:outline-none dark:ring-offset-zinc-800 bg-fuchsia-700 bg-opacity-10">
                  Team
                </div>
              </div>
            </div>

            <p className="pt-2">
              A website that scraped data from LFX sites. The purpose of this
              website was to aggregate and filter the data from the LFX program,
              making it easier for users to find and apply for relevant
              mentorship opportunities.
            </p>
            <div className="float-left mt-5">
              <button className="btn">
                Details
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto cards">
          <div className="grid grid-flow-row">
            <img
              src="../../public/Screenshot 2024-08-23 214145.png"
              alt="Personal Portfolio"
              className="w-full h-auto"
            />
            <div className="flex flex-row justify-between mt-5">
              <p className="text-xl font-semibold text-cyen">
                Personal Portfolio
              </p>
              <div className="flex items-center">
                <div className="px-4 py-1 text-xs text-fuchsia-700 font-semibold rounded-full border border-fuchsia-700 focus:outline-none dark:ring-offset-zinc-800 bg-fuchsia-700 bg-opacity-10">
                  Personal
                </div>
              </div>
            </div>
            <p className="pt-2">
              A portfolio website that showcases my projects, provides
              information about myself, and offers a way for visitors to get in
              touch with me. The website is built using React, Vite, and
              Tailwind CSS, providing a modern, responsive, and visually
              appealing user experience.
            </p>
            <div className="float-left mt-5">
              <button className="btn">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
