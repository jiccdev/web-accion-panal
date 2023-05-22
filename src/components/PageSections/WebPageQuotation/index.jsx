import React from 'react';
import Section from '@/components/Section/Section';
import UserForm from './components/UserForm';
import UserEmailValidation from './components/UserEmailValidation';
import TabGroup from '@/components/Tabs/TabGroup';

const WebPageQuotation = () => {
  const tabListData = ['D. Personales', 'Valida tu email'];

  return (
    <Section
      bg="amber"
      ellipsed
      className="flex flex-col items-center justify-center h-[900px]"
    >
      <div
        id="form-demos"
        className="rounded-xl bg-white shadow-md p-4 md:p-6 xl:p-10 w-[100%] lg:w-[60%] xl:w-[40%]"
      >
        <h3 className="uppercase text-center text-lg xl:text-2xl text-gray-700 border-b mb-6">
          Cotiza tú página web inmobiliaria
        </h3>

        <div className="" id='FormWeb'>
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
