import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import { SocialIcon } from 'react-social-icons';

import M from 'materialize-css';


class Para extends Component{

    componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }

  render(){
     return (

        <div className = "normpad">

              Anti-technique: If he regards it egoistically as a new "experience," then it will have to share the transient character of all experience and come to an inevitable end. If, however, he has been taught and trained by metaphysical reflection to regard it impersonally as a realization of something which was always there, which always was and shall be, and if he is morally ready for it--if, in short, he recognizes it as the experience of his own self to which he did not attend before--then it may not lapse.

        </div>

    )
  }


}
export default Para;
