import React, { useEffect, useState } from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from "../utils"
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo : heroVideo)
  useGSAP(()=>{
    gsap.to("#hero",{
      opacity:1,
      delay:1.5
    })

    gsap.to("#cta",{
      opacity:1,
      y:-50,
      delay:1.5
    })
  },[])

  const handleVideoSrcSet=()=>{
    if(window.innerWidth < 768){
      setVideoSrc(smallHeroVideo)
    }else{
      setVideoSrc(heroVideo)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', handleVideoSrcSet)
    return ()=> {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  },[])
  return (
    <section className='w-full nav-height bg-black relative'>
      <div className='h-5/6 w-full flex-center flex-col'>
        <p id='hero' className='hero-title'>iPhone 15 Pro</p>
        <div className='md:w-10/12 w-8/12'>
          <video autoPlay muted playsInline={true} key={videoSrc} className='pointer-events-none'>
            <source src={videoSrc} type='video/mp4'/>
          </video>
        </div>
      </div>
      <div id='cta' className='flex flex-col items-center translate-y-20 opacity-0'>
        <a href='#highlights' className='btn'>Buy</a>
        <p className='font-normal text-xl'>from $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
