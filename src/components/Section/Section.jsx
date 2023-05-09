import React from 'react';
import styles from '../../styles/components/Section.module.css';

const Section = ({ children, className, bg, ellipsed }) => {
  const defaultSectionClass = 'relative px-4 my-14 md:my-16 xl:my-28 xl:px-32';

  const renderBackgroundSection = () => {
    switch (bg) {
      case 'amber':
        return 'bg-amber-400';
      case 'gray':
        return 'bg-gray-100';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <section
      className={`${defaultSectionClass} ${
        !!ellipsed ? styles.sectionEllipsed : ''
      } ${renderBackgroundSection()} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
