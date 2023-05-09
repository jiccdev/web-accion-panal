import React, { Fragment, useContext, useState } from 'react';
import Section from '@/components/Section/Section';
import { UserContext } from '@/context/user/UserContext';
import SplideCarousel from '@/components/SplideCarousel/AdvancedDemos/SplideCarousel';
import SplideSlideComponent from '@/components/SplideCarousel/AdvancedDemos/SplideSlide';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import RequestDemoForm from './components/RequestDemoForm';
import Modal from '@/components/Modal/Modal';
import { demosAdvancedData, demosBasicData } from '../../../data/demos';
import BasicDemos from './components/BasicDemos';
import AdvancedDemos from './components/AdvancedDemos';

const WebDemosAuth = () => {
  const { contextData } = useContext(UserContext);
  const [state] = contextData;
  const [basicDemoSelected, setBasicDemoSelected] = useState(null);
  const [advancedDemosSelected, setAdvancedDemosSelected] = useState([]);
  // const [showBasicDemoModal, setShowBasicDemoModal] = useState(false);

  const renderContent = () => (
    <RequestDemoForm {...{ advancedDemosSelected, state }} />
  );

  return (
    <Section>
      {/* RENDERED BASIC DEMOS */}
      <BasicDemos
        {...{ basicDemoSelected, setBasicDemoSelected, demosBasicData }}
      />

      {/* RENDERED ADVANCED DEMOS */}
      <AdvancedDemos
        {...{
          advancedDemosSelected,
          setAdvancedDemosSelected,
          demosAdvancedData,
        }}
      />

      {/* <div className="w-full flex justify-center items-center">
        <ButtonPrimary
          // onClick={() => setShowBasicDemoModal(true)}
          disabled={advancedDemosSelected.length <= 0}
          className={`${
            advancedDemosSelected.length > 0
              ? 'bg-amber-500 text-white cursor-pointer'
              : 'bg-amber-300 text-white cursor-default'
          }`}
        >
          Solicitar Demos
        </ButtonPrimary>
      </div> */}
    </Section>
  );
};

export default WebDemosAuth;
