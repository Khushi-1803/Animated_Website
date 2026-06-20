
import React from "react";
import Video from "./Video";

const HomeTop = () => {
  return (
    <div className="font-[font-1] pt-5 text-center">
      <div className="text-[9.5vw] md:text-[7vw] sm:text-[10vw] justify-center flex text-center leading-[8.5vw] md:leading-[6vw] sm:leading-[9vw]">
        THE SPARK FOR
      </div>
      <div className="text-[9.5vw] md:text-[7vw] sm:text-[10vw] justify-center flex text-center leading-[8.5vw] md:leading-[6vw] sm:leading-[9vw]">
        ALL{" "}
        <div className="h-[7vw] w-[10vw] md:h-[5vw] md:w-[7vw] sm:h-[8vw] sm:w-[11vw] rounded-full mt-5 overflow-hidden inline-block">
          <Video />
        </div>{" "}
        THINGS
      </div>
 {/* CREATIVE with wide oval */}
      <div className="relative flex justify-center items-center">
  <h1 className="text-[9.5vw] leading-[8.5vw] relative z-10">
    CREATIVE
  </h1>

  <svg
    className="absolute w-[55vw] h-[12vw] rotate-[-4deg]"
    viewBox="0 0 600 120"
  >
    <ellipse
      cx="300"
      cy="60"
      rx="280"
      ry="45"
      fill="none"
      stroke="#D3FD50"
      strokeWidth="2"
    />
  </svg>
</div>
      
      <div className="w-96 h-96 ml-[70vw] mt-30">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae laborum ullam laudantium, ad libero dolorum quidem autem quia veritatis quos, accusamus enim odio provident neque recusandae quasi, voluptatem assumenda soluta! Accusamus laborum quasi, tempore mollitia deserunt dicta! Officia fugiat facere consequuntur suscipit nesciunt culpa repellat sint quae dolore earum expedita, debitis perspiciatis nihil unde pariatur, a maiores sit nostrum rem. Laudantium, quaerat soluta ducimus architecto sed facere fugiat.</p>
      </div>
    </div>
  );
};

export default HomeTop;