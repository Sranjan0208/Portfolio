const Contact = () => {
  return (
    <section className="h-screen" id="contact">
      <div className="h-[10%] flex flex-col justify-center items-center pt-20 mt-10 ">
        <h2 className="text-gray-600 text-base sm:text-lg  left-[-15%] relative">
          {"<h4>"}
        </h2>
        <h1 className="text-4xl sm:text-8xl text-white font-bold">Contact</h1>
        <h2 className="text-gray-600 text-base sm:text-lg  left-[15%] relative">
          {"</h4>"}
        </h2>
      </div>
      <div className="sm:flex sm:flex-row justify-center items-center h-[90%]">
        <a
          href="https://www.linkedin.com/in/sujal-ranjan-0073401b3/"
          className="sm:w-[16%] sm:h-[35%] w-44 h-44 rounded-full border-2 border-[#05ce90] flex items-center justify-center my-44 mx-auto cursor-pointer hover:bg-[#061d1c] text-white hover:text-green-500"
        >
          <div className="flex flex-col justify-center items-center ">
            <span className=" font-bold text-lg">{"< >"} </span>
            <span className=" font-bold text-lg">LinkedIn</span>
            <span className=" font-bold text-lg">{"</>"}</span>
          </div>
        </a>
        <a
          href="https://twitter.com/SujalRa81842273"
          className="sm:w-[16%] sm:h-[35%] w-44 h-44 rounded-full border-2 border-[#05ce90] flex items-center justify-center my-44 mx-auto cursor-pointer hover:bg-[#061d1c] text-white hover:text-green-500"
        >
          <div className="flex flex-col justify-center items-center">
            <span className=" font-bold text-lg">{"< >"} </span>
            <span className=" font-bold text-lg">Twitter</span>
            <span className=" font-bold text-lg">{"</>"}</span>
          </div>
        </a>
        <a
          href="https://hellodevs.hashnode.dev/"
          className="sm:w-[16%] sm:h-[35%] w-44 h-44 rounded-full border-2 border-[#05ce90] flex items-center justify-center my-44 mx-auto cursor-pointer hover:bg-[#061d1c] text-white hover:text-green-500"
        >
          <div className="flex flex-col justify-center items-center">
            <span className="font-bold text-lg">{"< >"} </span>
            <span className="font-bold text-lg">Blog</span>
            <span className="font-bold text-lg">{"</>"}</span>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
