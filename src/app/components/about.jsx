import React from "react";

const about = () => {
  return (
   
    <div className="p-10 mx-20 flex flex-col items-center">
      <div className="max-w-2xl">
        <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-4xl text-orange-500">
          About
        </h2>
      </div>
      <div className="mt-6 max-w-3xl text-xl text-neutral-600">
          <p>We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.</p>
      </div>
    </div>

    
  );
};

export default about;
