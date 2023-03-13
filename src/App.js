import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, SingleCourse, Cart, Courses, CoursePage } from './pages';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import CourseCompletedPage from './pages/CourseCompletedPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<CoursePage />} />
        <Route path='/courses/:id' element={<SingleCourse />} />
        <Route path='/category/:category' element={<Courses />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/completedcourses' element={<CourseCompletedPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
