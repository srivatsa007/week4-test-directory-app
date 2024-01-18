import Heading from './Heading'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div className='w-screen min-h-screen'>
			<Heading />
			<Outlet />
		</div>
	)
}

export default Layout
