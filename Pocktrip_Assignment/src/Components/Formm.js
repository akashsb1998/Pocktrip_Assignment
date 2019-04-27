import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import { SocialIcon } from 'react-social-icons';

import M from 'materialize-css';


class Formm extends Component{

    componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
     return (

        <div className = " grey lighten-3 Formm">

       
  <div className="row">
    <form className="col s6">

     <h4 className = "center">Continue without Login</h4>

     
      <div className="row">
        <div className="input-field less-marg col s12">
          <input id="fn" type="text" className="validate" />
          <label for="fn">FullName</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field less-marg col s12">
          <input id="E-mail" type = "email"  className="validate" />
          <label for="E-mail">E-mail</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field less-marg col s12">
          <input id="Location" type="text" className="validate" />
          <label for="Location">Location</label>
        </div>
      </div>
     
    </form>

    <div className = "col s6">

     <h4 className = "center">Login from existing account</h4>

        <div className = "center normpad">
          <SocialIcon className = "marg-sm" url="http://twitter.com/jaketrent" />
          <SocialIcon className = "marg-sm" url="http://facebook.com/jaketrent" />
          <SocialIcon className = "marg-sm" url="http://google.com/jaketrent" />
        </div>

        
        </div>

        </div>

        </div>

    )
  }


}
export default Formm;
