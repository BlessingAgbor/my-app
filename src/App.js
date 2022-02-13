// import React from 'react'
// import "./App.css";
// import styled from 'styled-components'
// import net from './img/network.png'
// import wifi from './img/wifi.jpeg'
// import batt from './img/battery.jpeg'
// import svg1 from './img/undraw_hiking_re_k0bc.svg'
// import svg2 from './img/undraw_ride_till_i_can_no_more_-44-wq.svg'
// import svg3 from './img/undraw_jogging_re_k28i.svg'
// const App = () => {
//   return(
//     <div>
//      <div>
//        <div className='container'>

         
//          <div className='hold'>
          
//              {/* <div>Apkly</div>
//              <div>
//                <div>Home</div>
//                <div>Overview</div>
//                <div>Feature</div>
//                <div>Price</div>
//                <div>Contact</div>
//                <div>
//                  <button>
//                    Sign Up
//                  </button>
//                </div>
//              </div> */}
//              <div className='card'>
//                <div className='top'>

//                 <div>
//                 <img className='imag' src={net}></img>
//                  <img className='imag' src={wifi}></img>
//                  <img className='imag' src={batt}></img>
//                 </div>
//                </div>
//                <br></br>
//               <div className='Svg' >
//                 <img src={svg1}></img>
//               </div>
//               <br></br>
//               <br></br>
//               <div className='text'>
//                 <h2>Hiking and Camping</h2>
//                 <div id='gray'>
//                   There are countless places and ways to get outside and enjoy nature
//                 </div>
//               </div>
//              <br></br>
//              <br></br>

//               <div className='btnHold'>
//                 <button>Continue</button>
//               </div>
//               <br></br>

//              <div className='bottom'>
//                  <div id='color'>The</div>
//                  <div>The</div>
//                  <div>The</div>
//              </div>
//               <br></br>
//               <br></br>

//              </div>

//              {/* The second card */}

//              <div className='card'>
//                <div className='top'>

//                 <div>
//                 <img className='imag' src={net}></img>
//                  <img className='imag' src={wifi}></img>
//                  <img className='imag' src={batt}></img>
//                 </div>
//                </div>
//                <br></br>
//               <div className='Svg' >
//                 <img src={svg2}></img>
//               </div>
//               <br></br>
//               <br></br>
//               <div className='text'>
//               <h2>Horseback Riding</h2>
//                 <div id='gray'>
//                   Recreation activities are beneficial to one's health <b>
//                     Read More
//                   </b>
//                 </div>
//               </div>
//              <br></br>
//              <br></br>

//               <div className='btnHold'>
//                 <button>Continue</button>
//               </div>
//               <br></br>

//              <div className='bottom'>
//                  <div >The</div>
//                  <div id='color'>The</div>
//                  <div>The</div>
//              </div>
//               <br></br>
//               <br></br>

//              </div>
//              {/* The third card */}

//              <div className='card'>
//                <div className='top'>

//                 <div>
//                 <img className='imag' src={net}></img>
//                  <img className='imag' src={wifi}></img>
//                  <img className='imag' src={batt}></img>
//                 </div>
//                </div>
//                <br></br>
//               <div className='Svg' >
//                 <img src={svg3}></img>
//               </div>
//               <br></br>
//               <br></br>
//               <div className='text'>
//               <h2>Runing Exercises</h2>
//                 <div id= 'gray'>
//                   Running can burn anywhere from $00 to $100 calories per hour <b>Read more</b>
//                 </div> 
//               </div>
//              <br></br>
//              <br></br>

//               <div className='btnHold'>
//                 <button>Continue</button>
//               </div>
//               <br></br>

//              <div className='bottom'>
//                  <div >The</div>
//                  <div>The</div>
//                  <div id='color'>The</div>
//              </div>
//               <br></br>
//               <br></br>

//              </div>
//          </div>
//        </div>
//      </div>
     
  
    
//     </div>
//   )
// }
// export default App




// import React from 'react';
// import styled from 'styled-components';
// // import pic from './img/IMG_1885.jpeg'

// const App = () => {
//   return (
//     <Box>
//     <Password src='/image/IMG_1885.jpeg'/>
//     <Password src='/image/IMG_1885.jpeg'/>
//     <Password src='/image/IMG_1885.jpeg'/>
//     <Password src='/image/IMG_1885.jpeg'/>
//     {/* <text>My at Media screen</text> */}
//     </Box>
    
//   );
// };

// export default App;

// const Box= styled.div`
// color: blue;
// /* font-size: 100px; */
// width: 100%;
// display: flex;
// flex-direction: row;
// margin: 10px;
// border-right: 5px solid black;
// `
// const  Password = styled.img`
// width: 15%;
// @media screen and (max-width: 760px;)
// width: 10px;
// `

import React from 'react'
import './App.css'
import mandela1 from './img/epik/ch1.png'
import box from './img/epik/back.png'

const App= ()=> {

  return(
    <div>
      <div className='container'>
        <div className='hold'>
        <div className='head'>
        <div className='bigNav'>Apkly</div>
          <div className='navs'>
            <div>Home</div>
            <div>Overview</div>
            <div>Feature</div>
            <div>Price</div>
            <div>Contact</div>
          <div>
          <button>
             Sign Up
          </button>
          </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>


        
        {/* This is the two divs in the hero section */}
        <br></br>
        <br></br>

        <div className='eighty'>
          <div className='first'>
            <h1>AWESOME</h1>
            <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Ad doloribus laborum omnis obcaecati sit dolore
            </div>
            <br></br>
            <button>
              Get it Now
            </button>
          </div>
          {/* the second div part */}
          <div className='second'>
            <img src={mandela1}></img>
            
          </div>
        </div>
     

      
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <div className='overview'>
        <div className='imageee'>
        <h1>OVERVIEW</h1>
          <div>
          <img src={box}></img>
          </div>
        </div>
        <br></br>
        <div>
          <div>Free Use</div>
          <div>-</div>
          <div> This is a LoremIpsum text. Lorem Iosum is the best to get text when you dont have any
          </div>
          <div>Read more &#x2192;</div>
        </div>
      </div>
    </div>
  )
}

export default App