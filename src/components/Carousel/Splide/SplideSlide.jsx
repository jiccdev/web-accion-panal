import React from 'react';
import Image from 'next/image';
import { SplideSlide } from '@splidejs/react-splide';

const SplideSlideComponent = ({ demo }) => {
    const { href, img, name } = demo;
    return (
        <SplideSlide>
            <div className="w-full px-4 py-0">
                <div className="flex items-center justify-center">
                    <a href={href} target="_blank">
                        <Image
                            src={img}
                            alt={`img-demo-${name}`}
                            height={200}
                            width={100}
                            className="h-[120px] max-h-[250px] object-cover w-full rounded-xl mb-2"
                        />
                    </a>
                </div>
            </div>
        </SplideSlide>
    );
};

export default SplideSlideComponent;