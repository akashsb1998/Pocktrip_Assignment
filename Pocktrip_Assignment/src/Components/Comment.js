import React, { Component } from 'react';
import { Container , Row , Col } from 'reactstrap';

import { SocialIcon } from 'react-social-icons';

import M from 'materialize-css';

import Avatar from '@atlaskit/avatar';
import Comment, {
  CommentAuthor,
  CommentTime,
  CommentAction,
  CommentEdited,
} from '@atlaskit/comment';


import avatarImg from './Avatar.png';

class Commentt extends Component{

    componentDidMount(){
    M.Sidenav.init(this.sidenav);
  }



  render(){

    const listi = this.props.comments;

    const list = listi.map(temp => {
          return(
               <Comment
                    avatar={<Avatar src={avatarImg} label="Atlaskit avatar" size="medium" />}
                    author={<CommentAuthor>{temp.name}</CommentAuthor>}
                    type="author"
                    edited={<CommentEdited>Edited</CommentEdited>}
                    restrictedTo="Restricted to Admins Only"
                    time={<CommentTime>30 August, 2016</CommentTime>}
                    content={
                      <p>
                        {temp.value}
                      </p>
                    }
                    actions={[
                      <CommentAction>Reply</CommentAction>,
                      <CommentAction>Edit</CommentAction>,
                      <CommentAction>Like</CommentAction>,
                    ]}
                  />
            );
    });


     return (

        <div className = "normpad">

              {list}

        </div>

    )
  }


}
export default Commentt;
