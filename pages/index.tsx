import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organism/Navbar';
import Banner from '../components/organism/Banner';
import StepReservation from '../components/organism/StepReservation';
import Footer from '../components/organism/Footer';
import Pricing from '../components/organism/Pricing';

const Home = function () {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <StepReservation />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
