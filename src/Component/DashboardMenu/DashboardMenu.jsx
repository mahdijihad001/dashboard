import { RiDashboardHorizontalFill } from "react-icons/ri";
import ItemSetting from "./ItemSetting";
import CustomerSetting from "./CustomerSetting";
import QuotationGenerate from "./QuotationGenerate";
import { NavLink } from "react-router-dom";
const DashboardMenu = () => {
  return (
    <div className="pt-8 pl-3">
        {/* Dashboard Menu */}
        <div>
        <NavLink to={"/"} className="list-none font-bold text-[30px] flex gap-3 items-center text-slate-600"><p><RiDashboardHorizontalFill /></p><p>Dashboard</p></NavLink>

            {/* Item Setting */}
        <div>
            <ItemSetting/>
        </div>
        {/* Customer Setting */}
        <div>
            <CustomerSetting/>
        </div>
        {/* QuotationGenerate */}

        <div>
            <QuotationGenerate/>
        </div>

        </div>
    </div>
  )
}

export default DashboardMenu