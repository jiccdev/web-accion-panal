import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const LayoutPage = ({ children }) => {
  return (
    <div className="mx-auto relative mt-16 xl:mt-24 overflow-hidden w-100 bg-gray-100">
      {/* HEADER PAGE */}
      <Header />

      {/* MAIN CONTENT */}
      {children}

      {/* FOOTER PAGE */}
      <Footer />
    </div>
  );
};

export default LayoutPage;
