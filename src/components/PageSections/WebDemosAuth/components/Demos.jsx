import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/BasicDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/BasicDemos/SplideSlide';

const Demos = ({
  selectedDemo,
  setSelectedDemo,
  selectedAdvancedDemo,
  demos,
  title,
  subtitle,
}) => (
  <SplideCarousel
    subtitle={subtitle}
    title={title}
    data={demos}
    RenderedComponent={SplideSlideComponent}
    selectedDemo={selectedDemo}
    setSelectedDemo={setSelectedDemo}
    selectedAdvancedDemo={selectedAdvancedDemo}
  />
);

export default Demos;
