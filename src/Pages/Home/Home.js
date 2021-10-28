import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Footer from '../../Components/Footer/Footer';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
