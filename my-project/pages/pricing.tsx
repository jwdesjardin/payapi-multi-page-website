import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'

const pricing = () => {
	return (
		<Layout>
			<section className='content-container'>
				<div className='absolute top-0 right-0 w-[780px] transform -translate-y-3/4 translate-x-2/3 md:-translate-y-2/3 md:translate-x-[500px] xl:translate-x-1/4'>
					<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
				</div>

				<h1 className='text-3xl md:text-4xl xl:text-5xl font-serif font-bold text-center xl:text-left mb-12 md:mb-16 mt-6'>
					Pricing
				</h1>
				<div className='flex flex-col items-center justify-center md:flex-row md:space-x-4'>
					<PriceComponent
						title='Free Plan'
						desc='Build and test using our core set of products with up to 100 API requests'
						price='$0.00'
						values={[
							{ value: 'Transactions', selected: true },
							{ value: 'Auth', selected: true },
							{ value: 'Identity', selected: true },
							{ value: 'Investments', selected: false },
							{ value: 'Assets', selected: false },
							{ value: 'Liabilities', selected: false },
							{ value: 'Income', selected: false },
						]}
					></PriceComponent>
					<PriceComponent
						title='Basic Plan'
						desc='Launch your project with unlimited requests and no contractual minimums'
						price='$249.00'
						values={[
							{ value: 'Transactions', selected: true },
							{ value: 'Auth', selected: true },
							{ value: 'Identity', selected: true },
							{ value: 'Investments', selected: true },
							{ value: 'Assets', selected: true },
							{ value: 'Liabilities', selected: false },
							{ value: 'Income', selected: false },
						]}
					></PriceComponent>
					<PriceComponent
						title='Premium Plan'
						desc='Get tailored solutions, volume pricing, and dedicated support for your team'
						price='$499.00'
						values={[
							{ value: 'Transactions', selected: true },
							{ value: 'Auth', selected: true },
							{ value: 'Identity', selected: true },
							{ value: 'Investments', selected: true },
							{ value: 'Assets', selected: true },
							{ value: 'Liabilities', selected: true },
							{ value: 'Income', selected: true },
						]}
					></PriceComponent>
				</div>
			</section>
		</Layout>
	)
}

export default pricing

const PriceComponent = ({
	title,
	desc,
	price,
	values,
}: {
	title: string
	desc: string
	price: string
	values: {
		value: string
		selected: boolean
	}[]
}) => {
	const selected = 'pinkCheckBefore mb-2'
	const unselected = 'opacity-60 mb-2'

	return (
		<div className='max-w-sm flex flex-col items-center xl:items-start mb-12'>
			<h3 className='text-pink-700 text-2xl xl:text-3xl font-serif font-bold mb-4'>{title}</h3>
			<p className='invisible md:visible text-center xl:text-left text mb-4 xl:mr-6'>{desc}</p>
			<p className='text-5xl md:text-4xl font-bold font-serif mb-6'>{price}</p>
			<div className='flex justify-center xl:justify-start xl:pl-10 border-b border-t border-grey-400 border-opacity-25 py-6 mb-6 w-full'>
				<ul className='flex flex-col items-start'>
					{values.map((item) => (
						<li key={item.value} className={item.selected ? selected : unselected}>
							{item.value}
						</li>
					))}
				</ul>
			</div>
			<Link href='/contact'>
				<button className='button-light focus:outline-black'>Request Access</button>
			</Link>
		</div>
	)
}
