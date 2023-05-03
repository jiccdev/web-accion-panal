import Section from '@/components/Section/Section';
import React from 'react';

import { statsClients, mainInfoAbout } from '@/data';
import HeroInfo from './HeroInfo';
import StatsCard from '@/components/Card/StatsCard';

const Hero = () => {
	return (
		<Section>
			{/* Top section */}
			{mainInfoAbout?.length > 0 &&
				mainInfoAbout?.map((ev) => (
					<HeroInfo key={ev.id} data={ev} />
				))}
			{/* Bottom section */}
			<div className='flex flex-wrap justify-center items-center gap-10 my-10'>
				{statsClients?.length > 0 &&
					statsClients?.map((ev) => (
						<StatsCard key={ev.id} data={ev} />
					))}
			</div>
		</Section>
	);
};

export default Hero;
