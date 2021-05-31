The tech stack will be about the same as the last project i completed.

TailwindCSS - Really aiming to master these skills here
Next.js - React Framwork with typescript
Formik- form validation

I am going to aim to imporve my workflow in this project

very strong presets, mobile-utility-first, extract components, complete components

STEPS

## Project setup

#### tailwind config

[x] Tailwind.config colors, fontsizes, font-families

#### css utility classes

[x] @apply classes, primary-button, light-button, dark-button @layer components
[x] @apply text-input, text-area, error-message, input-label, checkbox @layer components
[x] create component for checkbox
[x] typography classes @layer utilities
[x] heading-sm-xxl @layer utilities
[x] text-light, and dark @layer utilities

#### reusable components

[x] build out reused components
[x] email-capture
[x] brand-grid

#### layout

[x] navbar
[] footer
[] ready \*\*reused

## Build HomePage

[] build out home page components + assemble into homepage as I go
[] hero
[] brands
[] easy
[] simple
[] info-grid

## Build Pricing Page

[] pricecomponent
[] price grid

## Build about page

[] Page Title
[] Details**
[] Image
[] stats-grid
[] Details**

## build contact page

[] page title
[] contact form
[] brand content

[] add background designs absolute and negative z-index

ISSUES menu animation

Method # 1 Transition from headlessui

```tsx
<Transition
	show={menu}
	enter='transition ease-in-out duration-1000 transform'
	enterFrom='translate-x-full'
	enterTo='translate-x-0'
	leave='transition ease-in-out duration-1000 transform'
	leaveFrom='translate-x-0'
	leaveTo='translate-x-full'
>
	<div className='absolute right-0 top-0 h-screen w-10/12 bg-blue-900 md:hidden'>
		<div className='mt-12 mr-8 flex justify-end' onClick={() => toggleMenu(false)}>
			<CloseSVG />
		</div>
		<div className='border-t border-white-100 border-opacity-60 mx-6 flex-col flex items-center text-[20px] text-white-100 mt-6 '>
			<Link href='/pricing'>
				<a className={linkHoverEffect + ' mb-8 mt-10'}>Pricing</a>
			</Link>
			<Link href='/about'>
				<a href='' className={linkHoverEffect + ' mb-8'}>
					About
				</a>
			</Link>
			<Link href='/contact'>
				<a href='' className={linkHoverEffect + ' mb-8'}>
					Contact
				</a>
			</Link>
			{/* Not sure what the functionality of this link should be check back later, no email capture like other similar buttons */}
			<Link href=''>
				<button className='button-primary w-full'>Schedule a Demo</button>
			</Link>
		</div>
	</div>
</Transition>
```

Solution:

```tsx
<Transition
	show={menu}
	enter='transition ease-in-out duration-700 transform'
	enterFrom='translate-x-full'
	enterTo='translate-x-0'
	leave='transition ease-in-out duration-700 transform'
	leaveFrom='translate-x-0'
	leaveTo='translate-x-full'
	className='absolute right-0 top-0 h-screen w-10/12 bg-blue-900 md:hidden'
>
	<div className='mt-12 mr-8 flex justify-end' onClick={() => toggleMenu(false)}>
		<CloseSVG />
	</div>
	<div className='border-t border-white-100 border-opacity-60 mx-6 flex-col flex items-center text-[20px] text-white-100 mt-6 '>
		<Link href='/pricing'>
			<a className={linkHoverEffect + ' mb-8 mt-10'}>Pricing</a>
		</Link>
		<Link href='/about'>
			<a href='' className={linkHoverEffect + ' mb-8'}>
				About
			</a>
		</Link>
		<Link href='/contact'>
			<a href='' className={linkHoverEffect + ' mb-8'}>
				Contact
			</a>
		</Link>
		{/* Not sure what the functionality of this link should be check back later, no email capture like other similar buttons */}
		<Link href=''>
			<button className='button-primary w-full'>Schedule a Demo</button>
		</Link>
	</div>
</Transition>
```

Steps to solve this manually without Transition

1. create keyframes for slidein and slideout
1. create class that sets animation to this keyframe and duration
1. create div and move off screen with transform (overflow hidden on body)
1. add slideIn class on button click
1. add slideOut, and translate on close click (no state is used

using headless transition allows you to use state so the element is removed from the dom the end and triggered by state changes
