import React from 'react'
import Layout from '../components/Layout'

const about = () => {
	return (
		<Layout>
			<h1>We empower innovators by delivering access to the financial system</h1>
			<section>
				<TextSection />
				<TextSection />
			</section>
			<section>
				<img src='/about/mobile/image-team-members.jpg' alt='' />
			</section>
			<StatSection></StatSection>
			<section>
				<TextSection></TextSection>
				<TextSection></TextSection>
			</section>
		</Layout>
	)
}

export default about

const TextSection = () => {
	return (
		<div>
			<h3>Our Vision</h3>
			<p>
				Our main goal is to build beautiful consumer experiences along with developer-friendly
				infrastructure. The result is an intelligent tool that gives everyone the ability to create
				amazing products that solve big problems. We are deeply focused on democratizing financial
				services through technology.
			</p>
		</div>
	)
}

const StatSection = () => {
	return (
		<section>
			<div>
				<h4>Team Members</h4>
				<p>300+</p>
			</div>
			<div>
				<h4>Offices in the US</h4>
				<p>3</p>
			</div>
			<div>
				<h4>Transactions analyzed</h4>
				<p>10M+</p>
			</div>
		</section>
	)
}
