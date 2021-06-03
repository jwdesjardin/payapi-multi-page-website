import Link from 'next/link'
import React from 'react'

const EmailCapture = () => {
	const inputStyles =
		'py-3 px-8 rounded-full md:rounded-r-none mb-4 md:mb-0 shadow-lg md:shadow-none   '
	const genericInput = 'focus:outline-none bg-white-100 font-bold text-md w-full '

	const [email, setEmail] = React.useState('')

	return (
		<div className='shadow-none md:shadow-lg rounded-full inline-flex items-center justify-between max-w-md flex-wrap md:flex-nowrap '>
			<input
				type='email'
				className={inputStyles + ' ' + genericInput}
				placeholder='Enter email address'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<div className='bg-white-100 rounded-full md:rounded-l-none flex-shrink-0 w-full md:w-auto'>
				<Link
					href={{
						pathname: '/contact',
						query: { email },
					}}
				>
					<button className='button-primary w-full md:w-auto'>Schedule a Demo</button>
				</Link>
			</div>
		</div>
	)
}

export default EmailCapture
