import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './card.css';

export default class Card extends Component {
  static propTypes = {}


  render() {
      
    return (
<div className={`card ${this.props && this.props.headerProps}`}>
  {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
   <h5 className="card-title">{this.props.title}</h5>
   {this.props.bodyTitle && <h1>{this.props.bodyIcon && <span>{this.props.bodyIcon}</span>}{this.props.bodyTitle}{this.props.month && <small className="fs-6">{this.props.month}</small>}</h1>}
    <p className="card-text">{this.props.text}</p>
    <Link to="/" className="btn btn-primary">Go somewhere</Link>
  </div>
</div>
    )
  }
}
