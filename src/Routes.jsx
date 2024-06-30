import { useEffect, useState } from "react"
import { EVENTS } from "./Const"
import { match } from "path-to-regexp"

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

    let routeParams={}

    const Page=routes.find(({path})=>{
        if(path===currentPath) return true

        const matcherUrl=match(path,{decode:decodeURIComponent})
        const matched=matcherUrl(currentPath)
        if(!matched) return false

        routeParams=matched.params

        return true
    }
)?.Component
    return Page ? <Page routeParams={routeParams}/>:<DefaulComponent routeParams={routeParams}/>
}