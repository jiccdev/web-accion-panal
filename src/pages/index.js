import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import HomeComponent from '@/components/PageSections/Home/index.jsx';

import ServicesComponent from '@/components/PageSections/Services/index.jsx';
import WebPageQuotation from '@/components/PageSections/WebPageQuotation';

const Home = () => (
  <>
    <HeadPage>
      <title>Acción Panal | Inicio</title>
    </HeadPage>

    <LayoutPage>
      <HomeComponent />
      <ServicesComponent />
      <WebPageQuotation />
    </LayoutPage>
  </>
);

export default Home;
