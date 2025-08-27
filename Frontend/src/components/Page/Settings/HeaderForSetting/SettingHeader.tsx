import { Outlet } from "react-router-dom"
import SettingLIst from "./SettingLIst"

const SettingHeader = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className=" md:w-3/10 w-full">
      <SettingLIst/>
      </div>
      <div className=" md:w-7/10 w-full">
      <Outlet/>
      </div>
    </div>
  )
}

export default SettingHeader
