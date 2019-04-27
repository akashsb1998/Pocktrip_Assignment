import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import { SocialIcon } from 'react-social-icons';

import M from 'materialize-css';


class Dangerbutton extends Component{

    componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
     return (

        <div className = "normpad">
          <div class="fixed-action-btn horizontal">
            <a onClick = {this.props.del} class="btn-floating btn-large pulse red">
              <i class="large material-icons">delete</i>
            </a>
          </div>
        </div>

    ) 
  }


}
export default Dangerbutton;