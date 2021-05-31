import React from 'react'
import Link from 'next/link'
import { Transition } from '@headlessui/react'
import { CloseSVG, HamburgerSVG, LogoSVG } from '../Icons'

const NavbarTransition = () => {
	const [menu, toggleMenu] = React.useState(false)

	const linkHoverEffect = 'hover:opacity-100 opacity-60 transition-all'

	return (
		<header className='relative z-20'>
			<div className='flex items-center justify-between content-container py-6 md:py-10'>
				<div className='flex items-center space-x-12 xl:space-x-20 text-blue-700'>
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

				<div className='md:hidden cursor-pointer' onClick={() => toggleMenu(true)}>
					<HamburgerSVG />
				</div>
				<div className='hidden md:block'>
					<button className='button-primary z-20'>Schedule a Demo</button>
				</div>

				{/* Menu */}
				<Transition
					show={menu}
					enter='transition ease-in-out duration-700 transform'
					enterFrom='translate-x-full'
					enterTo='translate-x-0'
					leave='transition ease-in-out duration-700 transform'
					leaveFrom='translate-x-0'
					leaveTo='translate-x-full'
					className='absolute right-0 top-0 h-screen w-10/12 bg-blue-900 md:hidden z-30'
				>
					<div
						className='mt-12 mr-8 flex justify-end cursor-pointer'
						onClick={() => toggleMenu(false)}
					>
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
				</Transition>
			</div>
		</header>
	)
}

export default NavbarTransition
