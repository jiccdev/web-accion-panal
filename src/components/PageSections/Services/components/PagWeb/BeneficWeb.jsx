import React from 'react'
import HeadingSection from '@/components/HeadingSection/HeadingSection'
import BeneficCard from './BeneficCard';
import BasicCard from '@/components/Card/BasicCard'
import { BeneficIcons } from '@/data';
import Section from '@/components/Section/Section';
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

const BeneficWeb = () => {
    const Beneficards = BeneficIcons.map((data) => (
        <BeneficCard key={data.id} data={data} backgroundColor="bg-white" />
    ));

    return (
        <>
            <div className='flex justify-center items-center mt-40'>
                <Reveal effect="fadeInUp" duration={1000} delay={500}>
                    <div className='max-w-[1300px] w-full'>
                        <HeadingSection
                            title="UTILIZAMOS LA TECNOLOGÍA PARA DESARROLLAR EL MEJOR SISTEMA DE CANJE"
                            subtitle=""
                            alignment="center"
                            color="violet"
                        />
                    </div>
                </Reveal>

            </div>
            <Reveal keyframes={fadeInUp} delay={400} duration={1000}>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-10">

                    {Beneficards}

                </div>
            </Reveal>
        </>
    )

}

export default BeneficWeb

