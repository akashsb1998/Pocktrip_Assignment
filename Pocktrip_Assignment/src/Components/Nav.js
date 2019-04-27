import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import M from 'materialize-css';


class Nav extends Component{

    componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
     return (

        <div>

            <div className="z-depth-2 redd normpad">

                    <div className = "row">

                        <div className = "col s-6">
                           
                            <h6>ALLCOMMENTS (20)</h6>
                        
                        </div>

                       <div className = "col s-6">
                            
                            <div className = "right">
                            <button className="none"><span className = "marg-right">Sort</span></button>
                            <button className="none"><span>Upvoted</span></button>
                            </div>

                        </div>

                    </div>

            </div>

        </div>

    )
  }


}

export default Nav;
