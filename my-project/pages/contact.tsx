import React from 'react'
import BrandGrid from '../components/BrandGrid'
import Checkbox from '../components/Checkbox'
import Layout from '../components/Layout'

const contact = () => {
	const inputGroupStyles = 'mb-6'
	return (
		<Layout>
			<section className='content-container text-center pt-6 mb-10'>
				<h1 className='text-3xl font-serif font-bold leading-none'>
					Submit a help request and we’ll get in touch shortly.
				</h1>
			</section>
			<div className=''>
				<div className='content-container'>
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

				<div className='mt-20 flex flex-col items-center text-center content-container'>
					<h3 className='text-2xl font-serif font-bold max-w-xs mb-8'>
						Join the thousands of innovators already building with us
					</h3>
					<div className='w-full px-4'>
						<BrandGrid></BrandGrid>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default contact
