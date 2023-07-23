import { useRouteError } from "react-router-dom"
import { Outlet } from "react-router"
import {Navbar} from "../components"

function RootLayout(){
    return(
        <>
            <Navbar/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayout