import React, { lazy } from "react"
import '../App.css'

const ToggleComponent1 = lazy(() => import("../components/ToggleComponent1"));
const ToggleComponent2 = lazy(() => import("../components/ToggleComponent2"));
const ToggleComponent3 = lazy(() => import("../components/ToggleComponent3"));

const MainPage = () => {

    return (
        <div className='alignment'>
           <ToggleComponent1 />
           <ToggleComponent2 />
           <ToggleComponent3 /> 
        </div>
        
    )
}

export default MainPage;