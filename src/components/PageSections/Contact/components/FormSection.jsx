import Section from '@/components/Section/Section';
import React from 'react';
import Form from './Form';
import { realtorData } from '@/data/realtorData';

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
          <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
              <Fade direction='left' delay={600} duration={800} triggerOnce>
                <Form realtorEmail={realtorData?.email} />
              </Fade>

            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
              <div className="w-full bg-contain bg-center bg-no-repeat">
                <img
                  src="https://fastly.picsum.photos/id/1033/1920/1080.jpg?hmac=PFeRtI5OXUqS7PbTPluUptCJV9_ZF4s_kN3P6teC8dI"
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
