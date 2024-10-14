import { Outlet } from "react-router"
import DashboardMenu from "../Component/DashboardMenu/DashboardMenu"
import Header from "../Component/Header/Header"

const Root = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-wh">
        <Header/>
            <div className="max-w-[1300px] mx-auto grid grid-cols-10 gap-5">
                    <div className="col-span-2 h-[100vh] boxShadow">
                        <DashboardMenu/>
                    </div>
                    <div className="col-span-8 text-justify w-[100%]">
                        <Outlet/>
                    </div>
            </div>
    </div>
  )
}

export default Root