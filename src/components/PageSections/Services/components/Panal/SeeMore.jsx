import React from 'react'
import Videoimg from '../Panal/Videoimg'
import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';




const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(90px);
    transform: translateY(90px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const SeeMore = () => {
  const Videoyt = 'https://www.youtube.com/watch?v=fOW8Y09GVek';


  return (
    <Reveal effect="fadeInUp" duration={1000} delay={500}>
      <div className="flex flex-col xl:flex-row xl:flex-wrap xl:w-[80%] m-20 w-full h-42 justify-center items-center bg-white rounded-3xl shadow-2xl overflow-hidden mx-auto text-center">
        <div className="w-full xl:w-1/2 px-4 py-6 order-last xl:order-none">
          <Videoimg />
        </div>
        <div className="w-full xl:w-1/2 p-2">
          <h2 className='text-xl md:text-2xl xl:text-4xl m-2 xl:m-8 text-center'>¿QUIÉRES VER MÁS?</h2>
          <span className="my-2 text-2x1">MIRA EL DEMO EN NUESTRA PLATAFORMA</span>
        </div>
      </div>
    </Reveal>


  )
}

export default SeeMore