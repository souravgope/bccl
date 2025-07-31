'use client'
import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutSection from './components/About';
import News from './components/News';
import Statistics from './components/Statistics';
import Links from './components/Links';
import Footer from './components/Footer';
import BusinessOperations from './components/Operations';
import EventsSection from './components/Events';
import SocialMediaSection from './components/SocialMedia';

const BCCLWebsite = () => {
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Header */}
      <Header/>

      {/* Navigation */}
      <Navigation/>

      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <AboutSection/>

      {/* Business Operations */}
      <BusinessOperations/>

      {/* Latest News & Updates */}
      <News/>

      {/* Statistics Section */}
      <Statistics/>

      {/* Events */}
      <EventsSection/>

      {/* Social Media */}
      <SocialMediaSection/>

      {/* Quick Links */}
      <Links/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default BCCLWebsite;