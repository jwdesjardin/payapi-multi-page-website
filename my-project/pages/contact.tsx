import React from 'react'
import BrandGrid from '../components/BrandGrid'
import Checkbox from '../components/Checkbox'
import Layout from '../components/Layout'

import { useRouter } from 'next/router'

const contact = () => {
	const inputGroupStyles = 'mb-2 relative'

	// Form State
	const [name, setName] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [company, setCompany] = React.useState('')
	const [title, setTitle] = React.useState('')
	const [message, setMessage] = React.useState('')
	const [checked, setChecked] = React.useState(true)

	//Touched State
	const [touchedName, setTouchedName] = React.useState(false)
	const [touchedEmail, setTouchedEmail] = React.useState(false)
	const [touchedMessage, setTouchedMessage] = React.useState(false)

	//Errors State
	const [formErrors, setFormErrors] = React.useState<{
		name?: string
		email?: string
		message?: string
	}>({})

	const validateForm = (name: string, email: string, message: string) => {
		const errors: { name?: string; email?: string; message?: string } = {}
		if (name === '') {
			errors.name = 'Required'
		} else if (email === '') {
			errors.email = 'Required'
		} else if (message === '') {
			errors.message = 'Required'
		} else if (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email) === false) {
			errors.email = 'Please provide a valid email'
		}
		console.log(errors)
		return errors
	}

	const submitForm: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault()

		const errors = validateForm(name, email, message)
		if (Object.keys(errors).length === 0) {
			setFormErrors({})
			setTimeout(() => {
				alert(
					`Name: ${name} , Email: ${email} , Company: ${company} , Title: ${title} , Message: ${message}, Checked: ${checked}`
				)
			}, 400)
		} else {
			setFormErrors(errors)
		}
	}

	const router = useRouter()

	React.useEffect(() => {
		let email = router.query.email
		if (typeof email === 'string') {
			setEmail(email)
		}
	}, [router])

	// Solution #2 : validate each time inputs are changed or blurred
	React.useEffect(() => {
		setFormErrors({})
		const errors = validateForm(name, email, message)
		if (touchedName && errors?.name) {
			setFormErrors(errors)
		} else if (touchedEmail && errors?.email) {
			setFormErrors(errors)
		} else if (touchedMessage && errors.message) {
			setFormErrors(errors)
		}
	}, [name, email, message, touchedName, touchedEmail, touchedMessage])

	return (
		<Layout>
			<div className='absolute top-0 right-0 w-[780px] transform -translate-y-3/4 translate-x-2/3 md:-translate-y-2/3 md:translate-x-[500px] xl:translate-x-1/4'>
				<img src='/shared/desktop/bg-pattern-circle.svg' alt='' />
			</div>
			<section className='content-container text-center xl:text-left pt-6 md:pt-12 xl:pt-14 mb-10 md:mb-12'>
				<h1 className='text-3xl md:text-4xl xl:text-5xl max-w-lg xl:max-w-2xl mx-auto xl:ml-0 font-serif font-bold leading-none'>
					Submit a help request and we’ll get in touch shortly.
				</h1>
			</section>
			<div className='content-container flex flex-col xl:flex-row xl:space-x-32 items-center'>
				<div className='max-w-md'>
					<form onSubmit={submitForm}>
						<div className={inputGroupStyles}>
							{formErrors?.name && <p className='error-label'>{formErrors?.name}</p>}
							<input
								className={formErrors?.name ? 'text-input input-error ' : 'text-input'}
								name='name'
								placeholder='Name'
								type='text'
								value={name}
								onChange={(e) => setName(e.target.value)}
								autoComplete='on'
								onBlur={() => setTouchedName(true)}
							/>
						</div>
						<div className={inputGroupStyles}>
							{formErrors?.email && <p className='error-label'>{formErrors?.email}</p>}
							<input
								className={formErrors?.email ? 'text-input input-error' : 'text-input'}
								name='email'
								placeholder='Email Address'
								type='text'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								onBlur={() => setTouchedEmail(true)}
							/>
						</div>
						<div className={inputGroupStyles}>
							<input
								className='text-input'
								name='company'
								placeholder='Company Name'
								type='text'
								value={company}
								onChange={(e) => setCompany(e.target.value)}
								autoComplete='on'
							/>
						</div>
						<div className={inputGroupStyles}>
							<input
								className='text-input'
								name='jobTitle'
								placeholder='Job Title'
								type='text'
								value={title}
								onChange={(e) => setTitle(e.target.value)}
								autoComplete='on'
							/>
						</div>
						<div className={inputGroupStyles}>
							{formErrors?.message && <p className='error-label'>{formErrors?.message}</p>}
							<textarea
								rows={3}
								className={formErrors?.message ? 'text-input input-error' : 'text-input'}
								name='message'
								placeholder='Message'
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								onBlur={() => setTouchedMessage(true)}
							/>
						</div>
						<div className='flex mb-6 items-center'>
							<div className='w-3/12'>
								<Checkbox state={checked} setState={setChecked}></Checkbox>
							</div>

							<p className='text-md'>
								Stay up-to-date with company announcements and updates to our API
							</p>
						</div>
						<div className='flex '>
							<button className='button-light w-[152px] focus:outline-black' type='submit'>
								Submit
							</button>
						</div>
					</form>
				</div>

				<div className='mt-20 md:mt-16 flex flex-col items-center xl:items-start text-center xl:text-left '>
					<h3 className='text-2xl font-serif font-bold max-w-xs md:max-w-md mb-8 md:mb-10'>
						Join the thousands of innovators that are already building with us
					</h3>
					<div className='w-full px-4 md:px-0 md:w-[541px] '>
						<BrandGrid></BrandGrid>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default contact
