import React from 'react';
import Image from 'next/image';
import HeadImage from '../../../../../assets/img/servics/laptop.png'
import Button from '@/components/Button/Button';
const Head = () => {
    return (
        <div className="flex flex-col md:flex-row justify-end items-center">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col gap-10 ">
                    <div className='mb-20'>

                        <h2 className='text-3xl items-center font-bold md:text-5xl mr-6 my-6 md:mx-24 text-center w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                            Plataforma Inmobiliaria
                        </h2>

                    </div>

                    <div className="flex flex-col md:items-start justify-center items-center md:items-left gap-2">
                        <h2 className="text-5xl font-bold xl:text-7xl text-teal-500">Panal</h2>
                        <span className="mt-5 text-md xl:text-xl items-center justify-center text-gray-800">
                            Software de gestión inmobiliaria, que permite administrar tus propiedades y clientes desde un solo lugar
                        </span>
                        <div className="my-5">
                            <Button>Conoce nuestros planes</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-4">
                <div className="flex justify-center items-end">
                    <div className="col-span-2">
                        <Image src={HeadImage} alt="Displays" width="700" height="800" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Head