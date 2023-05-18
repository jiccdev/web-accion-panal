import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage'
import LayoutPage from '@/components/LayoutPage/LayoutPage'
import WhyWe from '@/components/PageSections/Services/components/Panal/WhyWe.jsx';
import SeeMore from '@/components/PageSections/Services/components/Panal/SeeMore.jsx';
import Portals from '@/components/PageSections/Services/components/Panal/Portals.jsx';
import Formservices from '@/components/PageSections/Services/components/Panal/FormServices.jsx';
import Section from '@/components/Section/Section.jsx';
import Head from '@/components/PageSections/Services/components/Panal/Head.jsx';

const panal = () => {
  return (
    <>
      <HeadPage>
        <title>Acción Panal | Panal</title>
      </HeadPage>

      <LayoutPage>
        <div id='panal-services'>
          <Section>
            <Head></Head>
            <WhyWe></WhyWe>
            <SeeMore></SeeMore>
            <Portals></Portals>
          </Section>
        </div>
        <div id="FormPanal">
          <Formservices >
          </Formservices>
        </div>
      </LayoutPage>
    </>
    )
};

export default panal;
