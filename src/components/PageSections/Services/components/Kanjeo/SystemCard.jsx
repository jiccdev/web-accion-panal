import React from 'react';


const SystemCard = ({ data }) => {
    const { title, desc, icon } = data;
    return (
        <div className="text-center py-6 px-4 my-5 xl:my-14 xl:mx-10 shadow-xl rounded-3xl bg-white hover:scale-105 transition duration-500">
            <span className="flex items-center justify-center my-2 md:my-4">
                <i className="text-4xl md:text-5xl xl:text-8xl text-teal-500">{icon}</i>
            </span>
            <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
            <div className="my-4">
                <p className="text-base text-gray-700 w-full max-w-[100%]">
                    {desc}
                </p>
            </div>
        </div>



    );
};

export default SystemCard;
