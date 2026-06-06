

import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "100px",
      stagger: {
        amount: 0.4,
      },

      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  const project = [
    {
      img1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      img2: 'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022',
    },
    {
      img1: 'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
      img2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      img2: 'https://k72.ca/images/caseStudies/Opto/thumbnailimage_opto.jpg?w=1280&h=960&s=938f0bfb3de1ff2a2846b884eec2d757'
    },
    {
      img1: 'https://k72.ca/images/caseStudies/PME-MTL/PME-MTL_Thumbnail.jpg?w=1280&h=960&s=49e3b251d0a28f1f8d40fd59517fc000',
      img2: 'https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93'  
    } 
  ];

  return (
    <div className='pt-4 bg-black'>
      <div className='pt-[45vh]'>
        <h2 className='font-[font1] text-[10vw] md:text-[8vw] sm:text-[12vw] uppercase text-white'>WORK</h2>
      </div>
      <div className='-mt-10 lol flex flex-col gap-4'>
        {project.map((elem, idx) => (
          <div key={idx} className="hero w-full h-[850px] md:h-[600px] sm:h-[500px] flex flex-col md:flex-row gap-4">
            <ProjectCard img1={elem.img1} img2={elem.img2} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;