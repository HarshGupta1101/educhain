import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses, CoursePage} from "./pages";
import Navbars from "./components/Navbars";
import Sidebar from "./components/Sidebar";
import AboutUs from './components/About';

const App = ({ currentUser, nearConfig, wallet }) => {
  return (
    <BrowserRouter>
      <Navbars currentUser={currentUser} nearConfig={nearConfig} wallet={wallet}/>
      <Sidebar />
      <Routes>
        <Route exact path = "/" element = {<Home />} />
        <Route exact path = "/courses" element = {<CoursePage />} />
        <Route exact path = "/courses/:id" element = {<SingleCourse />} />
        <Route exact path = "/category/:category" element = {<Courses />} />
        <Route exact path = "/cart" element = {<Cart />} />
        <Route exact path = "/about" element = {<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
