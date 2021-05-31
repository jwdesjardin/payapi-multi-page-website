import React from 'react'
import { GoogleSVG, HPSVG, MicrosoftSVG, NvidiaSVG, OracleSVG, TeslaSVG } from './Icons'

const BrandGrid = () => {
	const gridStyles =
		'grid grid-cols-2 md:grid-cols-3 gap-y-10 md:gap-y-12 gap-x-12 items-center place-items-center'

	return (
		<div className={gridStyles}>
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
