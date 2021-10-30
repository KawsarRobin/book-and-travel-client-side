import React from 'react';
import Banner from '../../Components/Banner/Banner';
import ChooseUs from '../../Components/ChooseUs/ChooseUs';
import Discount from '../../Components/Discount/Discount';
import Footer from '../../Components/Footer/Footer';
import Services from '../../Components/Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <ChooseUs></ChooseUs>
      <Discount></Discount>
      <Footer></Footer>
    </div>
  );
};

export default Home;
