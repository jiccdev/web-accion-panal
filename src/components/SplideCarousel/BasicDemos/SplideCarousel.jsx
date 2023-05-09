import React, { Fragment } from 'react';
import { Splide } from '@splidejs/react-splide';

const SplideCarousel = ({
  title,
  data,
  RenderedComponent,
  basicDemoSelected,
  setBasicDemoSelected,
}) => {
  const handleCheckboxChange = (e) => {
    setBasicDemoSelected(e.target.value);
  };

  console.log(basicDemoSelected);

  return (
    <Fragment>
      <div className="uppercase border-l-4 border-amber-500 p-2">
        <label>{title}</label>
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          Una descripcion de esta seccion
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
            basicDemoSelected={basicDemoSelected}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </Splide>
    </Fragment>
  );
};

export default SplideCarousel;
