import React from 'react'
import Image from 'next/image';
import Button from '@/components/Button/Button';
import { Link } from 'react-scroll';
function HeadKanje() {
    return (

        <div className='flex justify-center flex-wrap items-center gap-10'>
            <div className='max-w-[40rem] w-full'>
                <p className='text-3xl uppercase my-10 font-semibold  md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                    SISTEMA AVANZADO DE CANJE
                </p>
                <h2 className='text-panal-cyan text-2xl xl:text-5xl uppercase my-10'>
                    YO CANJEO
                </h2>
                <span className="my-10 text-md xl:text-xl items-center justify-center text-gray-800">
                    Búsqueda inteligente para conseguir la propiedad adecuada o al cliente interesado en comprar y arrendar
                </span>
                <Link to="FormCanje" spy={true} smooth={true} offset={-130} duration={1000}>
                    <div className="my-10">
                        <Button>CONOCE MÁS DE YO CANJEO</Button>
                    </div>
                </Link>
            </div>
            <div>
                <Image src='https://res.cloudinary.com/drd52d73n/image/upload/v1683216056/Panal/imageCanje.png' width="600" height="900" />
            </div>
        </div>



    )
}

export default HeadKanje