import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './componenet/Home/Home';
import Listing from './componenet/listing/listingApi';


const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
          
            <Footer/>
        </BrowserRouter>
    )
}


export default Routing