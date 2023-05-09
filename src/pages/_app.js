import UserProvider from '@/context/user/UserProvider';
import '@/styles/globals.css';

// @splidejs/react-splide styles
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

const App = ({ Component, pageProps }) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
);

export default App;
