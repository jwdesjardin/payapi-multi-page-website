import React from 'react'
import Link from 'next/link'
import { CloseSVG, HamburgerSVG, LogoSVG } from '../Icons'

const Navbar = () => {
	const linkHoverEffect = 'hover:opacity-100 opacity-60 transition-all'

	const closeMenu = (e) => {
		const div = e.currentTarget as HTMLDivElement
		const menu = div.parentElement
		menu.classList.remove('slideIn')
		menu.classList.add('slideOut', 'translate-x-full')
		console.log(menu)
	}

	const openMenu = (e) => {
		const div = e.currentTarget as HTMLDivElement
		const menu = div.parentElement.lastElementChild
		menu.classList.remove('slideOut', 'translate-x-full')
		menu.classList.add('slideIn')
		console.log(menu)
	}

	return (
		<header className='flex items-center justify-between content-container py-6 md:py-10'>
			<div className='flex items-center space-x-12 xl:space-x-20'>
				<LogoSVG></LogoSVG>
				<div className='hidden md:flex space-x-8 xl:space-x-12 font-bold'>
					<Link href='/pricing'>
						<a className={linkHoverEffect}>Pricing</a>
					</Link>
					<Link href='/about'>
						<a className={linkHoverEffect}>About</a>
					</Link>
					<Link href='/contact'>
						<a className={linkHoverEffect}>Contact</a>
					</Link>
				</div>
			</div>

			<div className='md:hidden cursor-pointer' onClick={openMenu}>
				<HamburgerSVG />
			</div>
			<div className='hidden md:block'>
				<button className='button-primary'>Schedule a Demo</button>
			</div>

			{/* Menu */}

			<div className='absolute right-0 top-0 h-screen w-10/12 bg-blue-900 md:hidden transform translate-x-full'>
				<div className='mt-12 mr-8 flex justify-end cursor-pointer' onClick={closeMenu}>
					<CloseSVG />
				</div>
				<div className='border-t border-white-100 border-opacity-60 mx-6 flex-col flex items-center text-[20px] text-white-100 mt-6 '>
					<Link href='/pricing'>
						<a className={linkHoverEffect + ' mb-8 mt-10'}>Pricing</a>
					</Link>
					<Link href='/about'>
						<a href='' className={linkHoverEffect + ' mb-8'}>
							About
						</a>
					</Link>
					<Link href='/contact'>
						<a href='' className={linkHoverEffect + ' mb-8'}>
							Contact
						</a>
					</Link>
					{/* Not sure what the functionality of this link should be check back later, no email capture like other similar buttons */}
					<Link href=''>
						<button className='button-primary w-full'>Schedule a Demo</button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Navbar
