import React, { Fragment } from 'react';
import { Splide } from '@splidejs/react-splide';

const SplideCarousel = ({
  title,
  subtitle,
  data,
  RenderedComponent,
  selectedDemo,
  setSelectedDemo,
  selectedAdvancedDemo,
}) => {
  const handleCheckboxChange = (ev) => {
    ev.target.checked
      ? setSelectedDemo(ev.target.value)
      : setSelectedDemo(!selectedDemo);
  };

  return (
    <Fragment>
      <div className="uppercase border-l-4 border-amber-500 p-2">
        <label>{title}</label> |{' '}
        <span className="text-gray-400">{data?.length}</span>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          {subtitle}
        </div>
      </div>

      <Splide
        options={{
          rewind: true,
          gap: '1rem',
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 1,
            },
            768: {
              perPage: 1,
            },
            400: {
              perPage: 1,
            },
          },
        }}
        aria-label="demo-splide"
      >
        {data.map((demo) => (
          <RenderedComponent
            key={demo.id}
            demo={demo}
            selectedDemo={selectedDemo}
            selectedAdvancedDemo={selectedAdvancedDemo}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </Splide>
    </Fragment>
  );
};

export default SplideCarousel;
