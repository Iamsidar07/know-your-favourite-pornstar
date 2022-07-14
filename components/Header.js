import React from "react";

const Header = () => {
  return (
    <div className="mb-2 p-2 md:justify-center md:max-w-6xl overflow-hidden mx-auto md:h-96 flex-col group md:flex-row-reverse md:flex md:items-center  justify-between rounded">
      <div className=" text-left capitalize  md:h-96  text-white  flex flex-col md:items-center justify-center md:justify-start  w-full rounded-md  group  space-y-2 p-5">
        <div className=" md:space-y-4 ">
          <h1 className=" text-transparent  bg-clip-text bg-gradient-to-r from-purple-700 to-green-600 text-3xl md:text-6xl font-bold  transition-colors duration-100 ease-in">
            Get pornstar&apos;s info
          </h1>
          <p className=" md:text-2xl ">
            From the world means from 
            <span className="pt-3 px-2 md:pt-4 underline inline-block">
              {" "}
              everywhere
            </span>{" "}
          <p className="font-serif  text-2xl inline-block text-sky-500 md:text-6xl font-semibold  py-1 ">
            M <span>(●&apos;◡&apos;●)</span>{" "}
          </p>
          </p>
        </div>
      </div>
      <div className="hidden md:block w-full overflow-auto object-cover">
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
