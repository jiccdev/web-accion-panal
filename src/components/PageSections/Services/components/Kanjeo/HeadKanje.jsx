import React from 'react'
import Image from 'next/image';
import Button from '@/components/Button/Button';

function HeadKanje() {
    return (
        <div className="flex flex-col md:flex-row justify-end items-center mt-40">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col gap-10 ">
                    <div className='mb-20'>

                        <h2 className='text-2xl font-bold md:text-4xl mr-4 my-6 md:mx-20 text-center w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                            SISTEMA AVANZADO DE CANJE
                        </h2>

                    </div>

                    <div className="flex flex-col md:items-start justify-center items-center md:items-left gap-2">
                        <h2 className="text-5xl font-bold xl:text-7xl text-teal-500">YO CANJEO</h2>
                        <span className="mt-5 text-md xl:text-xl items-center justify-center text-gray-800">
                            Búsqueda inteligente para conseguir la propiedad adecuada o al cliente interesado en comprar y arrendar
                        </span>
                        <div className="my-5">
                            <Button>CONOCE MÁS DE YO cANJEO</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                <div className="flex justify-center items-start">
                    <div className="col-span-2">
                        <Image src='https://res.cloudinary.com/drd52d73n/image/upload/v1683216056/Panal/imageCanje.png' alt="Displays" width="600" height="900" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadKanje