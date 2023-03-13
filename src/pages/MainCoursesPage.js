import React from 'react';
// import Hero from "../components/Hero";
import CoursesList from '../components/CourseList';
import CategoriesList from '../components/CategoriesList';
import Footer from '../components/Footer';

const CoursePage = () => {
  return (
    <div className='holder'>
      <CoursesList page='course'/>
      <CategoriesList  />
      <Footer />
    </div>
  );
};

export default CoursePage;
