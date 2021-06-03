import Link from 'next/link'
import React from 'react'
import BrandGrid from '../components/BrandGrid'
import EmailCapture from '../components/EmailCapture'

import { EasyIllustration } from '../components/Icons/illustrations'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout title='Homepage'>
			<div className='absolute top-0 left-1/2 xl:left transform -translate-x-1/2 xl:translate-x-32 -translate-y-2/3  md:-translate-y-3/4 xl:-translate-y-1/4 md:scale-125 xl:scale-100'>
				<object tabIndex={-1} data='/shared/desktop/bg-pattern-circle.svg' tabIndex={-1} />
			</div>
			<HeroSection />
			<BrandSection />
			<EasySection />
			<SimpleSection />
			<InfoGrid />
		</Layout>
	)
}

const HeroSection = () => {
	return (
		<section className='flex flex-col xl:flex-row-reverse items-center xl:justify-between justify-center content-container relative pb-20 md:pb-24'>
			<div className='relative ml-8 w-52 md:w-72 xl:w-96 transform xl:-translate-y-60 '>
				<div className='absolute '>
					<img src='/home/desktop/new-mockups.svg' alt='mockups' />
					{/* <HeroImage></HeroImage> */}
				</div>
			</div>

			<div className='flex flex-col items-center xl:items-start justify-center pt-[300px] md:pt-[430px] xl:pt-24 md:max-w-lg xl:max-w-xl'>
				<h1 className='text-3xl md:text-4xl xl:text-6xl leading-none font-bold xl:leading-none text-center xl:text-left font-serif mb-6 md:mb-8 xl:mb-10'>
					Start building with our APIs for absolutely free.
				</h1>
				<div className='mb-6'>
					<EmailCapture></EmailCapture>
				</div>
				<p className='xl:ml-10'>
					Have any questions?{' '}
					<Link passHref href='/contact'>
						<a className='font-bold focus:outline-black active:border-b-2 active:border-blue-900'>
							Contact Us
						</a>
					</Link>
				</p>
			</div>
		</section>
	)
}

const EasySection = () => {
	return (
		<section className='content-container relative pb-20 flex flex-col xl:flex-row items-center justify-center xl:pt-20'>
			{/* IMAGE BOX */}
			<div className=''>
				<div className='w-[440px] md:w-[540px] xl:w-[600px] transform xl:-translate-x-20 xl:translate-y-6'>
					<EasyIllustration></EasyIllustration>
				</div>
			</div>

			{/* CONTENT BOX */}
			<div className='pt-6 xl:pt-0 text-center xl:text-left max-w-xl xl:max-w-md xl:-translate-x-6 transform '>
				<h2 className='text-3xl md:text-4xl font-serif font-bold mb-6'>Easy to implement</h2>
				<p className='text'>
					Our API comes with just a few lines of code. You’ll be up and running in no time. We built
					our documentation page to integrate payments functionality with ease.
				</p>
			</div>
		</section>
	)
}

const BrandSection = () => {
	return (
		<section className='bg-blue-900 text-white-100 py-20 md:py-24 relative overflow-hidden'>
			<div className='absolute top-0 left-1/2 -translate-x-1/2 transform -translate-y-3/4 md:-translate-y-2/3 xl:-translate-y-1/3 xl:-translate-x-full '>
				<object tabIndex={-1} data='/shared/desktop/bg-pattern-circle.svg' />
			</div>

			<div className='content-container flex flex-col xl:flex-row-reverse items-center justify-center'>
				<div className='mb-16 xl:mb-0 max-w-xs md:max-w-xl xl:max-w-lg px-6 md:px-0 md:mx-auto xl:mr-0 w-full xl:w-1/2 '>
					<BrandGrid></BrandGrid>
				</div>
				<div className='text-center xl:text-left max-w-md  xl:w-1/2 relative z-10 '>
					<h2 className='text-3xl md:text-4xl font-bold mb-4 xl:mb-6 font-serif'>
						Who we work with
					</h2>
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

const SimpleSection = () => {
	return (
		<section className='content-container relative flex flex-col xl:flex-row-reverse items-center justify-center xl:justify-between'>
			{/* BG SVG */}
			<div className='opacity-0 xl:opacity-100 absolute right-0 transform translate-x-2/3'>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>

			{/* IMAGE BOX */}
			<div className=''>
				<div className='w-[430px] md:w-[516px] transform translate-x-3 xl:translate-x-20'>
					{/* <SimpleIllustration></SimpleIllustration> */}
					<img src='/home/desktop/new-simple.svg' alt='simple ui illustration' />
					{/* <object tabIndex={-1} data='/home/desktop/easy.svg' type='image/svg+xml' className='easySVG' /> */}
				</div>
			</div>

			{/* CONTENT BOX */}
			<div className='text-center xl:text-left transform -translate-y-6 max-w-lg xl:max-w-md'>
				<h2 className='text-3xl md:text-4xl font-serif font-bold mb-4'>Simple UI & UX</h2>
				<p className='text'>
					Our pre-built form is easy to integrate in your app or website’s checkout flow and
					designed to optimize conversion.
				</p>
			</div>
		</section>
	)
}

const InfoGrid = () => {
	return (
		<section className='content-container flex flex-col md:flex-row space-y-12 md:space-x-6 md:space-y-0 items-center md:items-start justify-between pt-20'>
			<InfoCard
				imgURL='/home/desktop/icon-personal-finances.svg'
				imgAlt='personal finances icon'
				heading='Personal Finances'
				text='Consolidate financial data from multiple sources and categorize transactions up to 2 years
				of history. Analyze reports to reconcile activities in your account.'
			></InfoCard>
			<InfoCard
				imgURL='/home/desktop/icon-banking-and-coverage.svg'
				imgAlt='personal finances icon'
				heading='Banking & Coverage'
				text='With our platform, you can speed up account onboarding and support ongoing payments 
				for checking, savings, credit card, and brokerage accounts.'
			></InfoCard>
			<InfoCard
				imgURL='/home/desktop/icon-consumer-payments.svg'
				imgAlt='personal finances icon'
				heading='Consumer Payments'
				text='It’s easier to set up secure bank payments with us through a flow designed with the 
				user experience in mind. Customers could instantly authenticate their account.'
			></InfoCard>
		</section>
	)
}

const InfoCard = ({
	imgURL,
	imgAlt,
	heading,
	text,
}: {
	imgURL: string
	imgAlt: string
	heading: string
	text: string
}) => {
	return (
		<div className='max-w-[350px] text-center'>
			<div className='flex items justify-center mb-8'>
				<img src={imgURL} alt={imgAlt} />
			</div>
			<h3 className='text-sans text-[18px] font-bold mb-4'>{heading}</h3>
			<p className='text-md font-sans leading-relaxed'>{text}</p>
		</div>
	)
}
