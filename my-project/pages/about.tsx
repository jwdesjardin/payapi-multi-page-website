import React from 'react'
import Layout from '../components/Layout'

const about = () => {
	return (
		<Layout>
			<section className='content-container mb-10 pt-4'>
				<h1 className='text-3xl font-bold font-serif text-center leading-none'>
					We empower innovators by delivering access to the financial system
				</h1>
			</section>

			<section className='content-container flex flex-col items-center space-y-12 mb-16'>
				<TextSection />
				<TextSection />
			</section>
			<section className=''>
				<img src='/about/mobile/image-team-members.jpg' alt='' />
			</section>
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
		<div className=''>
			<h3 className='text-2xl font-bold font-serif text-center leading-none mb-4'>Our Vision</h3>
			<p className='text text-center '>
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
		<section className='content-container border-b border-t border-grey-400 border-opacity-25 text-center my-12 py-6 flex flex-col items-center space-y-8 '>
			<StatCard />
			<StatCard />
			<StatCard />
		</section>
	)
}

const StatCard = () => {
	return (
		<div className=''>
			<h4 className=''>Team Members</h4>
			<p className='text-pink-700 text-5xl font-bold font-serif'>300+</p>
		</div>
	)
}
