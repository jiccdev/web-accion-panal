import CarouselCard from '@/components/Carousel/ReactSlick/CarouselCard'
import ReactSlickComponent from '@/components/Carousel/ReactSlick/ReactSlickComponent'
import React from 'react'
import { dataClientsCarousel, dataAlianzaCarousel } from '@/data'
import Section from '@/components/Section/Section'
import SplideCarousel from '@/components/Carousel/Splide/SplideCarousel'
import SplideSlideComponent from '@/components/Carousel/Splide/SplideSlide'
import HeadingSection from '@/components/HeadingSection/HeadingSection'

import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

const Clients = () => {

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
        }`;
    return (
        <Section>
            <div>
                <HeadingSection
                    title="Alianzas Estratégicas"
                    alignment="center"
                    color="violet"
                />
                <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                <SplideCarousel
                    data={dataAlianzaCarousel}
                    RenderedComponent={SplideSlideComponent}
                />
                </Reveal>
            </div>
            <div className='mt-20'>
                <div className='mb-12'>
                    <HeadingSection
                        title="Nuestros Clientes"
                        alignment="center"
                        color="violet"
                    />
                </div>
                <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
                <ReactSlickComponent
                    RenderComponent={CarouselCard}
                    data={dataClientsCarousel}
                    slidesToShow={3}
                    xl={1}
                />
                </Reveal>
            </div>
        </Section>
    )
}

export default Clients
