import { TopNav } from "@/components"
import { Outlet } from "react-router-dom"

const Layout = () => {
   return (
      <div className='*:lg:px-12 *:px-6'>
         <TopNav />
         <Outlet />
      </div>
   )
}

export default Layout