import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/AdvancedDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/AdvancedDemos/SplideSlide';

const AdvancedDemos = ({
  advancedDemosSelected,
  setAdvancedDemosSelected,
  demosAdvancedData,
}) => (
  <SplideCarousel
    title="Webs demo avanzada"
    data={demosAdvancedData}
    RenderedComponent={SplideSlideComponent}
    advancedDemosSelected={advancedDemosSelected}
    setAdvancedDemosSelected={setAdvancedDemosSelected}
  />
);

export default AdvancedDemos;
