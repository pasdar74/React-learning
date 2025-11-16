import { NavLink } from "react-router"

const SidebarHeader = () => {
    return (
        <div className="flex flex-col justify-center h-16">
            <div className="px-6 h-auto">
                
                <NavLink to="/">
                    <img className="max-h-10" src="src/assets/images/Bakhshayeshi-Logo.webp" alt="header logo" />
                </NavLink>
                
            </div>
        </div>
    )
}
export default SidebarHeader