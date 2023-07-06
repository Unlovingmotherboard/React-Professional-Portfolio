import React, { useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { AppContext } from '../context/AppContext'; 

const CasualTheme = () => {

    const { fadeIn, setFadeIn } = useContext(AppContext);
    useEffect(() => { setFadeIn(true) }, [setFadeIn]);

    return (
        <CSSTransition in={fadeIn} timeout={3000} classNames={"casualThemeCSSAni"}>
            <div className='casualThemeCSS'>
                {/** IDEA
                 * 
                 * Let's create a machine learning program that is stored on a server 
                 * and display that machine learning information in real-time.
                 * 
                 * Gotta get a good idea for this. 
                 * 
                 * Doesn't have to be casual. Can be a professional issue.
                 * 
                 * Remeber. Use these tools to solve problems. Find a good problem. 
                 * 
                 * 
                 * 
                 * <div class="topTrue">
                 *      Sky
                 * <div/>
                 * 
                 * 
                 * 
                 * <div class="foreGround">
                 *      Middleware
                 * <div/>
                 * 
                 * 
                 * 
                 * <div class="topFalse">
                 *      Ground
                 * <div/>
                 * 
                 * 
                 * 
                 * 
                 * 
                 */}
            </div>
        </CSSTransition>
    );
  };

export default CasualTheme;