import React from 'react';

import WIA from "./Images/logo.jpg"

export default class Post2 extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div id='Pst2'>
                <img src={this.props.pic} id='PImage2'></img>
                <a href="https://www.youtube.com/channel/UC6q1ANbLttpTMq4VXlp3zUw?view_as=subscriber" target="_blank">
                <div id='Data2'>
                    <h2 id='PHeading2'>WreCK It All will Soon be no 1 Game Industry</h2>
                    <h4 id='author2'>by Wreck it All inc.</h4>
                    <p id='Pdata2'>Wreck it all was started by Hammad Riaz and soon he added
                    some of his friends in his ambition and now we work to create a game developing
                    company in Pakistan</p>
                   
                </div>
                </a>
            </div>
        
            )
        }

}
