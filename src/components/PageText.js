import React,{useEffect,useState} from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import './PageText.css'

const textData=[
    'Web Design Agency in Manchester',
    "We're known for our eCommerce websites",
    'Manchester Digital Agency of the year',
  ]
  const textData2=[
    'Working with brands all over the world',
    'Specialising in Craft CMS and Shopify',
    'Listen to what our clients have to say'
  ]
  const textData3=[
    'Find out more',
    'View our work',
    'Find out more',
  ]

  const text_duration=700

  
  function PageText({text}){
    const [load,setLoad]=useState(false)

    const h1_animation=useWebAnimations({
      playbackRate:1,
      keyframes:{
        
        transform: ["translateY(0%) ", "translateY(-25%)"],
        
        opacity:[0,'1'],
      },
      
      timing:{
        duration:text_duration,
        iterations:1,
      },
      autoPlay:false,
    })
    const span_animation=useWebAnimations({
      playbackRate:1,
      keyframes:{
        
        transform: ["translateY(0%) ", "translateY(-100%)"],
        
        opacity:[0,'1'],
      },
      
      timing:{
        duration:text_duration,
        iterations:1,
      },
      autoPlay:false,
    })
    const button_animation=useWebAnimations({
      playbackRate:1,
      keyframes:{
        
        transform: ["translateY(0%) ", "translateY(-50%)"],
        
        opacity:[0,'1'],
      },
      
      timing:{
        duration:text_duration,
        iterations:1,
      },
      autoPlay:false,
    })
  

    useEffect(()=>{
      setLoad(true)
    },[text])

    
      if(load){
      h1_animation.getAnimation().play()
      span_animation.getAnimation().play()
      button_animation.getAnimation().play()
      setLoad(false)
      }
    

    
      
      
      

    return(
        <div className='page_text'>
              <h1 ref={h1_animation.ref}>
                {textData[text]}
              </h1>
              <span ref={span_animation.ref}>
                {textData2[text]}
              </span>
              <div className='button_container' ref={button_animation.ref}>
                <div className='page_button'>
                  <span>{textData3[text]}</span>
                </div>
              </div>
          </div>
    )
}
export default PageText