


import React from "react";

const ProjectCard = ({ img1, img2 }) => {
  return (
    <>
      <div className="w-1/2 sm:w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img className="project-img h-full w-full object-cover" src={img1} />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex top-0 left-0 items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-3xl md:text-2xl sm:text-xl font-[font-1] border-4 border-white pt-2 px-8 text-white rounded-full">
            view project
          </h2>
        </div>
      </div>
      <div className="w-1/2 sm:w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img className="project-img h-full w-full object-cover" src={img2} />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex top-0 left-0 items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-3xl md:text-2xl sm:text-xl font-[font-1] border-4 border-white pt-2 px-8 text-white rounded-full">
            view project
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
