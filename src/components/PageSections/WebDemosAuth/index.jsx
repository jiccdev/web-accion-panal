import React, { useContext, useState } from 'react';
import Section from '@/components/Section/Section';
import { UserContext } from '@/context/user/UserContext';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import RequestDemoForm from './components/RequestDemoForm';
import Modal from '@/components/Modal/Modal';
import {
  demosAdvancedData,
  demosBasicData,
  demosLandingsData,
} from '../../../data/demos';
import Demos from './components/Demos';
import LandingDemos from './components/LandingDemos';

const WebDemosAuth = () => {
  const { contextData } = useContext(UserContext);
  const [state] = contextData;
  const [selectedDemo, setSelectedDemo] = useState(false);
  const [selectedAdvDemo, setSelectedAdvDemo] = useState(false);
  const [selectedLandingDemo, setSelectedLandingDemo] = useState(false);
  const [showBasicDemoModal, setShowBasicDemoModal] = useState(false);

  const renderContent = () => (
    <RequestDemoForm {...{ selectedDemo, selectedLandingDemo, state }} />
  );

  console.log('SELECTED DATA', selectedDemo);

  return (
    <Section>
      {/* RENDERED BASIC DEMOS */}
      <Demos
        {...{
          selectedDemo,
          setSelectedDemo,
          demos: demosBasicData,
          title: 'Demos Webs basicas',
          subtitle: 'Este es el subtitulo de demos basica',
        }}
      />

      {/* RENDERED ADVANCED DEMOS */}
      <Demos
        {...{
          selectedDemo,
          setSelectedDemo,
          demos: demosAdvancedData,
          title: 'Demos Webs avanzadas',
          subtitle: 'Este es el subtitulo de demos avanzada',
        }}
      />

      {/* RENDERED LANDING DEMOS */}
      {selectedDemo ? (
        <LandingDemos
          {...{
            selectedLandingDemo,
            setSelectedLandingDemo,
            demos: demosLandingsData,
            title: 'Demos Webs landing pages',
            subtitle: 'Este es el subtitulo de landings page',
          }}
        />
      ) : null}

      <div className="w-full flex justify-center items-center my-10">
        <ButtonPrimary
          onClick={() => {
            setShowBasicDemoModal(true);
            // getAllDemosSelected();
          }}
          disabled={!selectedDemo}
          className={`${
            selectedDemo?.length > 0
              ? 'bg-amber-500 text-white cursor-pointer'
              : 'bg-amber-300 text-white cursor-default'
          }`}
        >
          Solicitar Demos
        </ButtonPrimary>
      </div>

      <Modal
        renderTrigger={() => null}
        isOpenProp={showBasicDemoModal}
        renderContent={renderContent}
        contentExtraClass="max-w-2xl"
        onCloseModal={() => {
          setShowBasicDemoModal(false);
          // getAllDemosSelected();
        }}
        modalTitle="Solicitar Demos"
      />
    </Section>
  );
};

export default WebDemosAuth;
