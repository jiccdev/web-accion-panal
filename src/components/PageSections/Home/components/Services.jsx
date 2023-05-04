import React from 'react';
import Section from '@/components/Section/Section';
import HeadingSection from '@/components/HeadingSection/HeadingSection';
import { SimpleSection, InvertedSection } from './SimpleSection';
import { servicesData } from '@/data';

const Services = () => {
	return (
		<Section className="h-auto mx-auto w-[95%] md:w-[90%] xl:w-[75%]">
			<HeadingSection title="Nuestros servicios" color="violet" />

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 xl:gap-0">
				{servicesData.length > 0
					? servicesData.map(item =>
							item.id % 2 === 0 ? (
								<SimpleSection key={item.id} item={item} />
							) : (
								<InvertedSection key={item.id} item={item} />
							)
					  )
					: 'No hay servicios disponibles'}
			</div>
		</Section>
	);
};

export default Services;
