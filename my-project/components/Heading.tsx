import React, { createElement } from 'react'

interface Props {
	size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
	type: 'h1' | 'h2' | 'h3' | 'h4'
	children: React.ReactNode
}

const Heading = ({ size, type, children }: Props) => {
	const HeadingTypes = {
		sm: 'text-2xl font-serif',
		md: 'text-3xl font-serif',
		lg: 'text-4xl font-serif',
		xl: 'text-5xl font-serif',
		xxl: 'text-6xl font-serif',
	}

	const heading = createElement(type, { className: HeadingTypes[size] }, children)
	return heading
}

export default Heading
