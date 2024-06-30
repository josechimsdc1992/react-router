import { useEffect, useState } from "react"
import { EVENTS } from "./Const"

export default function Router({routes=[],defaultComponent: DefaulComponent=()=><h1>404</h1>}){
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

    const Page=routes.find(({path})=>path===currentPath)?.Component
    return Page ? <Page/>:<DefaulComponent/>
}