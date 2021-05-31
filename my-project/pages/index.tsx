import React from 'react'
import EmailCapture from '../components/EmailCapture'
import { BgCircleSVG } from '../components/Icons'
import { HeroImage } from '../components/Icons/illustrations'

import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout title='Homepage'>
			<div className='absolute w-full top-0 right-0 max-w-2xl  transform -translate-y-3/4 xl:-translate-y-1/4 xl:translate-x-1/4 scale-150 md:scale-125 xl:scale-125 bgz'>
				<img src='/shared/desktop/bg-pattern-circle.svg' />
			</div>

			<HeroSection />
		</Layout>
	)
}

const HeroSection = () => {
	return (
		<div className='flex flex-col items-center xl:items-start justify-center content-container relative pb-20 md:pb-24'>
			<div className='ml-8 w-52 md:w-72 xl:w-96 absolute top-0 xl:right-0'>
				{/* <img src='/home/desktop/mockups.svg' alt='mockups' /> */}
				<HeroImage></HeroImage>
			</div>

			<div className='flex flex-col items-center xl:items-start justify-center pt-[300px] md:pt-[430px] xl:pt-24 md:max-w-lg xl:max-w-xl'>
				<h1 className='text-3xl md:text-4xl xl:text-6xl leading- xl:leading-none text-center xl:text-left font-serif mb-6 md:mb-8 xl:mb-10'>
					Start building with our APIs for absolutely free.
				</h1>
				<div className='mb-6'>
					<EmailCapture></EmailCapture>
				</div>
				<p className='ml-10'>
					Have any questions? <span className='font-bold'>Contact Us</span>
				</p>
			</div>
		</div>
	)
}
