import Section from '@/components/Section/Section';
import React from 'react';
import Form from './Form';
import { contactAccionPanalData } from '@/data/realtorData';

import { keyframes } from '@emotion/react';
import Reveal, { Fade } from 'react-awesome-reveal';

const FormSection = () => {
  const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(80px);
    transform: translateY(80px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
    `;
  return (
    <Section>
      <Reveal keyframes={fadeInUp} delay={300} duration={1000} triggerOnce>
        <div className="min-h-max bg-gray-100 text-gray-900 flex justify-center">
          <div className="max-w-screen-xl m-0 sm:mx-20 bg-panal-cyan shadow-2xl sm:rounded-lg flex justify-center flex-1 overflow-hidden">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <Fade direction='left' delay={600} duration={800} triggerOnce>
                <Form realtorEmail={contactAccionPanalData?.email} />
              </Fade>

            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div className="w-full bg-contain bg-center bg-no-repeat">
                <img
                  src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1684771318/Projects/accion-panal/img/contact/png/contact_sza1d6.png"
                  alt=""
                  className="object-cover h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default FormSection;
