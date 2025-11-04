import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Layout = () => {
    const { dispatch } = useGlobalReducer();
    
    return (
        <ScrollToTop>
            <Navbar dispatch={dispatch} />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}