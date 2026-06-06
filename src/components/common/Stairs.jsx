import {React,useRef} from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { useLocation } from 'react-router-dom';





const Stairs = (props) => {
    const stairParent = useRef(null)
    const currentPath = useLocation().pathname
    const pageRef = useRef(null)


    useGSAP(() => {

  const tl = gsap.timeline()

  // hide page initially
  gsap.set(pageRef.current, {
    opacity: 0
  })

  // show stairs
  tl.set(stairParent.current, {
    display: 'block'
  })

  // stairs come in
  tl.from('.stair', {
    height: 0,
    stagger: {
      amount: -0.25
    }
  })

  // reveal page BEFORE stairs go away
  tl.to(pageRef.current, {
    opacity: 1,
    duration: 0.2
  })

  // stairs move down
  tl.to('.stair', {
    y: '100%',
    stagger: {
      amount: -0.25
    }
  })

  // hide overlay
  tl.set(stairParent.current, {
    display: 'none'
  })

  // reset stairs for next transition
  tl.set('.stair', {
    y: '0%'
  })

}, [currentPath])
  return (
     <div>
        <div ref={stairParent} className='h-screen w-full fixed z-20 top-0'>
        <div className='h-full w-full flex'>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
        <div className='stair h-full w-1/5 bg-black'></div>
      </div>
      </div>
     <div ref={pageRef}>
         {props.children}
     </div>
     </div>
  )
}

export default Stairs

