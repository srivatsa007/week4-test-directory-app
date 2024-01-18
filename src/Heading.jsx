import { Link, useLocation } from 'react-router-dom'

const Header = () => {
	const location = useLocation()

	return (
		<div>
			<header className=' bg-sky-500 p-4'>
				<h2 className='text-white text-center font-bold'>Srivatsa's Directory App</h2>
			</header>
			<nav className='flex justify-center items-center mt-4'>
				<ul className='flex gap-x-6 gap-y-2 flex-wrap justify-center items-center'>
					<li>
						<Link to='/'>
							<button
								className='btn bg-cyan-400 w-48'
								disabled={location.pathname === '/'}
							>
								Add new entry
							</button>
						</Link>
					</li>
					<li>
						<Link to='/retrieve'>
							<button
								className='btn  bg-cyan-400 w-48'
								disabled={location.pathname === '/retrieve'}
							>
								Retrieve Information
							</button>
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header