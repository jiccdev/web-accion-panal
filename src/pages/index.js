import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import HomeComponent from '@/components/PageSections/Home/index.jsx';

import ServicesComponent from '@/components/PageSections/Services/index.jsx';
import AboutComponent from '@/components/PageSections/About/index.jsx';
import ContactComponent from '@/components/PageSections/Contact/index.jsx';
import WebPageQuotation from '@/components/PageSections/WebPageQuotation';


const Home = () => (
  <>
    <HeadPage>
      <title>Acción Panal | Inicio</title>
    </HeadPage>
    
		<LayoutPage>
			<HomeComponent />
			<ServicesComponent />
		</LayoutPage>
	</>
    <LayoutPage>
      <WebPageQuotation />
      <HomeComponent />
      <AboutComponent />
      <ContactComponent />
    </LayoutPage>
  </>
);

export default Home;
