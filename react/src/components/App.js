import React, { Component } from 'react';
import {HashRouter, Route } from 'react-router-dom'
import './App.css';
import {StoreList, StoreAllDetails, CharityAllDetails} from "../redux/Containers.js";
import NavBar from "./navBar/NavBar";
import Qr from "./Qr";



class App extends Component {
  render() {
    return (

        <div>
            <NavBar />
        <HashRouter>
            <div>

                <Route exact path="/" component={StoreList} />
                <Route path="/store/:storeId" component={StoreAllDetails} />
                <Route path="/charity" component={CharityAllDetails} />
                <Route path="/qr" component={Qr} />
            </div>
        </HashRouter>
        </div>
    )
  }
}

export default App;
