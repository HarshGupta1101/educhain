import React from 'react';
import Hero from '../components/Hero';
import CoursesList from '../components/CourseList';
import CategoriesList from '../components/CategoriesList';
import About from '../components/About';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList />
      <CategoriesList />
      <About/>
      <Footer/>
    </div>
  );
};

export default HomePage;
