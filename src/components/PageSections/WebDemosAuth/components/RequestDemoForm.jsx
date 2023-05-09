import React from 'react';
import ButtonPrimary from '@/components/Button/ButtonPrimary';

const RequestDemoForm = ({ selectedDemo, state }) => {
  console.log(state);

  return (
    <form>
      <h4 className="text-sm pb-2">Demos seleccionados</h4>
      <div>
        <h3>Mis DEMOS</h3>

        <div class="flex flex-col justify-between p-4 leading-normal border rounded-md my-2">
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {selectedDemo}
          </p>
        </div>
      </div>
      form
    </form>
  );
};

export default RequestDemoForm;
