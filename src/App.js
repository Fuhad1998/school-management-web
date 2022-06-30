import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddServices from "./Component/AddServices/AddServices";
import AllCourses from "./Component/AllCourses/AllCourses";
import Enroll from "./Component/Enroll/Enroll";
import EnrollStudent from "./Component/EnrolledStudent/EnrollStudent";
import Banner from "./Component/HomePage/Banner/Banner";
import Courses from "./Component/HomePage/Courses/Courses";
import Event from "./Component/HomePage/Event/Event";
import Footer from "./Component/HomePage/Footer/Footer";
import Header from "./Component/HomePage/Header/Header";
import Homes from "./Component/HomePage/Homes/Homes";
import Instructors from "./Component/HomePage/Instructors/Instructors";
import Login from "./Component/Login/Login";
import MakeAdmin from "./Component/MakeAdmin/MakeAdmin";
import OurServices from "./Component/OurServices/OurServices";
import Register from "./Component/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Header></Header>
        <Routes>
          
          <Route path="/ourServices" element={<OurServices />}></Route>
          <Route path="/AllCourses" element={<AllCourses />}></Route>
          <Route path="/enrollStudent" element={<EnrollStudent />}></Route>
          <Route path="/makeAdmin" element={<MakeAdmin />}></Route>
          <Route path="/addServices" element={<AddServices />}></Route>
          <Route path="/enroll/:id" element={<Enroll />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/courses" element={<Courses />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/banner" element={<Banner />}></Route>
          <Route path="/instructors" element={<Instructors />}></Route>
          <Route path="/homes" element={<Homes />}></Route>
          <Route path="/" element={<Homes />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
