import React, { Fragment } from 'react';
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';

const SplideCarousel = ({ data, RenderedComponent }) => {
    return (
        <Fragment>
            <Splide
                options={{
                    rewind: true,
                    gap: '1rem',
                    perPage: 3
                }}
            >
                {data.map((demo) => (
                    <RenderedComponent
                        key={demo.id}
                        demo={demo}
                    />
                ))}
            </Splide>
        </Fragment>
    );
};

export default SplideCarousel;
