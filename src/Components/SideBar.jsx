import React from "react";
import MenuItem from "./MenuItem";
import ProductSVGIcon, {
  AnalyticsSvgIcons,
  ContentSVGIcon,
  CustomerSvgIcons,
  HomeSVGIcon,
  MarketingSvgIcons,
  DiscountsSvgIcons,
  OrdersSVGIon,
  OnlineShopingSvgIcons,
  PointSaleSvgIcons,
  ShopSvgIcons,
  SettingsSvgIcons,
} from "./AllSvgIcons";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <style>{`
        .sidebar-nav li:hover svg path,
        .sidebar-nav li:focus-within svg path {
          fill: white;
          transition: fill 200ms ease;
        }
      `}</style>
      <aside className="sidebar-nav w-65 shadow-lg z-5 shrink-0 h-340 overflow-y-auto bg-[#F1F1F1] p-4 text-sm text-gray-700">
        <ul className="space-y-2">
          <Link to="/dashboard"><MenuItem name={"Home"} Icon={HomeSVGIcon} /></Link>
          <MenuItem name={"Orders"} Icon={OrdersSVGIon} />
          <MenuItem name={"Products"} Icon={ProductSVGIcon} />
          <MenuItem name={"Customer"} Icon={CustomerSvgIcons} />
          <MenuItem name={"Content"} Icon={ContentSVGIcon} />
          <MenuItem name={"Analytics"} Icon={AnalyticsSvgIcons} />
          <MenuItem name={"Marketing"} Icon={MarketingSvgIcons} />
          <MenuItem name={"Discounts"} Icon={DiscountsSvgIcons} />
        </ul>

        <div className="mt-6">
          <p className="text-xs text-gray-500 mb-2">Sales channels</p>
          <ul className="space-y-2">
            <MenuItem name={"Online Store"} Icon={OnlineShopingSvgIcons} />
            <MenuItem name={"Point of Sale"} Icon={PointSaleSvgIcons} />
            <MenuItem name={"Shop"} Icon={ShopSvgIcons} />
            
          </ul>
        </div>

        <div className="mt-6">
          <p className="text-xs text-gray-500 mb-2 px-2">Apps</p>
          <div className=" rounded-md p-1">
            <ul className="space-y-1">
              <li className="flex items-center gap-3 p-2 rounded hover:cursor-pointer hover:bg-gray-200/70">
                <img
                  className="w-4.5"
                  src="/public/Vidify-logo.png"
                  alt="Vidify logo"
                />
                <span className="font-semibold text-gray-900">Vidify</span>
              </li>
              <Link
                to="/generate"
                className="flex font-medium items-center p-2 pl-8 hover:font-medium hover:text-black hover:cursor-pointer hover:bg-white hover:rounded-2xl text-gray-600"
              >
                <span>Generate Video</span>
              </Link>
              <li className="flex font-medium items-center p-2 pl-8 hover:font-medium hover:text-black rounded hover:cursor-pointer hover:bg-white hover:rounded-2xl text-gray-600">
                <span>Subscription Plan</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center mt-156 gap-2 justify-center ml-4 w-fit hover:cursor-pointer  ">
          <SettingsSvgIcons /><p>Settings</p>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
