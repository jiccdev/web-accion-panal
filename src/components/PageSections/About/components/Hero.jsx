import Section from '@/components/Section/Section';
import React from 'react';

import { statsClients, mainInfoAbout } from '@/data';
import HeroInfo from './HeroInfo';
import StatsCard from '@/components/Card/StatsCard';

import { keyframes } from '@emotion/react';
import Reveal from 'react-awesome-reveal';

const Hero = () => {
	const fadeInUp = keyframes`
        0% {
            opacity: 0;
            -webkit-transform: translateY(80px);
            transform: translateY(80px);
        }
        100% {
            opacity: 1;
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }`;
	return (
		<Section>
			{/* Top section */}
			{mainInfoAbout?.length > 0 &&
				mainInfoAbout?.map((ev) => (
					<HeroInfo key={ev.id} data={ev} />
				))}
			{/* Bottom section */}
			<Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
				<div className='flex flex-wrap justify-center items-center gap-5 xl:gap-10 my-10'>
					{statsClients?.length > 0 &&
						statsClients?.map((ev) => (
							<StatsCard key={ev.id} data={ev} />
						))}
				</div>
			</Reveal>
		</Section>
	);
};

export default Hero;
