import React, { useContext, useState } from 'react';
import { UserContext } from '@/context/user/UserContext';
import ContactFormServices from '@/services/ContactForm';
import ButtonPrimary from '@/components/Button/ButtonPrimary';
import Button from '@/components/Button/Button';
import { iconsList } from '@/components/icons';

const RequestDemoForm = ({
  selectedDemo,
  selectedAdvancedDemo,
  selectedLandingDemo,
}) => {
  const { contextData } = useContext(UserContext);
  const [state, dispatch] = contextData;
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState({
    allFieldRequierd: '',
    serverEmailError: '',
  });
  const { MdWeb } = iconsList;

  const renderSelectedDemos = [
    selectedDemo,
    selectedAdvancedDemo,
    selectedLandingDemo,
  ].map((demo, idx) => (
    <div key={idx} className="border-l-4 my-1.5 pl-2 border-amber-500">
      {' '}
      {demo ? (
        <span>
          <MdWeb className="text-gray-400" /> {demo}
        </span>
      ) : null}{' '}
    </div>
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

  const onFormSubmit = async (ev) => {
    ev.preventDefault();

    try {
      setLoading(true);
      const response = await ContactFormServices.sendFormToRealtor(
        state.user?.name,
        state.user?.email,
        state.user?.phone,
        'ign.casrod59@gmail.com', // realtor email
        `${selectedDemo || ''} - ${selectedAdvancedDemo || ''} - ${
          selectedLandingDemo || ''
        }`
      );

      if (response.success === 'true') {
        setLoading(false);
        setErrorMsg({
          allFieldRequierd: '',
          serverEmailError: '',
        });

        setSuccessMsg(
          'Solicitud enviada exitosamente, dentro de poco de contactaremos'
        );
        setTimeout(() => {
          setSuccessMsg('');
        }, 4000);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <form onSubmit={onFormSubmit} name="FormSubmit" className="px-2">
      <h4 className="text-sm pb-2">Demos seleccionados</h4>
      <div>
        <h3>Mis DEMOS</h3>

        <div className="flex flex-col justify-between leading-normal rounded-md mb-3">
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

      {successMsg && (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50"
          role="alert"
        >
          {successMsg}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <Button type="submit">
          <span className="max-h-10">
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-4 h-4 text-gray-100 animate-spin fill-white"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Cargando...</span>
              </div>
            ) : (
              'Solicitar mis demos'
            )}
          </span>
        </Button>
      </div>
    </form>
  );
};

export default RequestDemoForm;
