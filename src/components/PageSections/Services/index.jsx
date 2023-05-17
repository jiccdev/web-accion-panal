import React from 'react';
import Head from './components/Panal/Head.jsx';
import WhyWe from './components/Panal/WhyWe.jsx';
import SeeMore from './components/Panal/SeeMore.jsx';
import Portals from './components/Panal/Portals.jsx';
import Formservices from './components/Panal/FormServices.jsx';
import HeadKanje from './components/Kanjeo/HeadKanje.jsx';
import SystemKanje from './components/Kanjeo/SystemKanje.jsx';
import Diagrama from './components/Kanjeo/Diagrama.jsx';
import FormKanje from './components/Kanjeo/FormKanje.jsx';
import Section from '@/components/Section/Section.jsx';
import HeadWeb from './components/PagWeb/HeadWeb.jsx';
import PersonalDesign from './components/PagWeb/PersonalDesign.jsx';
import BeneficWeb from './components/PagWeb/BeneficWeb.jsx';

const Services = () => (
  <>
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

    <div id='yo-kanjeo-services'>
      <Section>
        <HeadKanje></HeadKanje>
        <SystemKanje></SystemKanje>
        <Diagrama></Diagrama>
      </Section>
    </div >

    <div id="FormCanje">
      <FormKanje >
      </FormKanje>
    </div>


    <div id='pagina-web-services'>
      <Section>
        <HeadWeb></HeadWeb>
        <PersonalDesign></PersonalDesign>
        <BeneficWeb></BeneficWeb>
      </Section>
    </div>
  </>

);

export default Services;
