import Topbar from "../sections/topbar";
import { useLocation } from "react-router-dom";

interface Structure { children: React.ReactNode}
const Layout = ({children}: Structure) => {
    const location = useLocation()
    const noDisplay = location.pathname !== '/'

    return(
        <>
        {noDisplay && <Topbar/>}
        <main>{children}</main>
        </>
    )
} 

export default Layout