import { EVENTS } from "./Const.js"

export function Navigate(href){
    window.history.pushState({},'',href)
    const navigation_event=new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigation_event)
}
export default function Link({ target, to, ... props }){
    const handleClick=(event)=>{
        const isPrincipalKey=event.button === 0
        const isModifiedEvent=event.metaKey || event.altKey || event.ctrlKey || event.shiftKey 
        const isManageableEvent = target === undefined || target ==='_self'

        if(isPrincipalKey && isManageableEvent && !isModifiedEvent){
            event.preventDefault()
            Navigate(to)
        }
        
    }
    return <a onClick={handleClick} href={to} target={target} {... props}/>
    
}