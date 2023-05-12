import axios from 'axios';

const ContactFormServices = {
  sendFormToUser: async (name, userEmail, phone, uniqueCode) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${userEmail}`,
      {
        Nombre: name,
        Telefono: phone,
        Correo: userEmail,
        Codigo: uniqueCode,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendFormToRealtor: async (name, userEmail, phone, realtorEmail, demos) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
        Demos_Seleccionadas: demos,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },

  sendContactForm: async (name, userEmail, phone, realtorEmail) => {
    const response = await axios.post(
      `https://formsubmit.co/ajax/${realtorEmail}`,
      {
        Nombre: name,
        Correo: userEmail,
        Telefono: phone,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }
    );
    return response.data;
  },
};

export default ContactFormServices;
