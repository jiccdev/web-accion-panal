import React from 'react'

const Form = () => {
    return (
        <div className="my-7 flex flex-col items-center ">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
                Contáctanos
            </h1>
            <form>
                <div className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-xs">
                        <div>
                            <label htmlFor="tel" className='block text-base font-semibold'>Nombre:</label>
                            <input
                                className="w-full px-8 py-3 rounded-2xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="text"
                                placeholder="Escriba su nombre"
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="tel" className='block text-base font-semibold'>Teléfono:</label>
                            <input
                                className="w-full px-8 py-3 rounded-2xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                placeholder="+56 9 8765 4321"
                                type="text"
                                pattern="[0-9]{9}"
                                maxLength="9"
                            />
                        </div>
                        <div className='mt-5'>
                            <label htmlFor="tel" className='block text-base font-semibold'>E-mail:</label>
                            <input
                                className="w-full px-8 py-3 rounded-2xl font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                type="email"
                                placeholder="ejemplo@gmail.com"
                            />
                        </div>
                        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-5">
                            <input
                                className="outline-none relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-md border-[0.125rem] border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-panal-orange checked:bg-panal-orange checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-panal-orange dark:checked:bg-panal-orange"
                                type="checkbox"
                                id="checkboxTerms"
                                name="checkboxTerms"
                            />
                            <label className="mt-6 text-xs text-gray-600 text-center">
                                Al continuar estas aceptando los
                                <a href="#" className="border-b border-gray-500 border-dotted hover:text-panal-orange hover:border-panal-orange"> términos y condiciones </a>
                                y
                                <a href="#" className="border-b border-gray-500 border-dotted hover:text-panal-orange hover:border-panal-orange"> la politica de privacidad. </a>
                            </label>
                        </div>

                        <div className="my-5 border-b text-center">
                            <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="mt-5 tracking-wide font-semibold bg-panal-orange text-gray-100 w-full py-4 rounded-lg hover:bg-panal-yellow transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                        >
                            <span className="ml-3">
                                Enviar
                            </span>
                        </button>

                    </div>

                </div>
            </form>

        </div>
    )
}

export default Form
