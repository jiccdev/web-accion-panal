import React from 'react'
import Section from '../Section/Section'
import Link from 'next/link';

const NotFoundError = () => {
    const ErrorImg = 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1684524487/Projects/accion-panal/img/404/webp/404Image_mawxoj.webp';
    return (
        <Section>
            <div className='flex justify-center flex-wrap items-center gap-5'>
                <div className='max-w-[40rem] w-full'>
                    <p className='text-2xl uppercase font-semibold my-9 md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                        OOPS!
                    </p>
                    <h2 className='text-panal-cyan text-2xl xl:text-5xl uppercase'>
                        404 - Page Not Found
                    </h2>
                    <p className='my-5'>
                        Es posible que la página que busca haya sido eliminada, haya cambiado de nombre o no esté disponible temporalmente.
                    </p>
                    <p className='my-5'>
                        <Link
                            href='/'
                            className='hover:text-panal-cyan'
                        >
                            <strong>Pulse aquí para volver a la página de inicio</strong>
                        </Link>
                    </p>


                </div>
                <div className='max-w-[700px]'>
                    <img src={ErrorImg} alt="" />
                </div>
            </div>
        </Section>
    )
}

export default NotFoundError
