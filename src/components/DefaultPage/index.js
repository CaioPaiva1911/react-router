import Banner from "components/Banner";
import { Outlet } from "react-router";

 export default function DefaultPage({ children }) {
    return (
        <main>
            <Banner />
            
            <Outlet />
            {children}
        </main>
    )
}