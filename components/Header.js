import React from "react";

const Header = () => {

  return (
    <div className=" max-w-6xl overflow-hidden mx-auto h-96 flex-col bg-[#1e293b]  my-10   group   md:flex-row-reverse flex items-center  justify-between rounded">
      <div className="capitalize  h-96  text-white  flex flex-col items-center justify-start  w-full   group  space-y-2 p-5">
        <div className=" space-y-4 ">
          <h1 className="font-serif text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-green-600 text-3xl md:text-6xl font-extrabold  transition-colors duration-100 ease-in">
            Get pornstar&apos;s info
          </h1>
          <p className="md:text-2xl ">From the world means from <span className="text-4xl py-4 px-1  underline italic font-serif inline-block"> everywhere</span> </p>
          <p className=" text-3xl inline-block text-sky-500 bg-gray-700 md:text-6xl font-bold font-serif p-2 ">M <span>(●'◡'●)</span> </p>
          {/* <button className="mt-6 rounded  bg-[#334155]  hover:scale-105 transition-all duration-100 ease-in  hover:bg-[#334155eb] text-white  py-3 px-6  inline-flex items-center">
            get more
          </button> */}
        </div>
      </div>
      <div className="w-full overflow-auto object-contain">
        <img
          src="img/main.jpg"
          alt=""
          className="w-full bg-slate-100  h-full object-contain mt-96"
        />
      </div>
    </div>
  );
};

export default Header;
