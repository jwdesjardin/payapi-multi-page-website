import React from 'react'
import BrandGrid from '../components/BrandGrid'
import Checkbox from '../components/Checkbox'
import EmailCapture from '../components/EmailCapture'
import Heading from '../components/Heading'
import Layout from '../components/Layout'

export default function Home() {
	return (
		<Layout title='Homepage'>
			<button disabled className='primary-button'>
				Schedule a demo
			</button>
			<button className='button-light'>Submit Query</button>
			<div className='  bg-blue-900'>
				<button className='button-dark'>About Us</button>
			</div>

			<div className='mt-10'>
				<input type='text' className='text-input' placeholder='Name' />
				<textarea rows={5} className='text-input input-error' placeholder='Message' />
				<div className='mt-6'>
					<Checkbox></Checkbox>
				</div>
			</div>

			<Heading size='md' type='h2'>
				Yehllow
			</Heading>

			<EmailCapture></EmailCapture>
			<BrandGrid textColor='light'></BrandGrid>
			<div className='mb-20'></div>
		</Layout>
	)
}
