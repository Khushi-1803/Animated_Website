import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useRef, React } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7",
    "https://k72.ca/images/teamMembers/Olivier_480x640.jpg?w=480&h=640&fit=crop&s=c13569c0753117d04f1a93cf7b446d64",
    "https://k72.ca/images/teamMembers/ChantalG_480x640.jpg?w=480&h=640&fit=crop&s=13093769c4a19cecd291ddcccd898991",
    "https://k72.ca/images/teamMembers/Michele_480X640.jpg?w=480&h=640&fit=crop&s=ce85dc6d140947736baa739d0e59dab2",
    "https://k72.ca/images/teamMembers/MEL_480X640.jpg?w=480&h=640&fit=crop&s=07c9bfee89816720b873e6748a276af6",
    "https://k72.ca/images/teamMembers/CAMILLE_480X640_2.jpg?w=480&h=640&fit=crop&s=74317575b2d72fd11c5296615c383e4a",
    "https://k72.ca/images/teamMembers/MEGGIE_480X640_2.jpg?w=480&h=640&fit=crop&s=3604b19f8fc7b40f517954147698d847",
    "https://k72.ca/images/teamMembers/joel_480X640_3.jpg?w=480&h=640&fit=crop&s=1cadbf143b3aa916b1b414464acbb4d6",
  ];

  // useGSAP(function () {
  //   gsap.to(imageDivRef.current, {
  //     scrollTrigger: {
  //       trigger: imageDivRef.current,
  //       markers: true,
  //       start: "top 29%",
  //       end: "top -100%",
  //       scrub: true,
  //       pin: true,
  //       onUpdate: (elem) => {
  //         let imageIndex;
  //         if(elem.progress){
  //           const imageIndex = Math.floor(elem.progress * imageArray.length);
  //         }
  //         else{
  //           imageIndex = imageArray.length-1
  //         }
  //         imageRef.current.src = imageArray[imageIndex];
  //       },
  //     },
  //   });
  // });
  
  useGSAP(() => {
  gsap.to(imageDivRef.current, {
    scrollTrigger: {
  trigger: imageDivRef.current,
  markers: true,
  start: 'top 28%',
  end: 'top -70%',
  pin: true,
  pinSpacing: true,
  pinReparent: true,
  pinType: 'transform',
  scrub: 1, // smooth scrubbing with 1s easing
  anticipatePin: 1,
  invalidateOnRefresh: true,
},
  });
}, []);
  
  
  return (
    <div>
      <div className="section-1 relative py-1">
        <div
          ref={imageDivRef}
          className="h-[20vw] w-[15vw] rounded-3xl overflow-hidden absolute top-64 left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full w-full object-cover"
            src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7"
          />
        </div>
        <div className="font-[font2] relative">
          <div className="mt-[65vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[17vw]">
              Seven7y <br /> two
            </h1>
          </div>
          <div className="pl-[40%]">
            <p className="text-5xl mt-5">
              &emsp;&emsp;&emsp;&emsp;We’re inquisitive and open-minded, and we
              make sure creativity crowds out ego from every corner. A brand is
              a living thing, with values, a personality and a story. If we
              ignore that, we can achieve short-term success, but not influence
              that goes the distance. We bring that perspective to every brand
              story we help tell.
            </p>
          </div>
        </div>
      </div>
      <div className="section-2 h-screen"></div>
    </div>
  );
};

export default Agence;
