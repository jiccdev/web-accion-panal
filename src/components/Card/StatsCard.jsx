import React from 'react'

const StatsCard = ({ data }) => {
    const { id, stats, title } = data;

    const formatedStats = stats.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return (
        <div className='w-[15.5rem] pb-5 text-center'>
            <h3 className='text-panal-cyan my-1 xl:my-7 text-4xl xl:text-5xl'>+{formatedStats}</h3>
            <p>{title}</p>
        </div>
    )
}

export default StatsCard
