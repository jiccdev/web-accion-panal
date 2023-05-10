import React, { useContext, useState } from 'react';
import { UserContext } from '@/context/user/UserContext';
import Button from '@/components/Button/Button';
import Alert from '@/components/Alert/Alert';
import { generateValidationCode } from '@/utils';

const UserForm = () => {
  const { contextData } = useContext(UserContext);
  const [state, dispatch] = contextData;
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
  });
  const [successMsg, setSuccessMsg] = useState('');

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

  /** Handle Range change */
  const handleRangeChange = (value) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        ...state.user,
        // range: value,
      },
    });
  };

  /** Handle Terms and Conditions change */
  const handleTermsChange = (ev) => {
    dispatch({
      type: 'UPDATE_USER',
      payload: {
        ...state.user,
        terms: ev.target.checked,
      },
    });
  };

  const onFormSubmit = (ev) => {
    ev.preventDefault();

    // ✅
    if (Object.values(state?.user).includes('') || state.user.terms === false) {
      setErrorMsg({
        allFieldRequierd:
          'Por favor, completa todos los campos y acepta los terminos y condiciones',
      });
      return;
    }

    dispatch({
      type: 'CREATE_VALIDATION_USER_CODE',
      payload: {
        uniqueCode: generateValidationCode(),
      },
    });

    // ✅
    setErrorMsg({
      allFieldRequierd: '',
    });
    setSuccessMsg('Se enviara un codigo de validacion a su email');
  };

  // console.log('UserForm', state);

  return (
    <form onSubmit={onFormSubmit} className="w-full bg-white p-5">
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
        />
      </div>

      {errorMsg.allFieldRequierd && (
        <Alert errorMsg={errorMsg.allFieldRequierd} />
      )}

      {successMsg && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
          role="alert"
        >
          {successMsg}
        </div>
      )}

      {/* <div className="my-8">
        <div className="flex flex-col items-center">
          <small className="text-sm font-light mb-4 text-gray-500">
            Selecciona un rango de propiedades:
          </small>
          <div className="flex justify-center space-x-4">
            <button
              className={`${
                state.user.range === 1
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md text-sm`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(1);
              }}
            >
              1-25
            </button>
            <button
              className={`${
                state.user.range === 2
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md text-sm`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(2);
              }}
            >
              25-50
            </button>
            <button
              className={`${
                state.user.range === 3
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md text-sm`}
              onClick={(ev) => {
                ev.preventDefault();
                handleRangeChange(3);
              }}
            >
              50-75
            </button>
            <button
              className={`${
                state.user.range === 4
                  ? 'bg-amber-500 text-white'
                  : 'bg-gray-200 text-gray-700'
              } px-4 py-2 rounded-md text-sm`}
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
            {state.user.range === 1
              ? '1-25'
              : state.user.range === 2
              ? '25-50'
              : state.user.range === 3
              ? '50-75'
              : '75-100'}
          </small>
        </div>
      </div> */}

      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem] mt-5">
        <input
          id="terms"
          type="checkbox"
          value={state.user.terms}
          onChange={handleTermsChange}
          className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-amber-500 checked:bg-amber-500 checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#ca6f3b] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-amber-500 dark:checked:bg-amber-500"
        />
        <label htmlFor="terms" className="text-sm text-gray-500 text-center">
          Al continuar estas aceptando los
          <a
            href="#"
            className="border-gray-500 text-amber-500 hover:text-amber-600"
          >
            {' '}
            términos y condiciones{' '}
          </a>
        </label>
      </div>

      <div className="mt-8 flex justify-center">
        <Button type="submit">Enviar</Button>
      </div>
    </form>
  );
};

export default UserForm;
