import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/AdvancedDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/AdvancedDemos/SplideSlide';

const AdvancedDemos = ({
  selectedAdvancedDemo,
  setSelectedAdvancedDemo,
  selectedDemo,
  demos,
  title,
  subtitle,
}) => (
  <SplideCarousel
    subtitle={subtitle}
    title={title}
    data={demos}
    RenderedComponent={SplideSlideComponent}
    selectedAdvancedDemo={selectedAdvancedDemo}
    setSelectedAdvancedDemo={setSelectedAdvancedDemo}
    selectedDemo={selectedDemo}
  />
);

export default AdvancedDemos;
