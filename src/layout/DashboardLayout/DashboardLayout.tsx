import { Outlet } from 'react-router-dom'
import DashboardSidebar from '~/modules/dashboard/DashboardSidebar'
import DashboartTopbar from '~/modules/dashboard/DashboartTopbar'

export const DashboardLayout = () => {
  return (
    <div className='p-6 lg:p-10 bg-inherit min-h-screen'>
      <DashboartTopbar />
      <div className='flex items-start gap-x-10 mt-8'>
        <DashboardSidebar />
        <div className='flex-1'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
