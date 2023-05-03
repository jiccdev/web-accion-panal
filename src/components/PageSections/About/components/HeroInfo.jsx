import React from 'react'

const HeroInfo = ({ data }) => {

    const { title, img, children } = data;

    return (
        <div className='flex justify-center flex-wrap items-center gap-5'>
            <div className='max-w-[40rem] w-full'>
                <p className='text-2xl uppercase font-semibold my-9 md:mx-24 w-max relative before:absolute before:content-[""] before:left-0 before:bottom-0 before:h-3 before:w-2/4 before:border-b-4 before:border-panal-orange'>
                    Sobre nosotros
                </p>
                <h2 className='text-panal-cyan text-5xl uppercase'>
                    {title}
                </h2>
                {children?.map(({ id, strongName, name }) => (
                    <p key={id} className='my-5'>
                        <strong>{strongName}</strong> {name}
                    </p>
                ))}
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default HeroInfo
