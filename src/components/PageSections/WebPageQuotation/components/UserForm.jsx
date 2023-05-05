import React, { useContext, useState } from 'react';
import { UserContext } from '@/context/user/UserContext';
import Button from '@/components/Button/Button';

const UserForm = () => {
  const { contextData } = useContext(UserContext);
  const [
    user,
    setUser,
    basicDemos,
    advancedDemos,
    setBasicDemos,
    setAdvancedDemos,
  ] = contextData;
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (value) => {
    setRangeValue(value);
  };

  return (
    <form className="w-full bg-white p-5">
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
          placeholder="Escriba su nombre"
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
          placeholder="+569 8765 432"
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
          placeholder="ejemplo@gmail.com"
        />
      </div>

      <div className="my-8">
        <div className="flex flex-col items-center">
          <small className="text-sm font-light mb-4 text-gray-500">
            Selecciona un rango de propiedades:
          </small>
          <div className="flex justify-center space-x-4">
            <button
              className={`${
                rangeValue === 1
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(1);
              }}
            >
              1-25
            </button>
            <button
              className={`${
                rangeValue === 2
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(2);
              }}
            >
              25-50
            </button>
            <button
              className={`${
                rangeValue === 3
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(3);
              }}
            >
              50-75
            </button>
            <button
              className={`${
                rangeValue === 4
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(4);
              }}
            >
              75-100
            </button>
          </div>
          <small className="mt-4 text-sm font-light text-gray-500">
            Has seleccionado el rango:{' '}
            {rangeValue === 1
              ? '1-25'
              : rangeValue === 2
              ? '25-50'
              : rangeValue === 3
              ? '50-75'
              : '75-100'}
          </small>
        </div>
      </div>

      <div className="flex items-center mt-6">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 mt-4 text-sm font-light text-gray-500"
        >
          Al continuar estas aceptando los términos y condiciones y la politica
          de privacidad
        </label>
      </div>

      <div className="mt-8 flex justify-center">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default UserForm;
