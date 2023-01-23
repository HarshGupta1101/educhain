import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses, CoursePage} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from './pages/About';

function App({ currentUser, nearConfig, wallet }) {
  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} nearConfig={nearConfig} wallet={wallet} />
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses" element = {<CoursePage />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/about" element = {<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
