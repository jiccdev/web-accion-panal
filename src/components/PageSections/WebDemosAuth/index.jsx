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
import AdvancedDemos from './components/AdvancedDemos';
import LandingDemos from './components/LandingDemos';

const WebDemosAuth = () => {
  const { contextData } = useContext(UserContext);
  const [state] = contextData;
  const [selectedDemo, setSelectedDemo] = useState(false);
  const [selectedAdvancedDemo, setSelectedAdvancedDemo] = useState(false);
  const [selectedLandingDemo, setSelectedLandingDemo] = useState(false);
  const [showBasicDemoModal, setShowBasicDemoModal] = useState(false);

  const renderContent = () => (
    <RequestDemoForm
      {...{
        selectedDemo,
        selectedAdvancedDemo,
        selectedLandingDemo,
        selectedLandingDemo,
        state,
      }}
    />
  );

  console.log('SELECTED DATA', selectedDemo);

  return (
    <Section>
      {/* RENDERED BASIC DEMOS */}
      <Demos
        {...{
          selectedDemo,
          setSelectedDemo,
          selectedAdvancedDemo,
          demos: demosBasicData,
          title: 'Demos Webs basicas',
          subtitle: 'Este es el subtitulo de demos basica',
        }}
      />

      <div className="w-full flex justify-center items-center my-10">
        <ButtonPrimary
          onClick={() => setShowBasicDemoModal(true)}
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

      {/* RENDERED ADVANCED DEMOS */}
      <AdvancedDemos
        {...{
          selectedAdvancedDemo,
          setSelectedAdvancedDemo,
          selectedDemo,
          demos: demosAdvancedData,
          title: 'Demos Webs avanzadas',
          subtitle: 'Este es el subtitulo de demos avanzada',
        }}
      />

      {/* RENDERED LANDING DEMOS */}
      {selectedAdvancedDemo ? (
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
          disabled={!selectedLandingDemo}
          className={`${
            selectedLandingDemo?.length > 0
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
