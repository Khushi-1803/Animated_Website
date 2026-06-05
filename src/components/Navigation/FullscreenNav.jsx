import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const FullScreenNav = () => {
  const fullNavLinkRef = useRef(null)
   useGSAP(() => {

  const tl = gsap.timeline()
  // stairs come in
  tl.from('.stairing', {
    height: 0,
    stagger: {
      amount: 0.2
    }
  })

  tl.from(fullNavLinkRef.current,{
    opacity:0
  })

  tl.from(".link",{
    rotateX:90
  })

})
  return (
    <div
      id="fullscreenav"
      className="hidden h-screen overflow-x-hidden w-full absolute bg-black text-white"
    >
      <div className="h-screen w-full fixed">
        <div className='h-full w-full flex'>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
        <div className='stairing h-full w-1/5 bg-black'></div>
      </div>
      </div>


      <div
  ref={fullNavLinkRef}
  className="relative h-screen flex flex-col"
>
        {/*upper part */}
      <div className="flex justify-between items-start">
        <div className="flex gap-5 items-start">
          <h1 className="text-[6vw] text-white leading-none m-0">K72</h1>

          <div className="uppercase text-white text-[2vw]">
            <p>
              en<span className="text-gray-500">/fr</span>
            </p>
          </div>
        </div>

        <div className="cross"></div>
      </div>

      {/* middle part */}
      <div id="all_links">
        <div className="relative link origin-top mt-3 link border-y-2 border-white">
          <h1 className="font-[font-2] text-[8vw] uppercase leading-[0.8] text-center text-white">
            Work
          </h1>
          <div className=" moveLink absolute text-black  flex top-0 bg-[#D3FD50] ">
            <div className="flex items-center  moveX">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                See Everything
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                See Everything
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
            <div className="flex items-center moveX ">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Pour Tout voir
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Pour Tout voir
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
          </div>
        </div>
        <div className="relative link  origin-top border-y-2 border-white">
          <h1 className="font-[font-2] text-[8vw] uppercase leading-[0.8] text-center text-white">
            Agency
          </h1>
          <div className=" moveLink absolute text-black  flex top-0 bg-[#D3FD50] ">
            <div className="flex items-center  moveX">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Know us
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Know us
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
            <div className="flex items-center moveX ">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Know us
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Know us
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
          </div>
        </div>
        <div className="relative link  origin-top border-y-2 border-white">
          <h1 className="font-[font-2] text-[8vw] uppercase leading-[0.8] text-center text-white">
            Contact
          </h1>
          <div className=" moveLink absolute text-black  flex top-0 bg-[#D3FD50] ">
            <div className="flex items-center  moveX">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Send us a fax
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Send us a fax
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
            <div className="flex items-center moveX ">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Send us a fax
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                Send us a fax
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
          </div>
        </div>
        <div className="relative link origin-top border-y-2 border-white">
          <h1 className="font-[font-2] text-[8vw] uppercase leading-[0.8] text-center text-white">
            Blog
          </h1>
          <div className=" moveLink absolute text-black  flex top-0 bg-[#D3FD50] ">
            <div className="flex items-center  moveX">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                read article
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                read article
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
            <div className="flex items-center moveX ">
              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                read article
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />

              <h2 className=" whitespace-nowrap font-[font-2] text-[8vw] uppercase leading-[0.8] text-center">
                read article
              </h2>
              <img
                className="h-16 w-60 shrink-0 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/057/068/323/small/single-fresh-red-strawberry-on-table-green-background-food-fruit-sweet-macro-juicy-plant-image-photo.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* lower part */}
      <div className="absolute bottom-8 left-0 w-full px-4 flex items-center justify-between text-white">
  
  {/* Left */}
  <div className="flex items-center gap-4">
    <span className="text-3xl">🌐</span>
    <div>
      <h2 className="text-2xl font-bold uppercase">
        MONTREAL_05:28:48
      </h2>
    </div>
  </div>

  {/* Center */}
  <div className="flex gap-8 uppercase text-sm font-semibold">
    <a href="#">Privacy Policy</a>
    <a href="#">Privacy Notice</a>
    <a href="#">Ethics Report</a>
    <a href="#">Consent Choices</a>
  </div>

  {/* Right */}
  <div className="flex gap-4">
    {["FB", "IG", "IN", "BE"].map((item) => (
      <div
        key={item}
        className="border-2 border-white rounded-full px-4 py-1 text-3xl leading-none"
      >
        {item}
      </div>
    ))}
  </div>

      </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
