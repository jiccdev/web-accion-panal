import React from 'react';
import Section from '@/components/Section/Section';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import BasicCard from '@/components/Card/BasicCard';
import { digitalAgeCardData } from '../../../../data';

const DigitalAge = () => {
  const renderedCards = digitalAgeCardData.map((data) => (
    <BasicCard key={data.id} data={data} backgroundColor="bg-white" />
  ));

  return (
    <Section className="h-auto mx-auto w-[95%] md:w-[90%] ">
      <HeadingSection
        title="Apostamos a la era digital"
        subtitle="Impulsa tu negocio inmobiliario con las mejores herramientas"
        alignment="center"
        color="violet"
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3">
        {renderedCards}
      </div>
    </Section>
  );
};

export default DigitalAge;
