import React, { useContext } from 'react';
import Section from '@/components/Section/Section';
import { UserContext } from '@/context/user/UserContext';
import BasicDemos from './components/BasicDemos';
import AdvancedDemos from './components/AdvancedDemos';

const WebDemosAuth = () => {
  const { contextData } = useContext(UserContext);
  const [state, dispatch] = contextData;

  return (
    <Section>
      {/* Basic demos carousel */}
      <BasicDemos />

      {/* Advanced demos carousel */}
      <AdvancedDemos />
    </Section>
  );
};

export default WebDemosAuth;
