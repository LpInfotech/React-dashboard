import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { Component } from 'react';
import Header from './components/Header/Header';
import AsideNav from './components/AsideNav/AsideNav';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Offer from './pages/Offer/Offer';
import Product from './pages/Product/Product';
import Statistic from './pages/Statistic/Statistic';
import Stock from './pages/Stock/Stock';
import Order from './pages/Order/Order';


export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {isShowDropdown:false, isOpen:false};
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleSideMenu = this.handleSideMenu.bind(this)
  }

  handleSideMenu = () => {
    this.setState(prevState => ({isOpen:!prevState.isOpen}));
  }

  handleDropdown = () => {
    this.setState(prevState => ({isShowDropdown:!prevState.isShowDropdown}));
  }

  render() {
    return (
<BrowserRouter>
  <div className="row gx-0">
    <div className="col-2"><AsideNav openMenu={this.state.isOpen}/></div>
    <div className={`${this.props.openMenu ? 'col-10' : 'col-12'}`}><Header menu={this.state.isShowDropdown} handleSideBar={this.handleSideMenu} handleDropdown={this.handleDropdown}/>
    <main style={this.state.isOpen ? {marginLeft:'0%',transition:'all 0.5s'} : {marginLeft:'16.66666667%',transition:'all 0.5s'}}>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/offer" element={<Offer/>}/>
    <Route path="/order" element={<Order/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/statistic" element={<Statistic/>}/>
    <Route path="/stock" element={<Stock/>}/>
  </Routes>
    </main>
    </div>
  </div>
  <Footer/>
</BrowserRouter>
    )
  }
}

export default App
