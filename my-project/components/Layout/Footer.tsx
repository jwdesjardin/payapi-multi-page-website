import Link from 'next/link'
import React from 'react'
import { BgCircleSVG, FacebookSVG, LinkedinSVG, LogoSVG, TwitterSVG } from '../Icons'

const Footer = () => {
	const linkHoverEffect = 'hover:opacity-100 opacity-60 transition-all'
	const socialHoverEffect = 'hover:text-pink-700 text-white-100 transition-all'
	return (
		<footer className=' bg-blue-900 text-white-100 pt-8 pb-14 md:py-8 relative overflow-hidden '>
			{/* BG IMAGE */}
			<div className='overflow-hidden absolute -right-1/4 top-1/2 md:-top-1/2 md:-right-1/2 xl:-right-1/4 z-0'>
				<BgCircleSVG></BgCircleSVG>
			</div>

			{/* Footer Content */}
			<div className='content-container  flex flex-col md:flex-row  items-center justify-center md:justify-between'>
				<div className='md:flex md:space-x-12'>
					<div className='mb-10 md:mb-0'>
						<LogoSVG></LogoSVG>
					</div>
					<div className='flex flex-col md:flex-row md:space-x-6 items-center justify-center'>
						<Link href='/pricing'>
							<a className={linkHoverEffect + ' mb-8 md:mb-0'}>Pricing</a>
						</Link>
						<Link href='/about'>
							<a className={linkHoverEffect + ' mb-8 md:mb-0'}>About</a>
						</Link>
						<Link href='/contact'>
							<a className={linkHoverEffect + ' mb-8 md:mb-0'}>Contact</a>
						</Link>
					</div>
				</div>
				<div className='flex space-x-6 z-20'>
					<a
						href='https://www.facebook.com'
						className='hover:text-pink-700 text-white-100 transition-all'
					>
						<FacebookSVG></FacebookSVG>
					</a>

					<a href='https://www.twitter.com' className={socialHoverEffect}>
						<TwitterSVG></TwitterSVG>
					</a>

					<a href='https://www.linkedin.com' className={socialHoverEffect}>
						<LinkedinSVG></LinkedinSVG>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
