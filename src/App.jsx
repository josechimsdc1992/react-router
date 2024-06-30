
import { routes } from "./RoutesConfig.jsx"
import Routes from "./Routes.jsx"

import Route from "./Route.jsx"
import { Suspense, lazy } from "react"
const lazyAbout=lazy(()=>import("./Components/About"))
const lazyHome=lazy(()=>import("./Components/Home"))
const lazyPage404=lazy(()=>import("./Components/Page404.jsx"))

export default function App(){

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes routes={routes} defaultComponent={lazyPage404}>
                <Route path='/' Component={lazyHome}></Route>
                <Route path='/about' Component={lazyAbout}></Route>
            </Routes>
            </Suspense>
            
        </main>
        
    )
}