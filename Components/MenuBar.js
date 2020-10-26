import { render } from "@testing-library/react";
import React, { Component } from "react";
import ReactDOM from 'react-dom'
import Mic from "./Images/Mic.png"
import Cl from "./Images/Culture.PNG"
import Cr from "./Images/Current.PNG"
import El from "./Images/Election.PNG"
import Fb from "./Images/FB.png"
import In from "./Images/Innovation.PNG"
import It from "./Images/Insta.png"
import Sb from "./Images/SearchBar.png"
import Tw from "./Images/Twitter.png"
import Wb from "./Images/WellBeing.PNG"
import Yt from "./Images/YT.png"

export default class Amenu extends React.Component{
    constructor(props){
        super(props)
        this.state={
            DisplayMenu:false,
            Displaybar:false
        }
        this.showMe=this.showMe.bind(this);
        this.showMe=this.showMe.bind(this);
    }
    
    showMe=()=>{
        const DisMenu=this.state.DisplayMenu;
        this.setState({DisplayMenu:!DisMenu})
    }
    showBar=()=>{
        const DisBar=this.state.Displaybar;
        this.setState({Displaybar:!DisBar})
    }
    render(){
    return(   
    <div id='Main'> 
        <div>
        <img src={Sb} onClick={this.showBar} id='search'></img>
        </div>
        
        <div class='Flex'>
        
        <img src={Mic}  id='Mic'></img>

        <button id='MenuB' onClick={this.showMe}>Menu</button>
        {this.state.Displaybar &&  <ShowSBar/>}
        </div>
        <div>
         {this.state.DisplayMenu &&  <ShowMenu/>}
        </div>
    
    </div> 
    
        )
    }

}
class ShowSBar extends Component{
    render(){
    return(
        <input type='text' id='SearchText' placeholder="Search Here" ></input>
    )
    }
}
class ShowMenu extends Component{
    render(){
    return(
      
        <div id='MenuBarOption'>
        
        <center id='options'>
        
        <a href="https://www.mic.com/current" target="_blank">
        <img src={Cr} alt="" id='Current' class='op'
         ></img></a>
         <a href="https://www.mic.com/innovation" target="_blank">
         <img src={In} id='Innovation' class='op'
         ></img></a>

         <a href="https://www.mic.com/wellbeing" target="_blank">
         <img src={Wb} id='WellBeing' class='op'
         ></img></a>
         
         <a href="https://www.mic.com/culture" target="_blank">
         <img src={Cl} id='Culture' class='op'
         ></img></a>
         <a href="https://www.mic.com/election-2020-make-it-count" target="_blank">
         <img src={El} id='Election' class='op'
         ></img></a>
        </center>
        <hr class='TC'></hr>
        <h2 class='TC'>COMPANY</h2>
        <div id='Company' class='Flex'>
            
            <a href="https://bustle.company/" target="_blank">
            <h3 class='op' >About Us</h3>
            </a>
            <a href="https://www.mic.com/masthead" target="_blank">
            <h3 class='op'>Masthead</h3>
            </a>
            <a href="https://www.mic.com/newsletter" target="_blank">
            <h3 class='op'>NewsLetter</h3>
            </a>
            <a href="https://www.mic.com/terms" target="_blank">
            <h3 class='op'>Terms</h3>
            </a>
            <a href="https://www.mic.com/privacy" target="_blank">
            <h3 class='op'>Privacy</h3>
            </a>
            <a href="https://www.mic.com/archive" target="_blank">
            <h3 class='op'>Archive</h3>
            </a>
        </div>
        <hr class='TC'></hr>
        <h2 class='TC'>CONNECT</h2>
        <div id='connect' class='Flex'>

            <a href="https://www.facebook.com/WR3CK.IT.A11/" target="_blank">
            <img class='op' src={Fb}></img></a>

            <a href="https://www.facebook.com/WR3CK.IT.A11/" target="_blank">    
            <img class='op' src={Tw}></img></a>
            <a href="https://www.youtube.com/channel/UC6q1ANbLttpTMq4VXlp3zUw?view_as=subscriber" target="_blank">
            <img class='op' src={Yt}></img></a>
            <a href="https://www.youtube.com/channel/UC6q1ANbLttpTMq4VXlp3zUw?view_as=subscriber" target="_blank">
            <img class='op' src={It}></img></a>
        </div>
        <hr class='TC'></hr>
        <div class='Flex' id='rights'>
            <h4>2019 Mic. All rights reserved</h4>
        </div>
        <hr class='TC'></hr>
    </div>
)
}
}