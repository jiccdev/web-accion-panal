import React, { useContext } from 'react';
import { UserContext } from '@/context/user/UserContext';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Button from '@/components/Button/Button';

const RequestDemoForm = ({
  selectedDemo,
  selectedAdvancedDemo,
  selectedLandingDemo,
}) => {
  const { contextData } = useContext(UserContext);
  const [state, dispatch] = contextData;

  const renderSelectedDemos = [
    selectedDemo,
    selectedAdvancedDemo,
    selectedLandingDemo,
  ].map((demo, idx) => (
    <ul key={idx}>
      <li>{demo}</li>
    </ul>
  ));

  /** Handle Name change */
  const handleNameChange = (ev) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        ...state.user,
        name: ev.target.value,
      },
    });
  };

  /** Handle Phone change */
  const handlePhoneChange = (ev) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        ...state.user,
        phone: ev.target.value,
      },
    });
  };

  /** Handle Email change */
  const handleEmailChange = (ev) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        ...state.user,
        email: ev.target.value,
      },
    });
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();
    console.log('sending...');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4 className="text-sm pb-2">Demos seleccionados</h4>
      <div>
        <h3>Mis DEMOS</h3>

        <div className="flex flex-col justify-between p-4 leading-normal border rounded-md my-2">
          {renderSelectedDemos}
        </div>
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-500 text-sm font-ligth mb-2"
          htmlFor="name"
        >
          Nombre
        </label>
        <input
          className="w-full px-4 py-2 border-gray-300 rounded-full focus:outline-none border-2 focus:shadow-sm focus:border-indigo-500"
          type="text"
          id="name"
          name="name"
          maxLength={50}
          value={state?.user?.name}
          onChange={handleNameChange}
          placeholder="Escriba su nombre"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-500 text-sm font-ligth mb-2"
          htmlFor="phone"
        >
          Teléfono
        </label>
        <input
          className="w-full px-4 py-2 border-gray-300 rounded-full focus:outline-none border-2 focus:shadow-sm focus:border-indigo-500"
          type="phone"
          id="phone"
          name="phone"
          maxLength={9}
          value={state?.user?.phone}
          onChange={handlePhoneChange}
          placeholder="+569 8765 432"
          readOnly
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-500 text-sm font-ligth mb-2"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          className="w-full px-4 py-2 border-gray-300 rounded-full focus:outline-none border-2 focus:shadow-sm focus:border-indigo-500"
          type="email"
          id="email"
          name="email"
          value={state?.user?.email}
          onChange={handleEmailChange}
          placeholder="ejemplo@gmail.com"
          readOnly
        />
      </div>

      <div className="mt-8 flex justify-center">
        <Button type="submit">Solicitar Demos</Button>
      </div>
    </form>
  );
};

export default RequestDemoForm;
