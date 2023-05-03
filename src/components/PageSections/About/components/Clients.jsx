import CarouselCard from '@/components/Carousel/ReactSlick/CarouselCard'
import ReactSlickComponent from '@/components/Carousel/ReactSlick/ReactSlickComponent'
import React from 'react'
import { dataClientsCarousel } from '@/data'
import Section from '@/components/Section/Section'
import SplideCarousel from '@/components/Carousel/Splide/SplideCarousel'
import SplideSlideComponent from '@/components/Carousel/Splide/SplideSlide'


const Clients = () => {
    return (
        <Section>
            <div>
                <div className='border-b-2 border-panal-yellow'>
                    <h2 className='uppercase text-center text-4xl text-panal-purple'>Alianzas Estratégicas</h2>
                </div>

                <SplideCarousel
                    data={dataClientsCarousel}
                    RenderedComponent={SplideSlideComponent}
                />
            </div>
            <div className='mt-20'>
                <div className='border-b-2 border-panal-yellow '>
                    <h2 className='uppercase text-center text-4xl text-panal-purple'>Nuestros Clientes</h2>
                </div>
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
