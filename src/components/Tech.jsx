import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-4'>
      {technologies.map((technology) => (
        <div
          className='rounded-full border border-[#3f3a66] bg-tertiary px-5 py-3 text-white text-[15px] font-medium shadow-card'
          key={technology.name}
        >
          {technology.name}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
