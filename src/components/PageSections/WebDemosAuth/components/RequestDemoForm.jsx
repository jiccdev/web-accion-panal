import React from 'react';
import ButtonPrimary from '@/components/Button/ButtonPrimary';

const RequestDemoForm = ({
  selectedDemo,
  selectedAdvancedDemo,
  selectedLandingDemo,
  state,
}) => {
  console.log([selectedDemo, selectedLandingDemo]);

  const renderSelectedDemos = [
    selectedDemo,
    selectedAdvancedDemo,
    selectedLandingDemo,
  ].map((demo, idx) => (
    <ul key={idx}>
      <li>{demo}</li>
    </ul>
  ));

  // console.log(state);

  return (
    <form>
      <h4 className="text-sm pb-2">Demos seleccionados</h4>
      <div>
        <h3>Mis DEMOS</h3>

        <div className="flex flex-col justify-between p-4 leading-normal border rounded-md my-2">
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {renderSelectedDemos}
          </p>
        </div>
      </div>
      form
    </form>
  );
};

export default RequestDemoForm;
