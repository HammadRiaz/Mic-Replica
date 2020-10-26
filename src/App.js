import React from 'react';
import './App.css';
import Trump from "./Components/Images/Trump.webp"
import Amenu from './Components/MenuBar'
import Post from './Components/Post'
import Post2 from './Components/Post2'
import WIA from "./Components/Images/logo.jpg"
import a from "./Components/Images/1.png"
import b from "./Components/Images/2.png"
import c from "./Components/Images/3.jpg"
import d from "./Components/Images/4.jpg"
import e from "./Components/Images/5.jpg"
import f from "./Components/Images/6.jpg"
import g from "./Components/Images/7.jpg"
import h from "./Components/Images/8.jpg"
import i from "./Components/Images/9.jpg"

//one can enter data like Description Image and Post title by using Props 
//thus creating a new Post each time.
function App() {
  return (
    <div >
            <div id='halfScreen'>
                <Amenu />
                  <div class='Flex2' >
                    <img src={Trump}  id='Trump'></img>
                    <div >                   
                    <h2 id='words'>Make it Count: A <br/> complete guide to our <br/>
                    generation's most <br/> consequential election
                    </h2>
                    <a href="https://www.mic.com/election-2020-make-it-count" target="_blank">
                    <button id='Bt'>Explore</button>
                    </a>
                    </div>
                  </div>
            </div>
            <div id='otherHalf'> 
                <div>
                  <br></br>
                  <h2 class='H1'>Featured</h2>
                  <hr></hr>
                  <div id='Timeline'>
                    <Post pic={WIA}/>
                    <Post pic={a}/>
                    <Post pic={b}/>
                    <Post pic={c}/>
                    <Post pic={d}/>
                    <Post pic={e}/>
                    <Post pic={f}/>
                    <Post pic={g}/>
                    
                  </div>
                </div>
                <div>
                <br></br>
                <h2 class='H1'>Election 2020</h2>
                <hr></hr>
                <center>
                    <div id='Timeline2'>
                    <Post pic={h}/>
                    <Post pic={i}/>
                    <Post pic={e}/>   
                    </div>
                    <div id="Timeline3">
                    <Post2 pic={a}/>
                    <br></br>
                    <Post2 pic={WIA}/>
                    <br></br>
                    <Post2 pic={d}/>
                    <br></br>
                    <Post2 pic={e}/>
                    <br></br>
                    <Post2 pic={g}/>
                    <br></br>
                    <Post2 pic={f}/>
                    <br></br>
                    <Post2 pic={b}/>
                    <br></br>
                    <Post2 pic={c}/>
                    <br></br>
                    <Post2 pic={h}/>
                    <br></br>
                    <Post2 pic={i}/>
                    <br></br>
                    </div>
                    
               </center>
                </div>
                <hr></hr>
            </div>
        </div>
  );
}

export default App;
