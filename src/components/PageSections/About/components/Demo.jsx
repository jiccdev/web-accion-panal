import Section from '@/components/Section/Section'
import React from 'react'

const Demo = () => {
    return (
        <Section>
            <div className='flex flex-col justify-center items-center gap-6'>
                <div className=''>
                    <h2 className='uppercase bg-panal-orange text-white p-4 rounded-xl text-xl'>Conoce nuestro demo</h2>
                </div>
                <div>
                    <a href="https://www.youtube.com/" target='_blank'>
                        <img src="https://res.cloudinary.com/drd52d73n/image/upload/v1683055003/Panal/video.png" alt="" />
                    </a>
                </div>
            </div>
        </Section>

    )
}

export default Demo
