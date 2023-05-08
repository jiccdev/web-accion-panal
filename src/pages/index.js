import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import HomeComponent from '@/components/PageSections/Home/index.jsx';
import ServicesComponent from '@/components/PageSections/Services/index.jsx';

const Home = () => (
	<>
		<HeadPage>
			<title>Unne | Inicio</title>
		</HeadPage>

		<LayoutPage>
			<HomeComponent />
			<ServicesComponent />
		</LayoutPage>
	</>
);

export default Home;
