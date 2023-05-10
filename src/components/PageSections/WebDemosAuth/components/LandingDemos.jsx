import React from 'react';
import SplideCarousel from '@/components/SplideCarousel/LandingDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/LandingDemos/SplideSlide';

const LandingDemos = ({
  selectedLandingDemo,
  setSelectedLandingDemo,
  demos,
  title,
  subtitle,
}) => (
  <SplideCarousel
    subtitle={subtitle}
    title={title}
    data={demos}
    RenderedComponent={SplideSlideComponent}
    selectedLandingDemo={selectedLandingDemo}
    setSelectedLandingDemo={setSelectedLandingDemo}
  />
);

export default LandingDemos;
