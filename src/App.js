import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import AddService from './Components/AddService/AddService';
import ContactUs from './Components/ContactUs/ContactUs';
import Login from './Components/Login/Login';
import ManageBookings from './Components/ManageBookings/ManageBookings';
import MyBooking from './Components/MyBooking/MyBooking';
import Navigation from './Components/Navigation/Navigation';
import NotFound from './Components/Notfound/NotFound';
import Register from './Components/Register/Register';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';

function App() {
  const Styles = {
    color: '#0e1133',
  };
  return (
    <div style={Styles} className="App overflow-hidden">
      <AuthProvider>
        <div className="App">
          <BrowserRouter>
            <Navigation></Navigation>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/service/:id">
                <ServiceDetails></ServiceDetails>
              </Route>
              <Route path="/about">
                <AboutUs></AboutUs>
              </Route>
              <Route path="/contact">
                <ContactUs></ContactUs>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/bookings">
                <MyBooking></MyBooking>
              </Route>
              <Route path="/manageBooking">
                <ManageBookings></ManageBookings>
              </Route>
              <Route path="/addService">
                <AddService></AddService>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
