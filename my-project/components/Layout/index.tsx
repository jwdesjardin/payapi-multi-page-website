import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'
import NavbarTransition from './NavbarTransition'
import Footer from './Footer'
import Navbar from './Navbar'
import Ready from './Ready'

const Layout = ({
	children,
	title = 'PayAPI Marketing',
}: {
	children?: ReactNode
	title?: string
}): ReactElement => {
	return (
		<div className='relative overflow-x-hidden'>
			<Head>
				<title>{title}</title>
			</Head>
			<NavbarTransition></NavbarTransition>
			{/* <Navbar></Navbar> */}
			<main>
				{children}
				<Ready></Ready>
			</main>
			<Footer></Footer>
		</div>
	)
}

export default Layout
