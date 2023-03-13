import React from 'react';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Course from '../components/Course';
import { PYTHON } from '../utils/constants';
import { useCoursesContext } from '../context/courses_context';

const CourseCompletedPage = () => {
  const { courses } = useCoursesContext();
  return (
    <CoursesPageWrapper>
      <div className='container'>
        <h1 className='mt-5 fw-bold'>Completed Courses</h1>
        <div className='category-based-list'>
          {courses
            .filter((course) => course.category === PYTHON)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
      <Footer />
    </CoursesPageWrapper>
  );
};

const CoursesPageWrapper = styled.div`
  .category-based-list {
    margin-top: 32px;
  }
  @media screen and (min-width: 600px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 992px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1400px) {
    .category-based-list {
      display: grid;
      gap: 26px;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default CourseCompletedPage;
