import React from 'react'
import { keyframes } from '@emotion/react';
import Reveal, { Fade } from 'react-awesome-reveal';


const HeroInfo = ({ data }) => {
    const fadeInUp = keyframes`
        0% {
            opacity: 0;
            -webkit-transform: translateY(80px);
            transform: translateY(80px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        } `;

    const { title, img, children } = data;

    return (
        <div className='flex justify-center flex-wrap items-center gap-5'>
            <div className='max-w-[40rem] w-full'>
                <p className='text-xl xl:text-2xl uppercase font-semibold my-9 md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                    Sobre nosotros
                </p>
                <Fade direction='left' delay={600} duration={1000} triggerOnce>
                    <h2 className='text-2xl font-bold xl:text-5xl text-teal-500 uppercase'>
                        {title}
                    </h2>
                    {children?.map(({ id, strongName, name }) => (
                        <p key={id} className=' my-5 text-md xl:text-xl text-gray-800'>
                            <strong>{strongName}</strong> {name}
                        </p>
                    ))}
                </Fade>
            </div>
            <div>
                <Reveal keyframes={fadeInUp} delay={300} duration={1000} triggerOnce>
                    <img src={img} alt="" />
                </Reveal>
            </div>
        </div>
    )
}

export default HeroInfo
