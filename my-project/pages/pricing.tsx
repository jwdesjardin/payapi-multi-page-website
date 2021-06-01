import React from 'react'
import Layout from '../components/Layout'

const pricing = () => {
	return (
		<Layout>
			<section className='content-container'>
				<h1 className='text-3xl font-serif font-bold text-center mb-12 mt-6'>Pricing</h1>
				<PriceComponent></PriceComponent>
			</section>
		</Layout>
	)
}

export default pricing

const PriceComponent = () => {
	const selected = 'pinkCheckBefore mb-2'
	const unselected = 'opacity-60 mb-2'

	return (
		<div className='max-w-sm flex flex-col items-center'>
			<h3 className='text-pink-700 text-2xl font-serif font-bold mb-4'>Free Plan</h3>
			<p className='invisible text'>
				Build and test using our core set of products with up to 100 API requests
			</p>
			<p className='text-[56px] font-bold font-serif mb-6'>$0.00</p>
			<div className='flex justify-center border-b border-t border-grey-400 border-opacity-25 py-6 mb-6 w-full'>
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
