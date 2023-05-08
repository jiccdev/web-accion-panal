import React from 'react'
import HeadImage from '../../../../assets/img/servics/laptop.png';
import Image from 'next/image'
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import { iconsList } from '@/components/icons';

const WhyWe = () => {
    /* Iconos a ocupar */
    const {
        MdWeb,
        BsPersonCircle,
        MdDevices,
        FaCogs,
        GiProgression,
        IoIosPeople,

    } = iconsList;

    return (
        <div className='justify-center items-center mt-20'>
            <div className='mb-20'>
                <HeadingSection
                    title="¿POR QUÉ UNIRTE A NUESTRA PLATAFORMA?"
                    subtitle=""
                    alignment="center"
                    color="violet"
                />
            </div>
            <div className='flex justify-center items-center w-full'>
                <div className='grid gap-8 max-w-[1300px]'>
                    <div className='flex justify-center items-center gap-8 flex-wrap'>

                        <div className='flex flex-auto items-center justify-center'>
                            <Image src={HeadImage} alt="Displays" width="550" height="600" />
                        </div>

                        {/*  <div className={`flex flex-col items-center justify-center `}>
                            <Image
                                src={HeadImage}
                                alt={`Displays`}
                                className="h-40 sm:h-56 xl:h-80 w-auto"
                                width={100}
                                height={150}
                            />
                        </div> */}


                        <div className="w-[50%] h-50 bg-white shadow-md rounded-2xl overflow-hidden">
                            <div className="px-5 py-4 flex items-center justify-center">
                                <h2 className="text-lg font-bold text-center">Diseño</h2>
                            </div>
                            <div className="px-4 py-2 flex">
                                <div className="flex items-center ml-2">
                                    <div className="text-2xl">
                                        <MdWeb size="4rem" color='#489F94' />
                                    </div>
                                </div>
                                <div className="ml-6 px-4 py-4">
                                    <p className="text-gray-700 whitespace-pre-line">Te ofrecemos una experiencia al usuario única,
                                        ya que contamos con una interfaz intuitiva y fácil de usar paraque no pierdas tiempo publicando.</p>
                                </div>
                            </div>

                            <div className="px-4 py-2 flex">
                                <div className="flex items-center ml-2">
                                    <div className="text-2xl">
                                        <BsPersonCircle size="4rem" color='#489F94' />
                                    </div>
                                </div>
                                <div className="ml-6 px-4 py-4">
                                    <p className="text-gray-700 whitespace-pre-line">Contaras con un usuario para que puedas ingresar a nuestra plataforma
                                        y un Vendeid que permitirá el contacto directo entre los clientes potenciales y tu.</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className='flex justify-center items-center gap-4'>
                        <div className="w-[50%] h-50 bg-white shadow-md rounded-2xl overflow-hidden">
                            <div className="px-5 py-4 flex items-center justify-center">
                                <h2 className="text-lg font-bold text-center">Funcionalidad</h2>
                            </div>
                            <div className="px-4 py-2 flex">
                                <div className="flex items-center ml-2">
                                    <div className="text-2xl">
                                        <MdDevices size="4rem" color='#489F94' />
                                    </div>
                                </div>
                                <div className="ml-6 px-4 py-4">
                                    <p className="text-gray-700 whitespace-pre-line">¡Administra tu cartera y clientes desde cualquier lugar! Nuestra plataforma es compatible
                                        con todos los dispositivos</p>
                                </div>
                            </div>

                            <div className="px-4 py-2 flex">
                                <div className="flex items-center ml-2">
                                    <div className="text-2xl">
                                        <FaCogs size="4rem" color='#489F94' />
                                    </div>
                                </div>
                                <div className="ml-6 px-4 py-4">
                                    <p className="text-gray-700 whitespace-pre-line">Automatiza tus tareas y mejora tu rendimiento para
                                        poder dedicar mas tiempo al cierre de negocios.</p>
                                </div>
                            </div>


                            <div className="px-4 py-2 flex">
                                <div className="flex items-center ml-2">
                                    <div className="text-2xl">
                                        <GiProgression size="4rem" color='#489F94' />
                                    </div>
                                </div>
                                <div className="ml-6 px-4 py-4">
                                    <p className="text-gray-700 whitespace-pre-line">Nuestro sistema te permitirá obtener estadísticas en tiempo real
                                        de tus publicaciones, para medir el rendimiento.</p>
                                </div>
                            </div>

                            <div className="px-4 py-2 flex">
                                <div className="flex items-center ml-2">
                                    <div className="text-2xl">
                                        <IoIosPeople size="4rem" color='#489F94' />
                                    </div>
                                </div>
                                <div className="ml-6 px-4 py-4">
                                    <p className="text-gray-700 whitespace-pre-line">Aumenta tu cartera y las consultas de clientes potenciales con nuestro Software inmobiliario desarrollado con inteligencia artificial y análisis de datos,
                                        para conseguir clientes similares a los de tu publicación.</p>
                                </div>
                            </div>

                        </div>


                        <div className='flex flex-auto items-center justify-center'>
                            <Image src={HeadImage} alt="Displays" width="600" height="600" />
                        </div>


                    </div>
                </div>
            </div>


        </div>
    )
}

export default WhyWe