import React, { Component } from 'react';
import Card from '../../components/Card/Card';
import './offer.css';
export class Offer extends Component {
  render() {
    return (
      <section id="offer">
      <div className="container py-5">
        <div className="row">
        <div className="col-3"><Card headerProps={"border-0 shadow"} title={'Free'} bodyTitle={'0 /'} bodyIcon={'$'} month={'month'} icon={"fa-solid fa-lock-open"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/></div>
          <div className="col-3"><Card headerProps={"border-0 shadow"} bodyIcon={'$'} bodyTitle={'18 /'} month={'month'}   title={'Basic'} icon={"fa-solid fa-lock-open"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/></div>
          <div className="col-3"><Card headerProps={"border-0 shadow"} month={'month'} bodyTitle={'18 /'} bodyIcon={'$'} title={'Pro'} icon={"fas fa-lock fa-fw"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/></div>
          <div className="col-3"><Card headerProps={"border-0 shadow"} month={'month'} bodyTitle={'18 /'} bodyIcon={'$'} title={'Enterprise'} icon={"fas fa-lock fa-fw"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}/></div>
        </div>
      </div>
      </section>
    )
  }
}

export default Offer