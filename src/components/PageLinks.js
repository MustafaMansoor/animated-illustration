import React from 'react'
import './PageLinks.css'
import useWebAnimations from "@wellyshen/use-web-animations";

export default function PageLinks({handleClick,radio,image_animation_duration,bar}){

    const bar1_animation = useWebAnimations({
        playbackRate: 1,
        keyframes:[{width:0},{width:'230px'}],
        
        timing: {
    
          duration: image_animation_duration/3,
          
          iterations: 1,
        
          // direction: 'reverse',
    
    
    
        },
        autoPlay:false,
      })
      const bar2_animation = useWebAnimations({
        playbackRate: 1,
        keyframes:[{width:0},{width:'230px'}],
        
        timing: {
    
          duration: image_animation_duration/3,
          
          iterations: 1,
        
          // direction: 'reverse',
    
    
    
        },
        autoPlay:false,
      })
      const bar3_animation = useWebAnimations({
        playbackRate: 1,
        keyframes:[{width:0},{width:'230px'}],
        
        timing: {
    
          duration: image_animation_duration/3,
          
          iterations: 1,
        
          // direction: 'reverse',
    
    
    
        },
        autoPlay:false,
      })
      if(bar[0]===1){
        bar1_animation.getAnimation().play()
        bar2_animation.getAnimation().finish()
        bar3_animation.getAnimation().finish()
    }
    else if(bar[1]===1){
        bar1_animation.getAnimation().finish()
        bar2_animation.getAnimation().play()
        bar3_animation.getAnimation().finish()
    }
    else if(bar[2]===1){
        bar1_animation.getAnimation().finish()
        bar2_animation.getAnimation().finish()
        bar3_animation.getAnimation().play()
      }

    return(
        <div className='page_link'>
              
              <ul>
                  <li>
                    <input type='radio' name='selector' 
                    checked={radio===0}
                    onChange={()=>handleClick(0)}/>
                    <div className='check'></div>
                  </li>
                  <li>
                    <input type='radio' name='selector' 
                    checked={radio===1}
                    onChange={()=>handleClick(1)}/>
                    <div className='check'></div>
                  </li>
                  <li>
                    <input type='radio' name='selector' 
                    checked={radio===2}
                    onChange={()=>handleClick(2)}/>
                    <div className='check'></div>
                  </li>
                </ul>
              <div className='link' onClick={()=>handleClick(0)}>
                <span className='text'>Web Design Manchester</span>
                <span className="bar" ref={bar1_animation.ref}></span>
              </div>
              
                
              
              <div className='link' onClick={()=>handleClick(1)}>
                <span className='text' >eCommerce Websites</span>
                <span className='bar' ref={bar2_animation.ref}></span>
              </div>
              
                
              
              <div className='link' onClick={()=>handleClick(2)}>
                <span className='text'>Digital Agency</span>
                <span className='bar' ref={bar3_animation.ref}></span>
              </div>
            </div>
    )
}