import CarouselCard from '@/components/Carousel/ReactSlick/CarouselCard'
import ReactSlickComponent from '@/components/Carousel/ReactSlick/ReactSlickComponent'
import React from 'react'
import { dataClientsCarousel } from '@/data'
import Section from '@/components/Section/Section'
import SplideCarousel from '@/components/Carousel/Splide/SplideCarousel'
import SplideSlideComponent from '@/components/Carousel/Splide/SplideSlide'
import HeadingSection from '@/components/HeadingSection/HeadingSection'


const Clients = () => {
    return (
        <Section>
            <div>
                <HeadingSection
                    title="Alianzas Estratégicas"
                    alignment="center"
                    color="violet"
                />

                <SplideCarousel
                    data={dataClientsCarousel}
                    RenderedComponent={SplideSlideComponent}
                />
            </div>
            <div className='mt-20'>
                <HeadingSection
                    title="Nuestros Clientes"
                    alignment="center"
                    color="violet"
                />
                <ReactSlickComponent
                    RenderComponent={CarouselCard}
                    data={dataClientsCarousel}
                    slidesToShow={3}
                    xl={1}
                />
            </div>
        </Section>
    )
}

export default Clients
