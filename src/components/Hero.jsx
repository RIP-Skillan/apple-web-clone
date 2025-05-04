import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useState } from 'react';


const Hero = () => {
  const [videosrc, setVideosrc] = useState(window.innerWidth > 760 ? heroVideo : smallHeroVideo)

  useGSAP(() => {
    gsap.to('#hero',{opacity:1, delay:1.5})
  }, [], )

  return (
    <section className='w-full bg-black nav-height relative'>
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video autoPlay muted playsInline={true} key={videosrc}>
            <source src={videosrc} type='video/mp4'></source>
          </video>

        </div>
      </div>
    </section>
  )
}

export default Hero