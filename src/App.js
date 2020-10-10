import React,{useState} from 'react'

import './App.css';
import Navbar from './components/Navbar'
import Background from './components/Background'
import PageText from './components/PageText'
import PageLinks from './components/PageLinks'



function App() {
  
  const [text,setText]=useState(-1)
  const [radio,setRadio]=useState(-1)
  const [imageFrame,setImageFrame]=useState(-1)
  const [bar,setBar]=useState([0,0,0])

  
  const image_animation_duration=12000
  
  
  
  
  function setTextRadio(text,radio){
    setText(text)
    setRadio(radio)
    
    
  }

  function handleClick(plbTime){
    setImageFrame(plbTime)
    
  }
  function setBarAnimation(bar1,bar2,bar3){
    setBar([
      bar1,
      bar2,
      bar3
    ])
  }
  return (
     <div className='bg_frame'>
    
        <Navbar/>
    
        <Background setTextRadio={setTextRadio} 
        text={text} radio={radio}
        imageFrame={imageFrame}
        setBarAnimation={setBarAnimation}
        image_animation_duration={image_animation_duration}
        />

      <PageText text={text}/>
      
      <PageLinks radio={radio}
      handleClick={handleClick}
      image_animation_duration={image_animation_duration}
      bar={bar}
      />
          
          
     </div>

  );
}

export default App;
