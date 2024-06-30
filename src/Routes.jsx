import { Children, useEffect, useState } from "react"
import { EVENTS } from "./Const"
import { match } from "path-to-regexp"
import {GetCurrentPath} from "./Utils"

export default function Routers({children,routes=[],defaultComponent: DefaulComponent=()=><h1>404</h1>}){
    const [currentPath,SetCurrentPath]=useState(GetCurrentPath())

    useEffect(()=>{
        const onLocationChange= () =>{
            SetCurrentPath(GetCurrentPath())
        }

        window.addEventListener(EVENTS.POPSTATE,onLocationChange)
        window.addEventListener(EVENTS.PUSHSTATE,onLocationChange)

        return ()=>{
            window.removeEventListener(EVENTS.POPSTATE,onLocationChange)
            window.removeEventListener(EVENTS.PUSHSTATE,onLocationChange)
        }
    },[])

    let routeParams={}
    const routesFromChildren=Children.map(children,({props,type})=>{
        const {name}=type
        const isRoute=name==='Route'
        if(!isRoute) return null
        return props
    })

    const routesForUse=routes.concat(routesFromChildren).filter(Boolean)

    const Page=routesForUse.find(({path})=>{
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