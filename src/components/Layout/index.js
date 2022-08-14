import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import MobileNav from '../MobileNav/'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <MobileNav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
