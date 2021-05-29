import Head from 'next/head'

export default function Home() {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen py-2'>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className='flex flex-col items-center justify-center w-full flex-1 px-20 text-center'>
				<button disabled className='primary-button'>
					Schedule a demo
				</button>
				<button disabled className='button-light'>
					Submit Query
				</button>
				<div className='  bg-blue-900'>
					<button className='button-dark'>About Us</button>
				</div>

				<div className='mt-10'>
					<input type='text' className='text-input' placeholder='Name' />
					<textarea rows={5} className='text-input input-error' placeholder='Message' />
					<div className='mt-6'>
						<input type='checkbox' className='checkbox' />
					</div>
				</div>
			</main>
		</div>
	)
}
