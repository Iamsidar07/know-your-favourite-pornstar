import React from "react";
import Info from "./Info";


const Pornstar = ({ pornstars }) => {
  
  return (
    <div className="max-w-6xl mx-auto bg-[#1e293b] rounded">
      <div className="grid p-3 gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {pornstars?.map((pornstar, i) => {
          return (
            <Info
              key={i}
              slug={pornstar.slug}
              url={pornstar.images[0].image}
              age={pornstar.age}
              name={pornstar.name}
              nationality={pornstar.nationality}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pornstar;
