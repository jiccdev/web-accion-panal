import React from 'react'
import Section from '@/components/Section/Section'
import FormCommunity from './FormCommunity'

function Formservices() {
    return (

        <Section bg="amber"
            ellipsed
            className="flex flex-col items-center justify-center h-[900px]"
        >
            <div className="flex flex-col justify-center items-center min-h-screen  mt-10 ">
                <FormCommunity />
            </div>
        </Section>
    )
}

export default Formservices