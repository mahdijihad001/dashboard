import { FaAppStore } from "react-icons/fa6";
const Header = () => {
    return (
        <div className="bg-[#F9F9F9] nabShadow mb-1">
            <div className="navbar max-w-[1300px] mx-auto">
                <div className="flex-1">
                    <div className="latoFont text-3xl font-bold textColor flex items-center gap-4">
                        <FaAppStore />
                        {/* Logo name */}
                        AdminHub
                    </div>
                </div>
                <div className="ml-12">
                    {/* <input type="search" placeholder="Search..." className="px-5 compoBg py-2 rounded-[10px]" /> */}
                    <input id="id-s01" type="search" name="id-s01" placeholder="Search here" aria-label="Search content" className="relative w-full h-10 px-4 pr-12 text-sm transition-all border-b outline-none focus-visible:outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400 compoBg rounded-[8px]" />
                </div>
                <div className="flex-none ml-5">

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header