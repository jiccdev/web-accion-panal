import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/BasicDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/BasicDemos/SplideSlide';

const Demos = ({ selectedDemo, setSelectedDemo, demos, title, subtitle }) => (
  <SplideCarousel
    subtitle={subtitle}
    title={title}
    data={demos}
    RenderedComponent={SplideSlideComponent}
    selectedDemo={selectedDemo}
    setSelectedDemo={setSelectedDemo}
  />
);

export default Demos;
