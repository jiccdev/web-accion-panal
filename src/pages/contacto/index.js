import HeadPage from '@/components/HeadPage/HeadPage';
import LayoutPage from '@/components/LayoutPage/LayoutPage';
import ContactComponent from '@/components/PageSections/Contact/index.jsx';
import React from 'react';

const contacto = () => {
  return (
    <>
      <HeadPage>
        <title>Acción Panal | Contacto</title>
      </HeadPage>
      <LayoutPage>
        <ContactComponent />
      </LayoutPage>
    </>
  )
}

export default contacto