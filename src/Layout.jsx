import Header from './SubHeader'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='w-screen min-h-screen'>
			<Header />
			<Outlet />
		</div>
	)
}

export default Layout
