import React, { Fragment } from 'react';
import { Splide } from '@splidejs/react-splide';

const SplideCarousel = ({
  title,
  data,
  RenderedComponent,
  advancedDemosSelected,
  setAdvancedDemosSelected,
}) => {
  const handleMultiCheckboxChange = (e) => {
    const option = e.target.value;
    const index = advancedDemosSelected.indexOf(option);
    if (index === -1) {
      setAdvancedDemosSelected([...advancedDemosSelected, option]);
    } else {
      setAdvancedDemosSelected([
        ...advancedDemosSelected.slice(0, index),
        ...advancedDemosSelected.slice(index + 1),
      ]);
    }
  };

  return (
    <Fragment>
      <div className="uppercase border-l-4 border-amber-500 p-2">
        <label>{title}</label> |{' '}
        <span className="text-gray-400">{data?.length}</span>
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
            advancedDemosSelected={advancedDemosSelected}
            handleMultiCheckboxChange={handleMultiCheckboxChange}
          />
        ))}
      </Splide>
    </Fragment>
  );
};

export default SplideCarousel;
