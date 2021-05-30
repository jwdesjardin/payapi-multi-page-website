import React from 'react'
import { GoogleSVG, HPSVG, MicrosoftSVG, NvidiaSVG, OracleSVG, TeslaSVG } from './Icons'

const BrandGrid = ({ textColor }: { textColor: 'dark' | 'light' }) => {
	const dark = 'text-blue-700'
	const light = 'text-white-100'
	const gridStyles =
		'grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-12 items-center place-items-center'
	// display nothing if textColor is not passed
	let currentStyles = 'hidden'

	if (textColor === 'light') {
		currentStyles = gridStyles + ' ' + light
	} else if (textColor === 'dark') {
		currentStyles = gridStyles + ' ' + dark
	}

	return (
		<div className={currentStyles}>
			<TeslaSVG />
			<MicrosoftSVG />
			<HPSVG />
			<OracleSVG />
			<GoogleSVG />
			<NvidiaSVG />
		</div>
	)
}

export default BrandGrid
