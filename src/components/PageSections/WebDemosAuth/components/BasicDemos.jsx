import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/BasicDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/BasicDemos/SplideSlide';

const BasicDemos = ({
  basicDemoSelected,
  setBasicDemoSelected,
  demosBasicData,
}) => (
  <SplideCarousel
    title="Webs demo baisca"
    data={demosBasicData}
    RenderedComponent={SplideSlideComponent}
    basicDemoSelected={basicDemoSelected}
    setBasicDemoSelected={setBasicDemoSelected}
  />
);

export default BasicDemos;
