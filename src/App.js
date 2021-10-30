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
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Register from './Components/Register/Register';
import Services from './Components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import Home from './Pages/Home/Home';
import PrivateRoute from './PrivetRoute/PrivateRoute';

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

              <PrivateRoute path="/placeorder/:id">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
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
              <PrivateRoute path="/bookings">
                <MyBooking></MyBooking>
              </PrivateRoute>
              <PrivateRoute path="/manageBooking">
                <ManageBookings></ManageBookings>
              </PrivateRoute>
              <PrivateRoute path="/addService">
                <AddService></AddService>
              </PrivateRoute>
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
