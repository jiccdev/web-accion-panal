import React from 'react'
import HeadingSection from '@/components/HeadingSection/HeadingSection'
import BeneficCard from './BeneficCard';
import BasicCard from '@/components/Card/BasicCard'
import { BeneficIcons } from '@/data';
import Section from '@/components/Section/Section';

const BeneficWeb = () => {
    const Beneficards = BeneficIcons.map((data) => (
        <BeneficCard key={data.id} data={data} backgroundColor="bg-white" />
    ));

    return (
        <>
            <div className='flex justify-center items-center mt-40'>
                <div className='max-w-[1300px] w-full'>
                    <HeadingSection
                        title="UTILIZAMOS LA TECNOLOGÍA PARA DESARROLLAR EL MEJOR SISTEMA DE CANJE"
                        subtitle=""
                        alignment="center"
                        color="violet"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-10">
                {Beneficards}
            </div>
        </>
    )

}

export default BeneficWeb

