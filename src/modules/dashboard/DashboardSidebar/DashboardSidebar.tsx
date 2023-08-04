import classNames from "classnames"
import { NavLink } from "react-router-dom"
import { ButtonTheme } from "~/components/buttonTheme/ButtonTheme"
import { Heading } from "~/components/heading/Heading"
import DashBoardIcon from "~/components/icons/DashBoardIcon"
import IconCampaign from "~/components/icons/IconCampaign"
import IconLight from "~/components/icons/IconLight"
import IconLogout from "~/components/icons/IconLogout"
import IconPayment from "~/components/icons/IconPayment"
import { IconProfile } from "~/components/icons/IconProfile/IconProfile"
import IconWithdraw from "~/components/icons/IconWithdraw"
import { PATH } from "~/constants"
import { auth } from "~/firebase/initialize"
import useLogout from "~/hooks/useLogout"
import useTheme from "~/hooks/useTheme"


const NAV_LINKS = [
  {
    icon: <DashBoardIcon />,
    title: "Dashboard",
    path: "/"
  }, {
    icon: <IconCampaign />,
    title: "Campaign",
    path: PATH.campaign
  },
  {
    icon: <IconPayment />,
    title: "Payment",
    path: PATH.payment
  },
  {
    icon: <IconWithdraw />,
    title: "Withdraw",
    path: PATH.withdraw
  }, {
    icon: <IconProfile />,
    title: "Profile",
    path: PATH.profile
  },
  // {
  //   icon: <IconLogout />,
  //   title: "Logout",
  //   path: "/logout"
  // },
  // {
  //   icon: <IconLight />,
  //   title: "Dark Mode",
  //   path: "/dark-mode"
  // }
]

export const DashboardSidebar = () => {
  const logout = useLogout()
  const styleNavItem = "flex  items-center gap-x-5 transition-all hover:bg-primary/10 md:w-12 md:h-12 md:justify-center  md:rounded-lg md:mb-8 last:mb-0  last:shadow-sdprimary last:mt-auto  text-icon-color dark:last:shadow-none"

  return <div className="hidden px-[14px] flex-shrink-0 w-full shadow-sdprimary md:w-[76px] rounded-3xl bg-white dark:shadow-none dark:bg-darkSecondary py-10 lg:flex flex-col">
    {NAV_LINKS.map((link) =>
      <NavLink to={link.path} key={link.title} className={({ isActive }) => classNames(styleNavItem, {
        'text-icon-color': !isActive,
        'text-primary bg-primary/10': isActive
      })}><span >{link.icon}</span>
        <span className="md:hidden">{link.title}</span>
      </NavLink>
    )}
    <ButtonTheme className={styleNavItem} />
    <button type="button" onClick={logout} className={styleNavItem}>
      <span> <IconLogout /></span>
      <span className="md:hidden">Logout</span>
    </button>
  </div>
}