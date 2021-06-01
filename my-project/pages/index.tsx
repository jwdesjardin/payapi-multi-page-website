import React from 'react'
import BrandGrid from '../components/BrandGrid'
import EmailCapture from '../components/EmailCapture'
import { BgCircleSVG } from '../components/Icons'
import { HeroImage } from '../components/Icons/illustrations'
import { EasyIllustration } from '../components/Icons/illustrations'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout title='Homepage'>
			<div className='absolute w-full top-0 right-0 xl:max-w-2xl transform -translate-y-3/4 xl:-translate-y-1/4 xl:translate-x-1/4 scale-150 md:scale-125'>
				<img src='/shared/desktop/bg-pattern-circle.svg' />
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
		<section className='flex flex-col items-center xl:items-start justify-center content-container relative pb-20 md:pb-24'>
			<div className='ml-8 w-52 md:w-72 xl:w-96 absolute top-0 xl:right-0'>
				{/* <img src='/home/desktop/mockups.svg' alt='mockups' /> */}
				<HeroImage></HeroImage>
			</div>

			<div className='flex flex-col items-center xl:items-start justify-center pt-[300px] md:pt-[430px] xl:pt-24 md:max-w-lg xl:max-w-xl'>
				<h1 className='text-3xl md:text-4xl xl:text-6xl leading-none font-bold xl:leading-none text-center xl:text-left font-serif mb-6 md:mb-8 xl:mb-10'>
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
		<section className='bg-blue-900 text-white-100 py-20 md:py-24 relative overflow-hidden'>
			<div className='absolute scale-150 md:scale-100 xl:scale-125 max-w-3xl w-full top-0 transform -translate-y-3/4 md:-translate-y-2/3 xl:-translate-y-1/2 xl:-translate-x-1/3 '>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>

			<div className='content-container flex flex-col xl:flex-row-reverse items-center justify-center'>
				<div className='mb-16 xl:mb-0 max-w-xs md:max-w-xl xl:max-w-lg px-6 md:px-0 md:mx-auto xl:mr-0 w-full xl:w-1/2 '>
					<BrandGrid></BrandGrid>
				</div>
				<div className='text-center xl:text-left max-w-md  xl:w-1/2 '>
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

// const EasySection = () => {
// 	return (
// 		<section className='content-container relative pb-20 xl:flex xl:flex-row-reverse'>
// 			{/* IMAGE BOX */}
// 			<div className='absolute transform top-6 md:top-10 xl:top-36 -left-8 md:left-12 xl:left-0  w-[130%] md:w-[90%] xl:w-1/2'>
// 				{/* <img src='/home/desktop/easy.svg' alt='easy to implement illustration' /> */}
// 				{/* <object data='/home/desktop/easy.svg' type='image/svg+xml' className='easySVG' /> */}
// 				<EasyIllustration></EasyIllustration>
// 			</div>

// 			{/* CONTENT BOX */}
// 			<div className='pt-72 md:pt-[440px] xl:pt-[210px] text-center xl:text-left max-w-xl xl:max-w-lg '>
// 				<h2 className='text-3xl md:text-4xl font-serif font-bold mb-6'>Easy to implement</h2>
// 				<p className='text'>
// 					Our API comes with just a few lines of code. You’ll be up and running in no time. We built
// 					our documentation page to integrate payments functionality with ease.
// 				</p>
// 			</div>
// 		</section>
// 	)
// }

const EasySection = () => {
	return (
		<section className='content-container relative pb-20 flex flex-col items-center justify-center xl:flex-row xl:pt-32'>
			{/* IMAGE BOX */}
			<div className='relative w-[440px] md:w-[540px] xl:w-[600px] h-[270px] md:h-[320px] ml-8 xl:ml-0 mt-6 md:mt-12 xl:mt-0'>
				<div className='absolute top-0 left-0 w-full transform xl:-translate-x-20 xl:-translate-y-6'>
					<EasyIllustration></EasyIllustration>
					{/* <img src='/home/desktop/easy.svg' alt='easy to implement illustration' /> */}
					{/* <object data='/home/desktop/easy.svg' type='image/svg+xml' className='easySVG' /> */}
				</div>
			</div>

			{/* CONTENT BOX */}
			<div className='pt-6  text-center xl:text-left max-w-xl xl:max-w-md '>
				<h2 className='text-3xl md:text-4xl font-serif font-bold mb-6'>Easy to implement</h2>
				<p className='text'>
					Our API comes with just a few lines of code. You’ll be up and running in no time. We built
					our documentation page to integrate payments functionality with ease.
				</p>
			</div>
		</section>
	)
}

const SimpleSection = () => {
	return (
		<section className='content-container relative flex xl:flex-row-reverse flex-col items-center justify-center xl:justify-between'>
			{/* BG SVG */}
			<div className='absolute w-[780px] -right-1/2'>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>

			{/* IMAGE BOX */}
			<div className=''>
				<div className='w-[430px] md:w-[516px] transform translate-x-3 xl:translate-x-20'>
					<img src='/home/desktop/simple-ui.svg' alt='simple ui illustration' />
					{/* <object data='/home/desktop/easy.svg' type='image/svg+xml' className='easySVG' /> */}
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
