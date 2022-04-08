import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import './offer.css';
export class Offer extends Component {
  render() {
    return (
      <section id="offer">
      <div className="container py-5">
        <div className="row">
          <div className="col-4"><Card headerProps={"bg-light border-0 shadow-sm"} bodyIcon={'$'} bodyTitle={'18 /'} month={'month'} list={'test,test'}  title={'Free'} icon={"fa-solid fa-lock-open"} text={"Lorem ipsum dolor"}/></div>
          <div className="col-4"><Card headerProps={"bg-light border-0 shadow-sm"} list={'test,test'} month={'month'} bodyTitle={'18 /'} bodyIcon={'$'} title={'Pro'} icon={"fas fa-lock fa-fw"} text={"Lorem ipsum dolor"}/></div>
          <div className="col-4"><Card headerProps={"bg-light border-0 shadow-sm"} list={'test,test'} month={'month'} bodyTitle={'18 /'} bodyIcon={'$'} title={'Enterprise'} icon={"fas fa-lock fa-fw"} text={"Lorem ipsum dolor"}/></div>
        </div>
      </div>
      </section>
    )
  }
}

export default Offer