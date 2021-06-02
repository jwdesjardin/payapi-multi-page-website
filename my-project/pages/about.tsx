import React from 'react'
import Layout from '../components/Layout'

const about = () => {
	return (
		<Layout>
			<div className='absolute top-0 right-0 w-[780px] transform -translate-y-3/4 translate-x-2/3 md:-translate-y-2/3 md:translate-x-[500px] xl:translate-x-1/4'>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>

			<div className='opacity-0 xl:opacity-100 absolute left-0 top-0 transform translate-y-[600px] -translate-x-2/3 '>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>

			<section className='content-container mb-10 md:mb-14 pt-4 md:pt-8 flex justify-center xl:justify-start xl:pl-24'>
				<h1 className='text-3xl md:text-4xl max-w-xl font-bold font-serif text-center xl:text-left leading-none'>
					We empower innovators by delivering access to the financial system
				</h1>
			</section>

			<section className='content-container flex flex-col items-center space-y-12 md:space-y-16 mb-16 md:mb-24'>
				<TextSection />
				<TextSection />
			</section>
			<div className='team-background-image relative z-20'>
				{/* <img src='/about/mobile/image-team-members.jpg' alt='' className='md:hidden' />
				<img
					src='/about/tablet/image-team-members.jpg'
					alt=''
					className='hidden md:block xl:hidden'
				/>
				<img src='/about/desktop/image-team-members.jpg' alt='' className='hidden xl:block' /> */}
			</div>
			<StatSection></StatSection>
			<section className='content-container flex flex-col items-center space-y-12'>
				<TextSection></TextSection>
				<TextSection></TextSection>
			</section>
		</Layout>
	)
}

export default about

const TextSection = () => {
	return (
		<div className='md:flex md:space-between'>
			<h3 className='text-2xl md:text-3xl font-bold font-serif text-center md:text-left leading-none mb-4 md:w-1/3'>
				Our Vision
			</h3>
			<p className='text text-center md:text-left md:w-2/3 max-w-3xl '>
				Our main goal is to build beautiful consumer experiences along with developer-friendly
				infrastructure. The result is an intelligent tool that gives everyone the ability to create
				amazing products that solve big problems. We are deeply focused on democratizing financial
				services through technology.
			</p>
		</div>
	)
}

const StatSection = () => {
	return (
		<section className='content-container grey-y-border md:border-none text-center md:text-left my-12 py-6 xl:py-16 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 '>
			<StatCard />
			<StatCard />
			<StatCard />
		</section>
	)
}

const StatCard = () => {
	return (
		<div className='md:grey-y-border md:py-4 md:w-1/3'>
			<h4 className=''>Team Members</h4>
			<p className='text-pink-700 text-5xl font-bold font-serif'>300+</p>
		</div>
	)
}
