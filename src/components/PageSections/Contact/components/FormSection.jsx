import Section from '@/components/Section/Section'
import React from 'react'
import Form from './Form'

const FormSection = () => {
    return (
        <Section>
            <div className="min-h-max bg-gray-100 text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <Form 
                            realtorEmail='jos.delalamo@gmail.com' 
                        /> 
                    </div>
                    <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
                        <div className="w-full bg-contain bg-center bg-no-repeat">
                            <img src="https://fastly.picsum.photos/id/1033/1920/1080.jpg?hmac=PFeRtI5OXUqS7PbTPluUptCJV9_ZF4s_kN3P6teC8dI" alt="" className='object-cover h-full' />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default FormSection
