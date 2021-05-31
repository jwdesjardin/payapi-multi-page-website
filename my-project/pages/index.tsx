import React from 'react'
import BrandGrid from '../components/BrandGrid'
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
			<BrandSection />
		</Layout>
	)
}

const HeroSection = () => {
	return (
		<section className='flex flex-col items-center xl:items-start justify-center content-container relative pb-20 md:pb-24'>
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
				<p className='xl:ml-10'>
					Have any questions? <span className='font-bold'>Contact Us</span>
				</p>
			</div>
		</section>
	)
}

const BrandSection = () => {
	return (
		<section className='bg-blue-900 text-white-100 py-20 md:py-24 '>
			<div className='content-container flex flex-col xl:flex-row-reverse items-center justify-center'>
				<div className='mb-16 xl:mb-0 max-w-xl xl:max-w-lg px-6 md:px-0 md:mx-auto xl:mr-0 w-full xl:w-1/2 '>
					<BrandGrid></BrandGrid>
				</div>
				<div className='text-center xl:text-left max-w-md  xl:w-1/2 '>
					<h2 className='text-3xl md:text-4xl mb-4 xl:mb-6 font-serif'>Who we work with</h2>
					<p className='text mb-16 xl:mb-8 opacity-70'>
						Today, millions of people around the world have successfully connected their accounts to
						apps they love using our API. We provide developers with the tools they need to create
						easy and accessible experiences for their users.
					</p>
					<button className='button-dark'>About Us</button>
				</div>
			</div>
		</section>
	)
}
