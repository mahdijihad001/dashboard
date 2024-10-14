import { FaChevronDown } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
const ItemSetting = () => {
    return (

        <section className="pl-1 mt-4">
            <div>
                <details
                    className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden"
                >
                    <summary
                        className="flex cursor-pointer items-center justify-between gap-4 bg-white text-slate-600 transition pr-4"
                    >
                        <span className="flex items-center gap-3">
                            <span>
                                <IoSettingsOutline />
                            </span>
                            <span className="text-[16px] font-bold hindFont">Item Setting</span>
                        </span>

                        <span className="transition group-open:-rotate-180">
                            <FaChevronDown />
                        </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">

                        <ul className="space-y-1 border-t border-gray-200 p-4">

                            <li className="font-bold text-slate-500"><NavLink to={"/itemcetagory"}>Item Cetagory</NavLink></li>
                            {/* <li className="font-bold text-slate-500"><NavLink to={"/itemcetagorylist"} >Item Cetagory List</NavLink></li> */}
                            <li className="font-bold text-slate-500"><NavLink to={"/newItem"}>New Item</NavLink></li>
                            <li className="font-bold text-slate-500"><NavLink to={"/itemList"}>Item List</NavLink></li>
                            {/* <li className="font-bold text-slate-500"><NavLink>New Brand</NavLink></li> */}
                            <li className="font-bold text-slate-500"><NavLink to={"/MarginSetting"}>MarginSetting</NavLink></li>


                        </ul>
                    </div>
                </details>
            </div>
        </section>

    )
}

export default ItemSetting