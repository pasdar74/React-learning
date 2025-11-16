import { NavLink } from "react-router"
import SidebarHeader from "./SidebarHeader"

const Sidebar = () => {
    return (
        <div className="min-h-screen border-r-2 border-r-gray-200 bg-white sticky" style={{ "width": "290px", "minWidth": "290px" }}>

            <SidebarHeader />


            <div>
                <nav className="px-4 pb-4">



                    <div className="menugroup">
                        <div className="menu title mt-4 mb-2 mx-3 font-semibold">
                            داشبورد
                        </div>

                        <ul>
                            <div class="menu-item h-12">
                                <NavLink to="/user" >
                                    <div className="flex items-center gap-2 h-full w-full">
                                        <span className="text-2xl">
                                            <svg className="w-4 h-4  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                                            </svg>
                                        </span>
                                        <span>
                                            تجارت الکترونیک
                                        </span>
                                    </div>
                                </NavLink>
                            </div>
                        </ul>
                    </div>



                </nav>
            </div>





        </div>
    )
}
export default Sidebar