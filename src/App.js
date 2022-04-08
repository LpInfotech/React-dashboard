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
    this.state = { isShowDropdown: false, isOpen: false, items: [], error: null, isLoading: false,isNotification: false,notificationArr:[]};
  }

  async componentDidMount() {
    const siteUrl = `http://localhost:3004/site`;
    const notificationUrl = "http://localhost:3004/message";
    try {
      Promise.all([
        await fetch(siteUrl).then(response => response.json()).then(data => {
        this.setState({ items: data, isLoading: true, error: null });
      }),
      await fetch(notificationUrl).then(response => response.json()).then(data => {
        this.setState({ notificationArr: data, isLoading: true, error: null });
      })
      ])
    } catch (error) {
      this.setState({ isLoading: true, error });
      console.error(error);
    }
  }

  handleSideMenu = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  handleNotification = () => {
    this.setState(prevState => ({ isNotification : !prevState.isNotification  }));
  }

  handleDropdown = () => {
    this.setState(prevState => ({ isShowDropdown: !prevState.isShowDropdown }));
  }

  render() {
    const {items,error,isLoading,isNotification,notificationArr} = this.state
    if(error){
      return <div className="text-danger">Error:{error.message} </div>
    }else if(!isLoading){
    return <div className="text-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
    }
    return (
      <BrowserRouter>
        <div className="row gx-0">
          <div className="col-2"><AsideNav openMenu={this.state.isOpen} navData={items}/></div>
          <div className={`${this.props.openMenu ? 'col-10' : 'col-12'}`}>
          <Header menu={this.state.isShowDropdown} handleSideBar={this.handleSideMenu} handleDropdown={this.handleDropdown}
           handleNotification={this.handleNotification} isNotification={isNotification} notificationArr={notificationArr} />
            <main style={this.state.isOpen ? { marginLeft: '0%', transition: 'all 0.5s' } : { marginLeft: '16.66666667%', transition: 'all 0.5s' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/offer" element={<Offer />} />
                <Route path="/order" element={<Order />} />
                <Route path="/product" element={<Product />} />
                <Route path="/statistic" element={<Statistic />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="*" element={
                <div style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </div>
              }/>
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
