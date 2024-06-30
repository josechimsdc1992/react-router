import { useEffect } from "react"
import Link from "../Link";

export default function Search({routeParams}){
    useEffect(()=>{
        document.title=`Has buscado: ${routeParams.query}`
    },[])
return(
    <>
    <h1>Has buscado: {routeParams.query}</h1>
    <Link to='/'>Go to Home</Link>
    </>
    
)
}