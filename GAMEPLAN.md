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
[x] footer
[x] ready \*\*reused

## Build HomePage

[] build out home page components + assemble into homepage as I go
[x] hero
[x] brands
[x] easy
[x] simple
[x] info-grid

## Build Pricing Page

[x] price component
[x] price grid

## Build about page

[x] Page Title
[x] Details**
[x] Image
[x] stats-grid
[x] Details**

## build contact page

[x] page title
[x] contact form
[x] brand content

[x] add background designs absolute and ~~negative z-index~~

Steps left
Refactor - DRY up common patterns
Make Improvements - state/form

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

## things i have learned so far

- svg viewbox to scale svg components (2 options image/object or inline svg)

- animations entering and exiting translate
  -hiding offscreen elements

  - transitions offscreen instead of removing from state
  - possible add a timeout to remove from dom after animation in custom funtoin
  - headless ui transition property helps with a lot of this

- svg id naming conflict when using inline-svgs

- use css with svgs when object or inline (fill-current, stoke-current)

- xmlSpace='preserve'

- passing data / collecting data from query string

- image that expands to fit all screen sizes

- transform translates to place absolute items must be in relative

- must be non static to use z-index

- layout section

- dynamic components

1. SVGs - scaling - embedding fonts - nano

1. Menu Components - dont scroll : postion - fixed - z-index : postion relative - sliding tansition

1. Layout Component
   Head component
   -Navbar - Footer - Ready Section

1. Passing Email with Query String

1. exiting animations and Headless ui Transition

1. Postioning images

- abosulte : translates bg circle (2 options relative layout or relative container)
- set width and tanslate text and image with shadow (sometimes absolute)
- scalable bg iamge cover : about page

1. input focus, autocomplete styling, checkbox styling

1. form state and custom validation

1. focus outlines and active states for accesibility

Homepage layout

## common patterns

bg circle
heading text

grey borders y
buttons
