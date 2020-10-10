import React, { useEffect, useState } from 'react'
import './Background.css'
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Background({setTextRadio,text,radio,imageFrame,setBarAnimation,image_animation_duration}){
const [load,setLoad]=useState(false)
    

    

    const image_animation = useWebAnimations({
        playbackRate: 1,
        keyframes: {
          transform: ["translateY(0%) ", "translateY(-100%)"],
    
        },
        timing: {
    
          duration: image_animation_duration,
          iterations: 1,
          easing: "steps(3,end)",
          // direction: 'reverse',
    
    
    
        },
        // autoPlay:false,
        onReady: ({ playState, animate, animation }) => {
          
          
        },
        onUpdate:({ playState, animate, animation })=>{
          
    
        
          if (animation.currentTime <= animation.effect.getTiming().duration/3) {
            
            if(text!==0 || radio!==0){
              
                setTextRadio(0,0)
                setBarAnimation(1,0,0)
               
              
              

               
            }
          }
          else if(animation.currentTime >= animation.effect.getTiming().duration/3 && animation.currentTime <= animation.effect.getTiming().duration/3  * 2){
            // console.log(1)
            if(text!==1){
              
              setTextRadio(1,1)
              setBarAnimation(0,1,0)
              
    
            
            }
          }
          else{
            // console.log(2)
            if(text!==2){
            
            setTextRadio(2,2)
            setBarAnimation(0,0,1)
            
    
            
          }
          }
          if(animation.currentTime===animation.effect.getTiming().duration){
            animation.currentTime=0
          }
        }
    
      });
      
      useEffect(()=>{
        setLoad(true)
      },[imageFrame])

       if(load){
        
        if(imageFrame===0){
        
      
           image_animation.getAnimation().currentTime=0
           
        }
        else if(imageFrame===1){
          
          image_animation.getAnimation().currentTime=image_animation.getAnimation().effect.getTiming().duration/3
          
        }
        else if(imageFrame===2){
          
          image_animation.getAnimation().currentTime=image_animation.getAnimation().effect.getTiming().duration/3 * 2
        }
        setLoad(false)
      }

    return(
        <div className="bg_images" ref={image_animation.ref}>
          
              <img src="https://assets.madebyshape.co.uk/uploads/transforms/83a7a352428c16c670d2f8e3837116ab/141979/web-design-manchester-madebyshape_6c0c164bd2b597ee32b68b8b5755bd2e.png"
              alt=""
              id="bg1"
              />
              
              
              <img src="https://assets.madebyshape.co.uk/uploads/transforms/83a7a352428c16c670d2f8e3837116ab/141977/ecommerce-web-agency-madebyshape_6c0c164bd2b597ee32b68b8b5755bd2e.png"
              alt=""
              id="bg2"
              />
              
              
              <img src="https://assets.madebyshape.co.uk/uploads/transforms/83a7a352428c16c670d2f8e3837116ab/141978/responsive-web-design-madebyshape_6c0c164bd2b597ee32b68b8b5755bd2e.png"
              alt=""
              id="bg3"
              />
              
              
              
              
          </div>
    )
}