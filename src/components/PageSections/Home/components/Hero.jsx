import React from 'react';
import Image from 'next/image';
import Section from '@/components/Section/Section';
import Button from '@/components/Button/Button';
import HeroImg from '../../../../assets/img/hero/Diseño sin título.svg';

const Hero = () => (
  <Section className="relative">
    <div
      id="inicio-section"
      className="grid grid-cols-1 xl:grid-cols-3 gap-4 place-items-center justify-items-start"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:w-full mx-2 xl:mx-0 ml-0 lg:ml-24 xl:ml-24">
        <h1 className="text-2xl font-bold xl:text-5xl text-teal-500">
          LA EVOLUCIÓN INMOBILIARIA A UN CLICK
        </h1>

        <span className="block mt-5 text-md xl:text-xl text-gray-800">
          Desarrollamos software de gestión y las herramientas mas innovadoras
          del mercado para optimizar el corretaje de propiedades
        </span>

        <div className="my-5">
          <Button>Más información</Button>
        </div>
      </div>
      <div className="col-span-2">
        <Image src={HeroImg} alt="Displays" width="full" height="full" className='' />
      </div>
    </div>
  </Section>
);

export default Hero;
