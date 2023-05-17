import React from 'react'
import Section from '@/components/Section/Section'
import HeadingSection from '@/components/HeadingSection/HeadingSection'
import BasicCard from '@/components/Card/BasicCard'
import { KanjeCard } from '@/data'
import SystemCard from './SystemCard'

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

const SystemKanje = () => {
    const KanjeCards = KanjeCard.map((data) => (
        <SystemCard key={data.id} data={data} backgroundColor="bg-white" />
    ));

    return (

        <>
            <Reveal effect="fadeInUp" duration={1000} delay={500}>
                <div className='flex justify-center items-center mt-32 '>
                    <div className='max-w-[1300px] w-full'>
                        <HeadingSection
                            title="UTILIZAMOS LA TECNOLOGÍA PARA DESARROLLAR EL MEJOR SISTEMA DE CANJE"
                            subtitle=""
                            alignment="center"
                            color="violet"
                        />
                    </div>
                </div>
            </Reveal>
            <Reveal keyframes={fadeInUp} delay={400} duration={1000}>
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-3 gap-4">

                    {KanjeCards}

                </div>
            </Reveal>
        </>
    )
}

export default SystemKanje