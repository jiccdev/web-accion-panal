import React from 'react';
import Reveal from 'react-awesome-reveal';
import Image from 'next/image';
import styles from '../../styles/components/Card/BasicCard.module.css';
import { keyframes } from '@emotion/react';

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

const BasicCard = ({ backgroundColor, data }) => {
  const { title, desc, icon } = data;
  return (
    <Reveal keyframes={fadeInUp} delay={300} duration={600} triggerOnce>
      <div
        className={`${backgroundColor} ${styles.card} ${styles.education} md:h-56 xl:h-[410px] text-center py-6 px-4 my-5 xl:my-14 xl:mx-10 shadow-lg rounded-2xl cursor-pointer hover:shadow-xl trasition duration-300 ease-in-out`}
      >
        <div className={`${styles.overlay}`}></div>
        <span className="flex items-center justify-center my-4">
          <Image src={icon} height={130} width={130} alt={`icon-${title}`} />
        </span>

        <h3 className="text-xl h-5 mb-2 font-bold text-gray-800 uppercase">
          {title}
        </h3>
        <p className="h-auto xl:h-36 text-md mt-4 mb-2 xl:text-lg text-gray-700 w-[90%] mx-auto">
          {desc}
        </p>
      </div>
    </Reveal>
  );
};

export default BasicCard;
