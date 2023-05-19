import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import HeadKanje from '@/components/PageSections/Services/components/Kanjeo/HeadKanje.jsx';
import SystemKanje from '@/components/PageSections/Services/components/Kanjeo/SystemKanje.jsx';
import Diagrama from '@/components/PageSections/Services/components/Kanjeo/Diagrama.jsx';
import FormKanje from '@/components/PageSections/Services/components/Kanjeo/FormKanje.jsx';
import Section from '@/components/Section/Section.jsx';

const Kanjeo = () => {
  return (
    <>
      <HeadPage>
        <title>Acción Panal | Kanjeo</title>
      </HeadPage>

      <LayoutPage>
        <div id="yo-kanjeo-services">
          <Section>
            <HeadKanje></HeadKanje>
            <SystemKanje></SystemKanje>
            <Diagrama></Diagrama>
          </Section>
        </div>

        <div id="FormCanje">
          <FormKanje></FormKanje>
        </div>
      </LayoutPage>
    </>
  );
};

export default Kanjeo;
