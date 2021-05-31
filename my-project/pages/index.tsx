import React from 'react'
import EmailCapture from '../components/EmailCapture'
import { BgCircleSVG } from '../components/Icons'
import { HeroImage } from '../components/Icons/illustrations'

import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout title='Homepage'>
			{/* Hero */}
			<div className='flex flex-col items-center justify-center content-container relative pb-20'>
				<div className='ml-8 w-52 absolute top-0'>
					{/* <img src='/home/desktop/mockups.svg' alt='mockups' /> */}
					<HeroImage></HeroImage>
				</div>
				<div className='flex flex-col items-center justify-center pt-[300px]'>
					<h1 className='text-3xl leading-tight text-center font-serif mb-6'>
						Start building with our APIs for absolutely free.
					</h1>
					<div className='mb-6'>
						<EmailCapture></EmailCapture>
					</div>
					<p className=''>
						Have any questions? <span className='font-bold'>Contact Us</span>
					</p>
				</div>
			</div>
		</Layout>
	)
}
