import React, { useState } from 'react'

const Checkbox = ({ state, setState }: { state: boolean; setState: (state: boolean) => void }) => {
	return (
		<div className='flex items-center'>
			<input
				type='checkbox'
				className='appearance-none absolute h-6 w-6'
				checked={state}
				onChange={() => setState(!state)}
			/>
			<div className='bg-grey-400 bg-opacity-50 w-6 h-6 flex flex-shrink-0 justify-center items-center'>
				<CheckmarkSVG></CheckmarkSVG>
			</div>
		</div>
	)
}

const CheckmarkSVG = () => {
	return (
		<svg
			className='fill-current hidden w-3 h-3 text-blue-7 pointer-events-none focus:outline-black'
			version='1.1'
			viewBox='0 0 17 12'
			xmlns='http://www.w3.org/2000/svg'
		>
			<g fill='none' fillRule='evenodd'>
				<g transform='translate(-9 -11)' fill='#fff' fillRule='nonzero'>
					<path d='m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z' />
				</g>
			</g>
		</svg>
	)
}

export default Checkbox
