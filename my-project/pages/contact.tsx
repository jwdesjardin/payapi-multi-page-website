import React from 'react'
import BrandGrid from '../components/BrandGrid'
import Checkbox from '../components/Checkbox'
import Layout from '../components/Layout'

const contact = () => {
	const inputGroupStyles = 'mb-6'
	return (
		<Layout>
			<div className='absolute top-0 right-0 w-[780px] transform -translate-y-3/4 translate-x-2/3 md:-translate-y-2/3 md:translate-x-[500px] xl:translate-x-1/4'>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>
			<section className='content-container text-center xl:text-left pt-6 md:pt-12 xl:pt-14 mb-10 md:mb-12'>
				<h1 className='text-3xl md:text-4xl xl:text-5xl max-w-lg xl:max-w-2xl mx-auto xl:ml-0 font-serif font-bold leading-none'>
					Submit a help request and we’ll get in touch shortly.
				</h1>
			</section>
			<div className='content-container flex flex-col xl:flex-row xl:space-x-32 items-center'>
				<div className='max-w-md'>
					<form action=''>
						<div className={inputGroupStyles}>
							<input className='text-input' id='name' placeholder='Name' type='text' />
						</div>
						<div className={inputGroupStyles}>
							<input className='text-input' id='email' placeholder='Email Address' type='text' />
						</div>
						<div className={inputGroupStyles}>
							<input className='text-input' id='company' placeholder='Company Name' type='text' />
						</div>
						<div className={inputGroupStyles}>
							<input className='text-input' id='jobTitle' placeholder='Job Title' type='text' />
						</div>
						<div className={inputGroupStyles}>
							<textarea rows={3} className='text-input' id='message' placeholder='Message' />
						</div>
						<div className='flex mb-6 items-center'>
							<div className='w-3/12'>
								<Checkbox></Checkbox>
							</div>

							<p className='text-md'>
								Stay up-to-date with company announcements and updates to our API
							</p>
						</div>
						<div className='flex '>
							<button className='button-light w-[152px]' type='submit'>
								Submit
							</button>
						</div>
					</form>
				</div>

				<div className='mt-20 md:mt-16 flex flex-col items-center xl:items-start text-center xl:text-left '>
					<h3 className='text-2xl font-serif font-bold max-w-xs md:max-w-md mb-8 md:mb-10'>
						Join the thousands of innovators that are already building with us
					</h3>
					<div className='w-full px-4 md:px-0 md:w-[541px] '>
						<BrandGrid></BrandGrid>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default contact
