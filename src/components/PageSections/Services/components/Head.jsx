import React from 'react';
import Image from 'next/image';
import HeadImage from '../../../../assets/img/servics/laptop.png';
import Button from '@/components/Button/Button';
const Head = () => {
    return (

        <div className="flex flex-wrap justify-center items-center">
            <div className="w-1/2 md:w-1/3 lg:w-1/2 p-4">
                <div className='flex flex-col gap-10 '>
                    <h2 className="text-4xl font-bold md:text-5xl relative inline-block text-right m-4">
                        Plataforma Inmobiliaria
                    </h2>


                    <div className='flex flex-col justify-center items-left gap-2 ml-20'>

                        <h2 className="text-5xl  font-bold xl:text-7xl text-teal-500 ">
                            Panal
                        </h2>

                        <span className="block mt-5 text-md xl:text-xl text-gray-800">
                            Software de gestión inmobiliaria, que permite administrar tus propiedades y clientes desde un solo lugar
                        </span>

                        <div className="my-5">
                            <Button>Conoce nuestros planes</Button>
                        </div>
                    </div>

                </div>
            </div>



            <div className="w-1/2 md:w-1/3 lg:w-1/2 p-4">

                <div className='flex flex-col justify-center items-center ml-40 '>
                    <div className="col-span-2">
                        <Image src={HeadImage} alt="Displays" width="700" height="800" />
                    </div>
                </div>

            </div>
        </div>


    )
}

export default Head