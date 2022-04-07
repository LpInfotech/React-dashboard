import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './asideNav.css';

export default class AsideNav extends Component {
  render() {
    return (
      <aside className={`bg-primary ${this.props.openMenu ? 'close' : ''}`}>
        <nav className="navbar py-3 d-flex justify-content-center mb-5">
          <NavLink className="navbar-brand text-white m-0" to="/"><h4 className="mb-0 fw-bold">React-Dashboard</h4></NavLink>
        </nav>

        <ul className="nav flex-column ps-3">
          <li className="nav-item">
            <NavLink className="nav-link text-white py-3" to="/">
              <span><i className="fa-solid fa-chart-line ms-2 me-3"></i></span>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white py-3" to="/order">
              <span><i className="fa-solid fa-cart-shopping ms-2 me-3"></i></span>
              <span>Order</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white py-3" to="/statistic">
              <span><i className="fa-solid fa-chart-pie ms-2 me-3"></i></span>
              <span>Statistic</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white py-3" to="/product">
              <span><i className="fa-solid fa-box-open ms-2 me-3"></i></span>
              <span>Product</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white py-3" to="/stock">
              <span><i className="fa-solid fa-money-bill-trend-up ms-2 me-3"></i></span>
              <span>Stock</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white py-3" to="/offer">
              <span><i className="fa-solid fa-tag ms-2 me-3"></i></span>
              <span>Offer</span>
            </NavLink>
          </li>
        </ul>
      </aside>

    )
  }
}
