import React from 'react'
import EmailCapture from '../EmailCapture'
import Heading from '../Heading'

const Ready = () => {
	return (
		<div className='content-container py-20 md:py-24 flex flex-col xl:flex-row justify-center xl:justify-between items-center'>
			<Heading type='h2' size='md' className='text-center mb-8 md:mb-10 xl:mb-0 md:text-4xl'>
				Ready to start?
			</Heading>
			<div className=''>
				<EmailCapture></EmailCapture>
			</div>
		</div>
	)
}

export default Ready
