import React from 'react';

export default class Post extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div id='Pst'>
                <img src={this.props.pic} id='PImage'></img>
                <a href="https://www.youtube.com/channel/UC6q1ANbLttpTMq4VXlp3zUw?view_as=subscriber" target="_blank">
                <div id='popup'>
                    <h2 id='PHeading'>WreCK It All will Soon be no 1 Game Industry</h2>
                    <h4 id='author'>by Wreck it All inc.</h4>
                    <p id='Pdata'>Wreck it all was started by Hammad Riaz and soon he added
                    some of his friends in his ambition and now we work to create a game developing
                    company in Pakistan</p>
                </div>
                </a>
            </div>
        
            )
        }

}
