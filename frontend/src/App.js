import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useEffect } from 'react'
import Header from "./components/layout/Header"
import Footer from "./components/layout/Footer"
import Home from "./components/Home"
import ProductDetails from "./components/product/ProductDetails"
import Login from './components/user/Login'
import Register from './components/user/Register'
import {loadUser} from './actions/userActions'
import Profile from './components/user/Profile'
import store from './store'
import ProtectedRoute from './components/route/ProtectedRoute'
import UpdateProfile from './components/user/UpdateProfile'
function App() {

  useEffect(() => {
    store.dispatch(loadUser())
  },[])

  return (
    <Router>
       <div className="App">
        <Header/>
        <div className="container container-fluid">
        <Route path="/" component={Home} exact />
        <Route path="/search/:keyword" component={Home} />
        <Route path="/product/:id" component={ProductDetails} exact />
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <ProtectedRoute path="/me" component={Profile} exact />
        <ProtectedRoute path="/me/update" component={UpdateProfile} exact />
        </div>
        <Footer/>
    </div>
    </Router>
   
  );
}

export default App;
