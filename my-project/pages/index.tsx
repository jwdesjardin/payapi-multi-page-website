import Head from 'next/head'
import React from 'react'
import Checkbox from '../components/Checkbox'
import EmailCapture from '../components/EmailCapture'
import Heading from '../components/Heading'

export default function Home() {
	return (
		<div className=''>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className=''>
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
			</main>
		</div>
	)
}
