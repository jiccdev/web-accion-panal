import React from 'react';
import Reveal from 'react-awesome-reveal';
import Image from 'next/image';
import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import HeroImg from '../../../../assets/img/hero/hero.svg';
import { keyframes } from '@emotion/react';

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

const Hero = () => (
  <Section className="relative mt-16 xl:mt-24 mx-2 md:mx-2 lg:mx-2 ">
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 place-items-center justify-items-start">
      <Reveal effect="fadeInUp" duration={1000} delay={500}>
        <div className="flex-shrink-0 mb-10 lg:mb-0 lg:w-full md:mx-9 lg:mx-14 xl:mx-0 ml-0 xl:ml-4 2xl:ml-24">
          <h1 className="text-2xl font-bold xl:text-5xl text-teal-500">
            LA EVOLUCIÓN INMOBILIARIA A UN CLICK
          </h1>

          <span className="block mt-5 text-md xl:text-xl text-gray-800">
            Desarrollamos software de gestión y las herramientas más innovadoras
            del mercado para optimizar el corretaje de propiedades
          </span>

          <div className="my-5">
            <Button href='/servicios/panal'>Más información</Button>
          </div>
        </div>
      </Reveal>

      <div className="col-span-2">
        <Reveal keyframes={fadeInUp} delay={300} duration={600}>
          <Image
            src={HeroImg}
            alt="hero-main-laptop"
            width="full"
            height="full"
            className="h-[220px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:w-full xl:h-full"
          />
        </Reveal>
      </div>
    </div>
  </Section>
);

export default Hero;
