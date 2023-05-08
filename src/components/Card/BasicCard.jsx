import React from 'react';
import styles from '../../styles/components/Card/BasicCard.module.css';

const BasicCard = ({ backgroundColor, data }) => {
  const { title, desc, icon } = data;
  return (
    <div
      className={`${backgroundColor} ${styles.card} ${styles.education} md:h-56 xl:h-96 text-center py-6 px-4 my-5 xl:my-14 xl:mx-10 shadow-lg rounded-2xl cursor-pointer hover:shadow-xl trasition duration-300 ease-in-out`}
    >
      <div className={`${styles.overlay}`}></div>
      <span className="flex items-center justify-center my-4">
        <i className="text-5xl xl:text-8xl text-teal-500">{icon}</i>
      </span>
      <h3 className="text-xl font-bold text-gray-800 uppercase">{title}</h3>
      <p className="text-md mt-4 mb-2 xl:text-lg text-gray-700 w-[90%] mx-auto">
        {desc}
      </p>
    </div>
  );
};

export default BasicCard;
