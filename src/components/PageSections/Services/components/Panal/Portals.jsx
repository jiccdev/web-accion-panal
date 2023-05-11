import React from 'react'
import SplideCarousel from '@/components/Carousel/Splide/SplideCarousel'
import SplideSlideComponent from '@/components/Carousel/Splide/SplideSlide'
import { dataPortalCarousel } from '@/data'
import Section from '@/components/Section/Section'

function Portals() {
    return (

        <div>
            <div className='border-b-2 border-panal-yellow'>
                <h2 className='uppercase text-center  text-2xl xl:text-4xl text-panal-purple'>INTEGRACIONES CON LOS SIGUIENTES PORTALES</h2>
            </div>

            <SplideCarousel
                data={dataPortalCarousel}
                RenderedComponent={SplideSlideComponent}
            />

        </div>

    )
}

export default Portals