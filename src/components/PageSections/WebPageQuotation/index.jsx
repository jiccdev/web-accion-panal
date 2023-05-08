import React from 'react';
import Section from '@/components/Section/Section';
import UserForm from './components/UserForm';
import UserEmailValidation from './components/UserEmailValidation';
import TabGroup from '@/components/Tabs/TabGroup';

const WebPageQuotation = () => {
  const tabListData = ['Datos Personales', 'Valida tu email'];

  return (
    <Section
      bg="amber"
      ellipsed
      className="flex flex-col items-center justify-center h-[900px]"
    >
      <div className="w-[100%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[35%] rounded-xl bg-white shadow-md p-4 md:p-6 xl:p-10">
        <h3 className="uppercase text-center text-lg xl:text-2xl text-gray-700 border-b mb-6">
          Cotiza tú página web inmobiliaria
        </h3>

        <div className="w-[100%]">
          <TabGroup
            tabListData={tabListData}
            tabPanel0={<UserForm />}
            tabPanel1={<UserEmailValidation />}
          />
        </div>
      </div>
    </Section>
  );
};

export default WebPageQuotation;
