import Head from 'next/head'
import React, { ReactElement, ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

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
			<Navbar></Navbar>
			<main>{children}</main>
			<Footer></Footer>
		</div>
	)
}

export default Layout
