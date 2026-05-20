import React from "react";
import Video from "./video";

const HomeTop = () => {
  return (
    <div className="font-[font-1] pt-5 text-center">
      <div className="text-[9.5vw] justify-center flex text-center leading-[8.5vw]">THE SPARK OF</div>
      <div className="text-[9.5vw] justify-center flex text-center leading-[8.5vw]">
        ALL{" "}
        <div className="h-[7vw] w-[10vw] rounded-full -mt-15 overflow-hidden">
          <Video />
        </div>{" "}
        THINGS
      </div>
      <div className="text-[9.5vw] justify-center flex text-center leading-[8.5vw]">CREATIVE</div>
    </div>
  );
};

export default HomeTop;
