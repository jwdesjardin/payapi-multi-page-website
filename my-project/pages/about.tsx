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
				<TextSection
					title='Our Vision'
					text='Our main goal is to build beautiful consumer experiences along with developer-friendly
				infrastructure. The result is an intelligent tool that gives everyone the ability to create
				amazing products that solve big problems. We are deeply focused on democratizing financial
				services through technology.'
				></TextSection>
				<TextSection
					title='Our Business'
					text='At the core of our platform is the technical infrastructure APIs that connect consumers. 
    Our innovative product provides key insights for businesses and individuals, as well as 
    robust reporting for traditional financial institutions and developers.'
				></TextSection>
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
				<TextSection
					title='The Culture'
					text="We strongly believe there's always an opportunity to learn from each other outside of 
    day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
    We always value cross-team collaboration and diversity of thought, no matter the job title."
				></TextSection>
				<TextSection
					title='The People'
					text={`We're all passionate about building a more efficient and inclusive financial infrastructure 
    together. At PayAPI, we have diverse backgrounds and skills.`}
				></TextSection>
			</section>
		</Layout>
	)
}

export default about

const TextSection = ({ title, text }: { title: string; text: string }) => {
	return (
		<div className='md:flex md:space-between'>
			<h3 className='text-2xl md:text-3xl font-bold font-serif text-center md:text-left leading-none mb-4 md:w-1/3'>
				{title}
			</h3>
			<p className='text text-center md:text-left md:w-2/3 max-w-3xl '>{text}</p>
		</div>
	)
}

const StatSection = () => {
	return (
		<section className='content-container grey-y-border md:border-none text-center md:text-left my-12 py-6 xl:py-16 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-6 '>
			<StatCard title='Team Members' value='300+' />
			<StatCard title='Offices in the US' value='3' />
			<StatCard title='Transactions analyzed' value='10M+' />
		</section>
	)
}

const StatCard = ({ title, value }: { title: string; value: string }) => {
	return (
		<div className='md:grey-y-border md:py-4 md:w-1/3'>
			<h4 className=''>{title}</h4>
			<p className='text-pink-700 text-5xl font-bold font-serif'>{value}</p>
		</div>
	)
}
