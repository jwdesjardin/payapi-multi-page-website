import React from 'react'
import Layout from '../components/Layout'

const pricing = () => {
	return (
		<Layout>
			<section className='content-container'>
				<h1 className='text-3xl md:text-4xl xl:text-5xl font-serif font-bold text-center xl:text-left mb-12 md:mb-16 mt-6'>
					Pricing
				</h1>
				<div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
					<PriceComponent></PriceComponent>
					<PriceComponent></PriceComponent>
					<PriceComponent></PriceComponent>
				</div>
			</section>
		</Layout>
	)
}

export default pricing

const PriceComponent = () => {
	const selected = 'pinkCheckBefore mb-2'
	const unselected = 'opacity-60 mb-2'

	return (
		<div className='max-w-sm flex flex-col items-center xl:items-start mb-12'>
			<h3 className='text-pink-700 text-2xl xl:text-3xl font-serif font-bold mb-4'>Free Plan</h3>
			<p className='invisible md:visible text-center xl:text-left text mb-4 xl:mr-6'>
				Build and test using our core set of products with up to 100 API requests
			</p>
			<p className='text-5xl md:text-4xl font-bold font-serif mb-6'>$0.00</p>
			<div className='flex justify-center xl:justify-start xl:pl-10 border-b border-t border-grey-400 border-opacity-25 py-6 mb-6 w-full'>
				<ul className='flex flex-col items-start'>
					<li className={selected}>Transactions</li>
					<li className={selected}>Auth</li>
					<li className={selected}>Identity</li>
					<li className={selected}>Investments</li>
					<li className={selected}>Assets</li>
					<li className={unselected}>Liabilities</li>
					<li className={unselected}>Income</li>
				</ul>
			</div>

			<button className='button-light'>Request Access</button>
		</div>
	)
}
