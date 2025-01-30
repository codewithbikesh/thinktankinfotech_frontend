import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import WhyChooseUs from '../components/home/WhyChooseUs';
// import Testimonials from '../components/home/Testimonials';
import PopUp from '../components/home/PopUp';
import ClientCard from '../components/our-clients/ClientCard';
import banner  from '../assets/images/hero_background.png';
import CallToAction from "../components/services/CallToAction";
import  WDCard from '../components/home-cards/WebDevelopmentCard';
const Home = () => {
  return (
    <div>
       <Hero
        title1="Transform Your Vision Into A Digital Reality With The Best IT Company In Nepal"
        image={banner}
        serviceLink="/services"
        contactLink="/contact"
        buttonText1="Explore Services"
        buttonText2="Let's Get Started"
      />
      <Services />
      <WDCard />
      <WhyChooseUs />
      {/* <Testimonials /> */}
       <ClientCard />
       <PopUp />
       <CallToAction />
    </div>
  );
};

export default Home;