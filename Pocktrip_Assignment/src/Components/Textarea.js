import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import M from 'materialize-css';


class Textarea extends Component{

    componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
     return (

        <div>

        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s10">
              <i className="material-icons prefix">account_circle</i>


                <textarea id="textarea1" class="materialize-textarea"></textarea>
                <label for="textarea1">Leave a Comment....</label>



              </div>

              <div className = "s2">
                <button onClick = {this.props.handelSubmit} className = "btn-floating marg-sm-top transparent "><i class="material-icons prefix  light-blue-text darken-1">send</i></button>
              </div>
            </div>
          </form>
        </div>
           
        </div>

    )
  }


}
export default Textarea;
