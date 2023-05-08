import React from 'react';
import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import WebDemosAuth from '@/components/PageSections/WebDemosAuth';

const WebDemos = () => {
  return (
    <>
      <HeadPage>
        <title>Acción Panal | Web Demos</title>
      </HeadPage>

      <LayoutPage>
        <WebDemosAuth />
      </LayoutPage>
    </>
  );
};

export default WebDemos;
