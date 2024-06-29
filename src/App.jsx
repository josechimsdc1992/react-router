import { useEffect, useState } from "react"
import { EVENTS } from "./Const"
import Home from './Components/Home.jsx'
import About from "./Components/About.jsx"

export default function App(){

    const [currentPath,SetCurrentPath]=useState(window.location.pathname)

    useEffect(()=>{
        const onLocationChange= () =>{
            SetCurrentPath(window.location.pathname)
        }

        window.addEventListener(EVENTS.POPSTATE,onLocationChange)
        window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)

        return ()=>{
            window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
            window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        }
    },[])

    return (
        <main>
            {currentPath==='/' && <Home></Home>}
            {currentPath==='/about' && <About></About>}
        </main>
        
    )
}