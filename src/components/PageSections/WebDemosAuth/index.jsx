import React, { useContext } from 'react';
import Section from '@/components/Section/Section';
import { UserContext } from '@/context/user/UserContext';

const WebDemosAuth = () => {
  const { contextData } = useContext(UserContext);
  const [state, dispatch] = contextData;

  return <Section>WebDemos</Section>;
};

export default WebDemosAuth;
