import UserProvider from '@/context/user/UserProvider';
import '@/styles/globals.css';

const App = ({ Component, pageProps }) => (
  <UserProvider>
    <Component {...pageProps} />;
  </UserProvider>
);

export default App;
