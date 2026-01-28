import { Outlet } from "react-router";




function Layout() {
  return (
    <div className="container mx-auto min-w-screen">
        <Outlet />
    </div>
  )
}

export default Layout;