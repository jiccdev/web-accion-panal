import React from 'react';
import Image from 'next/image';

const CarouselCard = ({ item }) => {
    const { id, title, img, href } = item;
    return (
        <div
            className={` flex justify-center items-center w-[95%] mx-auto rounded-[50px] `}
        >
            <div className="">
                <div className="flex justify-center items-center mb-12 cursor-pointer transition-all hover:scale-110">
                    <a href={href} target="_blank">
                        <Image
                            src={img}
                            alt={`avatar-${title}`}
                            loader={() => img}
                            className=""
                            width={250}
                            height={200}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CarouselCard
