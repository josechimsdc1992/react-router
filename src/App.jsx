
import { routes } from "./RoutesConfig.jsx"
import Router from "./Routes.jsx"
import Page404 from "./Components/Page404.jsx"

export default function App(){

    return (
        <main>
            <Router routes={routes} defaultComponent={Page404}/>
        </main>
        
    )
}