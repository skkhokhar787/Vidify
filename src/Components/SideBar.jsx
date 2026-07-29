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

function SideBar({ open, onClose }) {
  return (
    <>
      <style>{`
        .sidebar-nav li:hover svg path,
        .sidebar-nav li:focus-within svg path {
          fill: white;
          transition: fill 200ms ease;
        }
      `}</style>
      <aside
        className={`
          sidebar-nav shrink-0 overflow-y-auto bg-[#F1F1F1] p-4 text-sm text-gray-700
          fixed top-16 md:top-20 left-0 h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] z-40
          transition-transform duration-300 ease-in-out
          w-64 
          lg:relative lg:translate-x-0 lg:z-auto lg:top-0 lg:h-full lg:flex lg:flex-col
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="space-y-2">
          <Link to="/" onClick={onClose}><MenuItem name={"Home"} Icon={HomeSVGIcon} /></Link>
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
          <div className="rounded-md p-1">
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
                onClick={onClose}
                className="flex font-medium items-center p-2 pl-8 hover:font-medium hover:text-black hover:cursor-pointer hover:bg-white hover:rounded-2xl text-gray-600"
              >
                <span>Generate Video</span>
              </Link>
              <Link
                to="/pricing"
                onClick={onClose}
                className="flex font-medium items-center p-2 pl-8 hover:font-medium hover:text-black hover:cursor-pointer hover:bg-white hover:rounded-2xl text-gray-600"
              >
                <span>Subscription Plan</span>
              </Link>
            </ul>
          </div>
          <div className={`flex items-center mt-8 lg:mt-20 gap-2 justify-center ml-4 w-fit hover:cursor-pointer`}>
          <SettingsSvgIcons /><p>Settings</p>
        </div>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
