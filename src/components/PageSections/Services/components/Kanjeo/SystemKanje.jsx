import React from 'react'
import Section from '@/components/Section/Section'
import HeadingSection from '@/components/HeadingSection/HeadingSection'
import BasicCard from '@/components/Card/BasicCard'
import { KanjeCard } from '@/data'
import SystemCard from './SystemCard'


const SystemKanje = () => {
    const KanjeCards = KanjeCard.map((data) => (
        <SystemCard key={data.id} data={data} backgroundColor="bg-white" />
    ));

    return (

        <>
            <div className='flex justify-center items-center mt-32 '>
                <div className='max-w-[1300px] w-full'>
                    <HeadingSection
                        title="UTILIZAMOS LA TECNOLOGÍA PARA DESARROLLAR EL MEJOR SISTEMA DE CANJE"
                        subtitle=""
                        alignment="center"
                        color="violet"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-3 gap-4">

                {KanjeCards}

            </div>
        </>
    )
}

export default SystemKanje