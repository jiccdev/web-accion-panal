import React from 'react';
import Section from '@/components/Section/Section';
import Image from 'next/image';
import Button from '@/components/Button/Button';
import BoxServicesImg from '../../../../assets/img/servics/box-services.png';

const ContactBoxServices = () => {
  return (
    <Section
      bg="amber"
      ellipsed
      className="h-96 flex justify-center items-center"
    >
      <div class="grid grid-cols-3 grid-rows-1 w-[95%] md:w-[90%] lg:w-[80%] xl:w-[60%] h-[200px] xl:h-[280px] bg-white py-4 px-6 rounded-2xl">
        <div class="col-span-1 bg-red-500">
          <Image
            src={BoxServicesImg}
            width="auto"
            heigth="auto"
            alt="img-box-services"
            className="w-full h-full object-cover"
          />
        </div>
        <div class="col-span-2 flex flex-col justify-center items-center">
          <div className="text-center w-[90%]">
            <h4 className="uppercase text-lg md:text-2xl xl:text-3xl">
              ¿QUIERES SABER MÁS SOBRE NUESTROS SERVICIOS?
            </h4>
          </div>

          <div className="mt-3 xl:mt-9">
            <Button href="#" className="bg-amber-500">
              Contactanos
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactBoxServices;
