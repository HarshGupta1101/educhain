import React from 'react';
import Hero from '../components/Hero';
import CoursesList from '../components/CourseList';
import CategoriesList from '../components/CategoriesList';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className='holder'>
      <Hero />
      <CoursesList page = "home"/>
      <CategoriesList />
      <Footer/>
    </div>
  );
};

export default HomePage;
