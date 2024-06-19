
const Projects = () => {
  return (
    <>
      <h1
        className="flex justify-center text-6xl text-white font-caveat py-4 font-semibold"
        id="projects"
      >
        Projects
      </h1>
      <hr className="flex justify-items-center mx-auto border-cyen w-10 my-4" />
      <div className="grid grid-flow-col grid-cols-3 gap-14 mx-36 py-16 auto my-8">
        <div className="flex justify-items-center items-center mx-auto cards">
          <div className="grid grid-flow-row">
            <img src="../../public/Screenshot 2024-05-27 171430.png"></img>
            <p className="pt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
              incidunt, rerum voluptas, hic magnam provident laboriosam sed
              repudiandae impedit quam possimus velit error est omnis totam
              officia non ipsum!
            </p>
            <div className="float-left mt-5">
              <button className="px-4 py-1 text-sm text-cyen font-semibold rounded-full border border-cyan-200 hover:text-white hover:bg-cyen hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyen focus:ring-offset-2 dark:ring-offset-zinc-800">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-items-center items-center mx-auto cards">
          <div className="grid grid-flow-row">
            <img src="../../public/Screenshot 2024-05-27 171430.png"></img>
            <p className="pt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
              incidunt, rerum voluptas, hic magnam provident laboriosam sed
              repudiandae impedit quam possimus velit error est omnis totam
              officia non ipsum!
            </p>
            <div className="float-left mt-5">
              <button className="px-4 py-1 text-sm text-cyen font-semibold rounded-full border border-cyan-200 hover:text-white hover:bg-cyen hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyen focus:ring-offset-2 dark:ring-offset-zinc-800">
                Details
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-items-center items-center mx-auto cards">
          <div className="grid grid-flow-row">
            <img src="../../public/Screenshot 2024-05-27 171430.png"></img>
            <p className="pt-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum eos
              incidunt, rerum voluptas, hic magnam provident laboriosam sed
              repudiandae impedit quam possimus velit error est omnis totam
              officia non ipsum!
            </p>
            <div className="float-left mt-5">
              <button className="px-4 py-1 text-sm text-cyen font-semibold rounded-full border border-cyan-200 hover:text-white hover:bg-cyen hover:border-transparent focus:outline-none focus:ring-2 focus:ring-cyen focus:ring-offset-2 dark:ring-offset-zinc-800">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects

