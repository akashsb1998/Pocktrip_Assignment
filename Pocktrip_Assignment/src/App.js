import React , {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Nav from "./Components/Nav";
import Textarea from "./Components/Textarea";
import Formm from "./Components/Formm";
import Para from "./Components/Para";
import Commentt from "./Components/Comment";

import ls from 'localstorage';

import "./index.css";
import Dangerbutton from "./Components/Dangerbutton";

import { Comments } from "./Data/DemoData.json";


class App extends Component{

   state = {
    comments : []
   }
  
  componentDidMount(){
      if(localStorage.getItem("comments"))
      {
        var com = JSON.parse(localStorage.getItem("comments"));
        this.setState({comments : com});
      }
      else
      {
        this.state.comments = Comments;
      }
  }

  handelSubmit = (e) => {
       
    // e.preventDefault();
     var text = document.getElementById("textarea1").value;
     if(text != "")
     {
        var name = prompt("please enter your name");


        if(name != null)
        {
          this.state.comments.push(
            {
              "name" : name,
              "value" : text
            }
          );

        document.getElementById("textarea1").value = "";

         localStorage.setItem("comments" , JSON.stringify(this.state.comments));
         document.location.reload()
        }
        
     }

     // console.log(text);

     // console.log(localStorage.getItem("comments"));

  }

  handelDelete = () => {
    localStorage.clear();
    document.location.reload()
  }


  render(){

       //console.log(this.comments);
       return (
        <div className = "marg-lg-bottom border">
 
        <Dangerbutton del = {this.handelDelete} />

      <div className = "" >

      <Nav/>

      <div className = "container normpad">
      <Textarea handelSubmit = {this.handelSubmit}/>
      <Formm/>
      

      <div className = "container marg-md-top">
      <Para />
       </div> 


      <div className = "container normpad marg-md-top grey marg-lg-bottom lighten-2">
      <Commentt comments = {this.state.comments} />
      </div>
      </div>



      </div>

    </div>
  );
  };
 
}

export default App;
