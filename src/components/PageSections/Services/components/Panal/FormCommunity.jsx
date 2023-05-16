import React from 'react'
import Button from '@/components/Button/Button';
const FormCommunity = () => {
    return (
        <div className="flex flex-wrap w-[100%] sm:w-[90%] md:w-[80%] lg:w-[80%] xl:w-[95%] rounded-2xl bg-white shadow-2xl p-4 md:p-6 xl:p-10">
            <form className="w-full h-full bg-white p-2">
                <h2 className='text-center font-bold mb-10 text-3xl'>ÚNETE A NUESTRA COMUNIDAD Y VIVE LA EVOLUCIÓN DEL CORRETAJE INMOBILIARIO</h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-500 text-sm font-ligth mb-2"
                        htmlFor="name"
                    >
                        Nombre
                    </label>
                    <input
                        className="w-full px-4 py-2 border-gray-300 rounded-full focus:outline-none border-2 focus:shadow-sm focus:border-indigo-500"
                        type="text"
                        id="name"
                        name="name"
                        maxLength={50}


                        placeholder="Escriba su nombre"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-500 text-sm font-ligth mb-2"
                        htmlFor="phone"
                    >
                        Teléfono
                    </label>
                    <input
                        className="w-full px-4 py-2 border-gray-300 rounded-full focus:outline-none border-2 focus:shadow-sm focus:border-indigo-500"
                        type="phone"
                        id="phone"
                        name="phone"
                        maxLength={9}


                        placeholder="+569 8765 432"
                    />
                </div>

                <div className="mb-4">
                    <label
                        className="block text-gray-500 text-sm font-ligth mb-2"
                        htmlFor="email"
                    >
                        E-mail
                    </label>
                    <input
                        className="w-full px-4 py-2 border-gray-300 rounded-full focus:outline-none border-2 focus:shadow-sm focus:border-indigo-500"
                        type="email"
                        id="email"
                        name="email"

                        placeholder="ejemplo@gmail.com"
                    />
                </div>

                <div className="flex items-center ml-6 mt-6">
                    <input
                        id="termsx"
                        type="checkbox"


                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-amber-500 checked:bg-amber-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-amber-500 dark:checked:bg-amber-500"
                    />
                    <label
                        htmlFor="termsx"
                        className="ml-2 text-sm font-light text-gray-500"
                    >
                        Al continuar estas aceptando los términos y condiciones y la politica
                        de privacidad
                    </label>
                </div>

                <div className="mt-12 flex justify-center">
                    <Button type="submit">Enviar</Button>
                </div>
            </form>
        </div>
    )
}

export default FormCommunity