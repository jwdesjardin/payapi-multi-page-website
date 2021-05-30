import React from 'react'

const EmailCapture = () => {
	const inputStyles =
		'py-3 px-6 rounded-full md:rounded-r-none mb-4 md:mb-0 shadow-lg md:shadow-none   '
	const genericInput = 'focus:outline-none bg-white-100 font-bold text-md w-full '
	return (
		<div className='my-20 shadow-none md:shadow-lg rounded-full inline-flex items-center justify-between md:max-w-md flex-wrap md:flex-nowrap '>
			<input
				type='text'
				className={inputStyles + ' ' + genericInput}
				placeholder='Enter email address'
			/>
			<div className='bg-white-100 rounded-full md:rounded-l-none flex-shrink-0 w-full md:w-auto'>
				<button className='button-primary w-full md:w-auto'>Schedule a Demo</button>
			</div>
		</div>
	)
}

export default EmailCapture
