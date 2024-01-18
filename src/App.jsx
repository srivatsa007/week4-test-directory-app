// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Retrieve from './Components/Retrieve'
import AddEntry from './Components/AddEntry'
import { DataProvider } from './Context'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <AddEntry />,
			},
			{
				path: '/retrieve',
				element: <Retrieve />,
			},
		]
	},
])

function App() {

  return (
    <DataProvider>
			<RouterProvider router={router} />
		</DataProvider>
  )
}

export default App
