import React from 'react'
import Layout from '../components/Layout'

const pricing = () => {
	return (
		<Layout>
			<section className='content-container'>
				<h1>Pricing</h1>
				<PriceComponent></PriceComponent>
			</section>
		</Layout>
	)
}

export default pricing

const PriceComponent = () => {
	return (
		<div className=''>
			<h3 className=''>Free Plan</h3>
			<p className=''>Build and test using our core set of products with up to 100 API requests</p>
			<p className=''>$0.00</p>
			<ul className=''>
				<li className=''>Transactions</li>
				<li className=''>Auth</li>
				<li className=''>Identity</li>
				<li className=''>Investments</li>
				<li className=''>Assets</li>
				<li className=''>Liabilities</li>
				<li className=''>Income</li>
				<li className=''>Request Access</li>
			</ul>
			<button className='button-light'>Request Access</button>
		</div>
	)
}
