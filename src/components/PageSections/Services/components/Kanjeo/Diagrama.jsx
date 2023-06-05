import React from 'react'
import Image from 'next/image'
import Section from '@/components/Section/Section'
import HeadingSection from '@/components/HeadingSection/HeadingSection'
import DiagramUi from '../../../../../assets/img/diagram/diagram.svg'
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

function Diagrama() {
    return (


        <div className='flex justify-center items-center mt-32 flex-col'>
            <div className='max-w-[1200px] w-full text-center items-center'>
                <HeadingSection
                    title="¿CÓMO FUNCIONA?"
                    subtitle=""
                    alignment="center"
                    color="violet"
                />
            </div>

            <div className="flex justify-center items-center">

                <div className="w-[100%]">
                    <Image src={DiagramUi} width="full" height="full" alt="img-diagram" className="w-[100%]" />
                </div>

            </div>

        </div>

    )
}

export default Diagrama