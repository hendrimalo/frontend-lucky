import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/organism/Navbar';
import Jumbotron from '../components/organism/Jumbotron';
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
      <br />
      <br />
      <br />
      <br />
      <Jumbotron />
      <StepReservation />
      <br />
      <br />
      <br />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
