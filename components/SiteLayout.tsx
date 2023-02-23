/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          emerald: colors.emerald,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import Image from 'next/image'
// import { useUser, UserButton, SignInButton, SignUpButton } from '@clerk/nextjs'
import Logo from './Logo'
import { useState } from 'react'

// const stats = [
//   { label: 'Founded', value: '2021' },
//   { label: 'Employees', value: '5' },
//   { label: 'Beta Users', value: '521' },
//   { label: 'Raised', value: '$25M' },
// ]
// const logos = [
//   {
//     name: 'Transistor',
//     url: 'https://tailwindui.com/img/logos/transistor-logo-gray-400.svg',
//   },
//   {
//     name: 'Mirage',
//     url: 'https://tailwindui.com/img/logos/mirage-logo-gray-400.svg',
//   },
//   {
//     name: 'Tuple',
//     url: 'https://tailwindui.com/img/logos/tuple-logo-gray-400.svg',
//   },
//   {
//     name: 'Laravel',
//     url: 'https://tailwindui.com/img/logos/laravel-logo-gray-400.svg',
//   },
//   {
//     name: 'StaticKit',
//     url: 'https://tailwindui.com/img/logos/statickit-logo-gray-400.svg',
//   },
//   {
//     name: 'Workcation',
//     url: 'https://tailwindui.com/img/logos/workcation-logo-gray-400.svg',
//   },
// ]
// const footerNavigation = {
//   main: [
//     { name: 'About', href: '#' },
//     { name: 'Features', href: '#' },
//     { name: 'Pricing', href: '#' },
//     { name: 'Partners', href: '#' },
//   ],
//   social: [
//     {
//       name: 'Facebook',
//       href: '#',
//       icon: (props: any) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path
//             fillRule="evenodd"
//             d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//             clipRule="evenodd"
//           />
//         </svg>
//       ),
//     },
//     {
//       name: 'Twitter',
//       href: '#',
//       icon: (props: any) => (
//         <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
//           <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
//         </svg>
//       ),
//     },
//   ],
// }

export default function SiteLayout(props: { children: any }) {
  // const { isSignedIn, isLoaded, user } = useUser()


  return (
    <div className="max-w-[1600px] min-h-screen m-auto relative">
      <nav className='absolute px-20 py-10 w-full z-50'>
        <div className="shadow-lg rounded-lg bg-white flex justify-between w-full px-6 py-1">
          <div className="flex gap-20">
            <Logo />
            <div className="flex items-center gap-6">
              <Link href='#'>Home</Link>
              <Link href='#'>About</Link>
              <Link href='#'>Store</Link>
              <Link href='#'>Blog</Link>
              <Link href='#'>Contact</Link>
            </div>
          </div>
          <div className="flex items-center gap-10">
            <div className="cursor-pointer uppercase">Sign Up / Login</div>
            <div className="flex items-center gap-5">
              <Image src="/search.png" alt="" width={24} height={24} className="cursor-pointer" />
              <Image src="/User.png" alt="" width={24} height={24} className="cursor-pointer" />
              <div className="relative">
                <Image src="/cart.png" alt="" width={24} height={24} className="cursor-pointer" />
                <div className="absolute -top-3 -right-4 w-[25px] h-[25px] font-bold text-xs rounded-full bg-[#1C7962] text-white grid place-items-center">5</div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="flex h-screen w-full relative">
        <div className="flex-[3]"></div>
        <div className="flex-1 bg-[#1C7962]"></div>

        <div className="absolute top-0 left-0 min-h-screen w-full grid place-items-center">
          <div className="flex justify-between items-center px-[20px] -mb-32">
            <div className="flex-1 pl-20 -mt-6">
              <h6 className="heading2">Welcome to CBDSuite</h6>
              <h1 className="heading1">The all-in-one platform designed for CBD sellers</h1>
              <p className="text-[14px] leading-[26px] font-[poppins] mt-2">If you're a merchant looking to sell CBD products online, you know how challenging it can be to find financial services that are tailored to your needs. That's where CBDSuite comes in</p>
              <GetStartedBtn />
            </div>
            <Image src={'/form.svg'} alt='' className='flex-1 w-full h-[fit-content]' width={850} height={560} />
          </div>
        </div>
      </header>

      <section className="mt-[100px]">
        <div className="text-center">
          <h6 className="heading2 mb-[12px]">solution</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">Your ECommerce solution</h3>
        </div>

        <div className="flex justify-center gap-0 flex-wrap mt-[50px]">
          <div className="flex flex-col items-center w-[260px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Professional website</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="flex flex-col items-center w-[260px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Professional website</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="flex flex-col items-center w-[260px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Professional website</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="flex flex-col items-center w-[260px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Professional website</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="flex flex-col items-center w-[260px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Professional website</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
        <div className="flex justify-center mt-7"><GetStartedBtn /></div>
      </section>

      <section className="mt-[100px] flex items-center">
        <div className="flex-[2]">
          <Image src={'/img5.png'} alt='' className='flex-1 w-full h-[fit-content]' width={900} height={700} />
        </div>
        <div className="flex-1">
          <h6 className="heading2 mb-[12px]">offers</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">Our platform offers</h3>
          <p className="text-[14px] leading-[26px] font-[poppins] mt-2 w-[90%]">Our platform offers everything you need to build and grow your CBD business, from a customizable e-commerce site to inventory financing and lending products. With CBDSuite, you'll have access to a suite of tools designed to meet the unique challenges faced by CBD merchants</p>
          <GetStartedBtn />
        </div>
      </section>

      <section className="mt-[100px] flex items-center">
        <div className="flex-1 pl-[70px]">
          <h6 className="heading2 mb-[12px]">payment processing</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">Payment processing CBD-friendly</h3>
          <p className="text-[14px] leading-[26px] font-[poppins] mt-2 w-[90%]">One of the biggest challenges CBD merchants face is finding payment processing solutions that are CBD-friendly. Many banks and payment processors still consider CBD products to be high-risk, making it difficult for merchants to find reliable payment processing services. But with CBDSuite, you'll have access to payment processing solutions that are tailored to the needs of CBD sellers, so you can accept payments with ease.</p>
          <GetStartedBtn />
        </div>
        <div className="flex-[2] flex justify-end">
          <Image src={'/img6.png'} alt='' className='flex-1 w-full h-[fit-content]' width={900} height={700} />
        </div>
      </section>

      <section className="mt-[100px] flex items-center">
        <div className="flex-[2]">
          <Image src={'/img7.png'} alt='' className='flex-1 w-full h-[fit-content]' width={900} height={700} />
        </div>
        <div className="flex-1">
          <h6 className="heading2 mb-[12px]">manage</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">Managing inventory and cash flow</h3>
          <p className="text-[14px] leading-[26px] font-[poppins] mt-2 w-[90%]">We also understand that managing inventory and cash flow can be a challenge for CBD sellers. That's why we offer inventory finance and lending products that CBD sellers can qualify for. This allows you to manage your inventory and cash flow more effectively, so you can focus on growing your business</p>
          <GetStartedBtn />
        </div>
      </section>

      <section className="mt-[100px] flex items-center">
        <div className="flex-1 pl-[70px]">
          <h6 className="heading2 mb-[12px]">cbd merchants</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">At CBDsuite, helping CBD merchants</h3>
          <p className="text-[14px] leading-[26px] font-[poppins] mt-2 w-[90%]">At CBDSuite, we're committed to helping CBD merchants succeed. Our platform is designed to be easy to use, customizable, and flexible, so you can build a business that's tailored to your needs. Whether you're just starting out or you're looking to take your business to the next level, CBDSuite has everything you need to succeed.</p>
          <GetStartedBtn />
        </div>
        <div className="flex-[2] flex justify-end">
          <Image src={'/img8.png'} alt='' className='flex-1 w-full h-[fit-content]' width={900} height={700} />
        </div>
      </section>

      <section className="bg-[#1C7962]/10 px-[240px] py-[98px]">
        <div className="">
          <h6 className="heading2 mb-[12px]">offers</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">Our Projects</h3>
          <p className="text-[14px] leading-[26px] font-[poppins] mt-2 w-[90%]">A game changer when designing your new kitchen. Let your renovation experience be an efficient and enjoyable one.</p>
        </div>

        <div className="flex items-center justify-between gap-2 mt-10">
          <div className="relative">
            <Image src={'/img10.png'} alt='' className='flex-1 w-full h-[fit-content]' width={340} height={400} />
            <div className="absolute bottom-0 left-0 w-[150px] h-[50px] uppercase bg-black text-white grid place-items-center">Project 1</div>
          </div>
          <div className="relative">
            <Image src={'/img11.png'} alt='' className='flex-1 w-full h-[fit-content]' width={340} height={400} />
            <div className="absolute bottom-0 left-0 w-[150px] h-[50px] uppercase bg-[#1C7962] text-white grid place-items-center">Project 2</div>
          </div>
          <div className="relative">
            <Image src={'/img12.png'} alt='' className='flex-1 w-full h-[fit-content]' width={340} height={400} />
            <div className="absolute bottom-0 left-0 w-[150px] h-[50px] uppercase bg-black text-white grid place-items-center">Project 3</div>
          </div>
        </div>
      </section>

      <section className="mt-[100px] flex items-center gap-10 px-[100px]">
        <div className="flex-1">
          <h6 className="heading2 mb-[12px]">cbd merchants</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">At CBDsuite, helping CBD merchants</h3>
          <p className="text-[14px] leading-[26px] font-[poppins] mt-2 w-[90%]">At CBDSuite, we're committed to helping CBD merchants succeed. Our platform is designed to be easy to use, customizable, and flexible, so you can build a business that's tailored to your needs. Whether you're just starting out or you're looking to take your business to the next level, CBDSuite has everything you need to succeed.</p>
          <GetStartedBtn />
        </div>
        <div className="flex-1 flex justify-end">
          <Image src={'/img9.png'} alt='' className='flex-1 w-full h-[fit-content]' width={700} height={700} />
        </div>
      </section>

      <section className="py-[100px]">
        <div className="text-center">
          <h6 className="heading2 mb-[12px]">features</h6>
          <h3 className="font-bold font-[poppins] text-[38px] leading-10">Great Features</h3>
        </div>

        <div className="grid grid-cols-3 place-items-center gap-10 flex-wrap mt-[50px] max-w-[900px] mx-auto">
          <div className="flex flex-col items-center w-[240px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">SEO Optimization</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col items-center w-[240px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Social Media</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col items-center w-[240px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Live Chat</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col items-center w-[240px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Content marketing</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col items-center w-[240px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Email marketing</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="flex flex-col items-center w-[240px]">
            <div className="bg-[#1C7962]/10 rounded-[24px] grid place-items-center w-[70px] h-[70px]">
              <Image src={'/website.png'} alt='' className='flex-1 w-full h-[fit-content]' width={38} height={38} />
            </div>
            <h1 className="text-[#231F20] text-[18px] font-bold mt-4 mb-2">Abandoned cart</h1>
            <p className="text-[#58667D] font-[poppins] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>

        <div className="w-[700px] mx-auto mt-28">
          <h3 className="font-bold font-[poppins] text-[42px] leading-10 text-center">Frequently Asked Questions</h3>
          <p className="text-[#58667D] font-[poppins] text-center mt-6">With so much competition already on the platform, it can be tough to get things moving and gain more followers and likes for your content.</p>

          <div className="flex flex-col gap-4 mt-12">
            <Faq
              q={'What will my fees be?'}
              a={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              openByDefault={false}
            />
            <Faq
              q={'What CBD products am I allowed to sell?'}
              a={'The Declaration for Selling Regulated Hemp and Hemp-Derived Products defines requirements for selling CBD online with the Wix platform. The Declaration for Selling Regulated Hemp and Hemp-Derived Products defines requirements for selling CBD online with the Wix platform.'}
              openByDefault={true}
            />
            <Faq
              q={'What types of information will you need for my application?'}
              a={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              openByDefault={false}
            />
            <Faq
              q={'What is Square’s stance on medical claims associated with CBD?'}
              a={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              openByDefault={false}
            />
            <Faq
              q={'What do I need to start selling CBD on Wix?'}
              a={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              openByDefault={false}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#1C7962] text-white py-20">
        <div className="w-[600px] m-auto">
          <h1 className="font-bold font-[poppins] text-[32px] leading-10 text-center">Ready to take your CBD business to the next level?</h1>
          <p className="text-white text-center text-[12px] font-[poppins] mt-3 pr-10">Sign up for CBDSuite today and start building the business you've always dreamed of.</p>
          <form className="mt-6 grid place-items-center">
            <div className="bg-white py-1 px-2 flex h-[50px] rounded-md">
              <input type="text" className="text-black w-[200px] border-[0] outline-[0] mr-2" />
              <button className="uppercase bg-[#1C7962] h-full w-[100px] rounded-md">subscribe</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="pt-16 px-[100px]">
        <div className="flex gap-32">
          <div className="flex-1">
            <Image
              className="inline-block"
              // src="/leaf.svg"
              src="/logo.svg"
              alt="CBD Suite"
              height={60}
              width={200}
            />

            <p className="text-[#58667D] text-[14px] font-[poppins] mt-10 mb-3">Sign up for CBDSuite today and start building the business you've always dreamed of.</p>

            <div className="flex gap-5">
              <Image src="/LinkedIn.png" alt="" height={45} width={45} className="inline-block" />
              <Image src="/Twitter.png" alt="" height={45} width={45} className="inline-block" />
              <Image src="/facebook.png" alt="" height={45} width={45} className="inline-block" />
            </div>
          </div>
          <div className="flex-[2] flex gap-20">
            <div className="">
              <h4 className="text-[#1C7962] text-[20px] font-bold font-[poppins] mt-4">Services</h4>
              <div className="flex flex-col gap-10 mt-14">
                <p className="text-[#58667D] text-[14px] font-[poppins]">Hosting</p>
                <p className="text-[#58667D] text-[14px] font-[poppins]">Plugins</p>
                <p className="text-[#58667D] text-[14px] font-[poppins]">Training</p>
                <p className="text-[#58667D] text-[14px] font-[poppins]">All-in-one</p>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#1C7962] text-[20px] font-bold font-[poppins] mt-4">Information</h4>
              <div className="flex flex-col gap-10 mt-14">
                <p className="text-[#58667D] text-[14px] font-[poppins]">About</p>
                <p className="text-[#58667D] text-[14px] font-[poppins]">Agency</p>
                <p className="text-[#58667D] text-[14px] font-[poppins]">Contact</p>
              </div>
            </div>
            <div className="">
              <h4 className="text-[#1C7962] text-[20px] font-bold font-[poppins] mt-4">Contact us</h4>
              <div className="flex flex-col gap-10 mt-14">
                <p className="text-[#58667D] text-[14px] font-[poppins] flex items-center gap-8">
                  <Image src="/phone.png" alt="" height={30} width={30} className="inline-block" />
                  66 44 33 1
                </p>
                <p className="text-[#58667D] text-[14px] font-[poppins] flex items-center gap-8">
                  <Image src="/pin.png" alt="" height={30} width={30} className="inline-block" />
                  Menje 22 rue de Luxembourg
                </p>
                <p className="text-[#58667D] text-[14px] font-[poppins] flex items-center gap-8">
                  <Image src="/mail.png" alt="" height={30} width={30} className="inline-block" />
                  info@cbdsuite.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#58667D] text-[14px] font-[poppins] mt-20">@2022 Cbdsuite.co all right reserved.</p>
      </footer>

      <br />
      <br />
    </div>
  )

//

  // return (
  //   <div className="bg-white">
  //     <main>
  //       {/* Hero section */}
  //       <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-48">
  //         <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
  //           <div>
  //             <div>
  //               <Logo />
  //             </div>
  //             <div className="mt-20">
  //               <div className="mt-6 sm:max-w-xl">
  //                 <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
  //                   Best-in-Class Tools for CBD Merchants
  //                 </h1>
  //                 <p className="mt-6 text-xl text-gray-500">
  //                   Everything you need to start, scale, and manage your CBD
  //                   business. 
  //                  </p>
  //                  <div className="mt-6 text-xl text-gray-500">
  //                   Our all in one platform includes:
  //                   <ul className="list-disc mx-8">
  //                     <li>Business Registration &amp; Filings Assistance</li>
  //                     <li>Bank Account Opening Support</li>
  //                     <li>E-Commerce Storefront Deployment &amp; Compliance</li>
  //                     <li>Merchant Payment Processing</li>
  //                     <li><a className="text-emerald-600 underline" href="/features">Click to explore all of our features</a></li>
  //                   </ul>
  //                 </div>
  //               </div>
  //               <form
  //                 action="#"
  //                 className="mt-12 sm:flex sm:w-full sm:max-w-lg"
  //               >
  //                 <div className="min-w-0 flex-1">
  //                   {isLoaded && user ? (
  //                     <Link href="/referral/joyorganics">
  //                       <a className="block w-full rounded-md border border-transparent bg-emerald-500 px-5 py-3 text-center text-base font-medium text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:px-10">
  //                         Welcome back, {user.firstName}! - Visit Your Dashboard.
  //                       </a>
  //                     </Link>
  //                   ) : (
  //                     <div className="w-full text-center">
  //                       <Link href="/referral/joyorganics">
  //                         <a className="mx-3 inline-block rounded-md border border-emerald-500 bg-white px-5 py-3 text-center text-base font-medium text-emerald-500 shadow hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:px-10">
  //                           View Pricing
  //                         </a>
  //                       </Link>
  //                       <span>or</span>
  //                       <SignUpButton>
  //                         <span className="mx-3 inline-block rounded-md border border-transparent bg-emerald-500 px-5 py-3 text-center text-base font-medium text-white shadow hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:px-10">
  //                           Get Started
  //                         </span>
  //                       </SignUpButton>
  //                     </div>
  //                   )}
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
  //           <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
  //             <div className="hidden sm:block">
  //               <div className="absolute inset-y-0 left-1/2 w-screen rounded-l-3xl bg-gray-50 lg:left-80 lg:right-0 lg:w-full" />
  //               <svg
  //                 className="absolute top-8 right-1/2 -mr-3 lg:left-0 lg:m-0"
  //                 width={404}
  //                 height={392}
  //                 fill="none"
  //                 viewBox="0 0 404 392"
  //               >
  //                 <defs>
  //                   <pattern
  //                     id="837c3e70-6c3a-44e6-8854-cc48c737b659"
  //                     x={0}
  //                     y={0}
  //                     width={20}
  //                     height={20}
  //                     patternUnits="userSpaceOnUse"
  //                   >
  //                     <rect
  //                       x={0}
  //                       y={0}
  //                       width={4}
  //                       height={4}
  //                       className="text-gray-200"
  //                       fill="currentColor"
  //                     />
  //                   </pattern>
  //                 </defs>
  //                 <rect
  //                   width={404}
  //                   height={392}
  //                   fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
  //                 />
  //               </svg>
  //             </div>
  //             <div className="relative -mr-40 pl-4 sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:pl-12">
  //               <img
  //                 className="w-full rounded-md shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto lg:max-w-none"
  //                 src="/screenshot.jpg"
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Testimonial/stats section */}
  //       <div className="relative mt-20">
  //         <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
  //           <div className="relative sm:py-16 lg:py-0">
  //             <div
  //               aria-hidden="true"
  //               className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
  //             >
  //               <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
  //               <svg
  //                 className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
  //                 width={404}
  //                 height={392}
  //                 fill="none"
  //                 viewBox="0 0 404 392"
  //               >
  //                 <defs>
  //                   <pattern
  //                     id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
  //                     x={0}
  //                     y={0}
  //                     width={20}
  //                     height={20}
  //                     patternUnits="userSpaceOnUse"
  //                   >
  //                     <rect
  //                       x={0}
  //                       y={0}
  //                       width={4}
  //                       height={4}
  //                       className="text-gray-200"
  //                       fill="currentColor"
  //                     />
  //                   </pattern>
  //                 </defs>
  //                 <rect
  //                   width={404}
  //                   height={392}
  //                   fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
  //                 />
  //               </svg>
  //             </div>
  //             <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
  //               {/* Testimonial card*/}
  //               <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
  //                 <img
  //                   className="absolute inset-0 h-full w-full object-cover"
  //                   src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"
  //                   alt=""
  //                 />
  //                 <div className="absolute inset-0 bg-emerald-500 mix-blend-multiply" />
  //                 <div className="absolute inset-0 bg-gradient-to-t from-emerald-600 via-emerald-600 opacity-90" />
  //                 <div className="relative px-8">
  //                   <div>
  //                     <img
  //                       className="h-12"
  //                       src="https://tailwindui.com/img/logos/workcation.svg?color=white"
  //                       alt="Workcation"
  //                     />
  //                   </div>
  //                   <blockquote className="mt-8">
  //                     <div className="relative text-lg font-medium text-white md:flex-grow">
  //                       <svg
  //                         className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-emerald-400"
  //                         fill="currentColor"
  //                         viewBox="0 0 32 32"
  //                         aria-hidden="true"
  //                       >
  //                         <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  //                       </svg>
  //                       <p className="relative">
  //                         Tincidunt integer commodo, cursus etiam aliquam neque,
  //                         et. Consectetur pretium in volutpat, diam. Montes,
  //                         magna cursus nulla feugiat dignissim id lobortis amet.
  //                       </p>
  //                     </div>

  //                     <footer className="mt-4">
  //                       <p className="text-base font-semibold text-emerald-200">
  //                         Sarah Williams, CEO at Workcation
  //                       </p>
  //                     </footer>
  //                   </blockquote>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>

  //           <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
  //             {/* Content area */}
  //             <div className="pt-12 sm:pt-16 lg:pt-20">
  //               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
  //                 Providing easy access to the tools your business needs
  //               </h2>
  //               <div className="mt-6 space-y-6 text-gray-500">
  //                 <p className="text-lg">
  //                   Traditionally it has been difficult for CBD merchants to
  //                   source the core services needed to run a retail business in
  //                   the modern era. CBD Suite exists to make this process much
  //                   simpler and as painless as possible.
  //                 </p>
  //                 <p className="text-base leading-7">
  //                   Our automated and compliant software platform in combination
  //                   with in-house success experts ensure your business gets off
  //                   the ground smoothly and can scale to the next level.
  //                 </p>
  //                 <p className="text-base leading-7">
  //                   Rhoncus nisl, libero egestas diam fermentum dui. At quis
  //                   tincidunt vel ultricies. Vulputate aliquet velit faucibus
  //                   semper. Pellentesque in venenatis vestibulum consectetur
  //                   nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.
  //                   Morbi enim fermentum lacus in. Viverra.
  //                 </p>
  //               </div>
  //             </div>

  //             {/* Stats section */}
  //             <div className="mt-10">
  //               <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
  //                 {stats.map((stat) => (
  //                   <div
  //                     key={stat.label}
  //                     className="border-t-2 border-gray-100 pt-6"
  //                   >
  //                     <dt className="text-base font-medium text-gray-500">
  //                       {stat.label}
  //                     </dt>
  //                     <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
  //                       {stat.value}
  //                     </dd>
  //                   </div>
  //                 ))}
  //               </dl>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* Logo cloud section */}
  //       <div className="mt-32">
  //         <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
  //           <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
  //             <div>
  //               <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
  //                 Trusted by the best partners
  //               </h2>
  //               <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500">
  //                 Sagittis scelerisque nulla cursus in enim consectetur quam.
  //                 Dictum urna sed consectetur neque tristique pellentesque.
  //                 Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc
  //                 nisl netus morbi vel porttitor vitae ut. Amet vitae fames
  //                 senectus vitae.
  //               </p>
  //               <div className="mt-6">
  //                 <a
  //                   href="#"
  //                   className="text-base font-medium text-emerald-500"
  //                 >
  //                   Meet our partners and network&rarr;
  //                 </a>
  //               </div>
  //             </div>
  //             <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
  //               {logos.map((logo) => (
  //                 <div
  //                   key={logo.name}
  //                   className="col-span-1 flex justify-center bg-gray-50 py-8 px-8"
  //                 >
  //                   <img className="max-h-12" src={logo.url} alt={logo.name} />
  //                 </div>
  //               ))}
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //       {/* CTA section */}
  //       <div className="relative mt-24 sm:mt-32 sm:py-16">
  //         <div aria-hidden="true" className="hidden sm:block">
  //           <div className="absolute inset-y-0 left-0 w-1/2 rounded-r-3xl bg-gray-50" />
  //           <svg
  //             className="absolute top-8 left-1/2 -ml-3"
  //             width={404}
  //             height={392}
  //             fill="none"
  //             viewBox="0 0 404 392"
  //           >
  //             <defs>
  //               <pattern
  //                 id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
  //                 x={0}
  //                 y={0}
  //                 width={20}
  //                 height={20}
  //                 patternUnits="userSpaceOnUse"
  //               >
  //                 <rect
  //                   x={0}
  //                   y={0}
  //                   width={4}
  //                   height={4}
  //                   className="text-gray-200"
  //                   fill="currentColor"
  //                 />
  //               </pattern>
  //             </defs>
  //             <rect
  //               width={404}
  //               height={392}
  //               fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
  //             />
  //           </svg>
  //         </div>
  //         <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
  //           <div className="relative overflow-hidden rounded-2xl bg-emerald-500 px-6 py-10 shadow-xl sm:px-12 sm:py-20">
  //             <div
  //               aria-hidden="true"
  //               className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
  //             >
  //               <svg
  //                 className="absolute inset-0 h-full w-full"
  //                 preserveAspectRatio="xMidYMid slice"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 fill="none"
  //                 viewBox="0 0 1463 360"
  //               >
  //                 <path
  //                   className="text-emerald-400 text-opacity-40"
  //                   fill="currentColor"
  //                   d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
  //                 />
  //                 <path
  //                   className="text-emerald-600 text-opacity-40"
  //                   fill="currentColor"
  //                   d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
  //                 />
  //               </svg>
  //             </div>
  //             <div className="relative">
  //               <div className="sm:text-center">
  //                 <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
  //                   Get notified when we launch new products &amp; services.
  //                 </h2>
  //                 <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100">
  //                   Join our mailing list to stay up to date with everything we
  //                   have to offer.
  //                 </p>
  //               </div>
  //               <form
  //                 action="#"
  //                 className="mt-12 sm:mx-auto sm:flex sm:max-w-lg"
  //               >
  //                 <div className="min-w-0 flex-1">
  //                   <label htmlFor="cta-email" className="sr-only">
  //                     Email address
  //                   </label>
  //                   <input
  //                     id="cta-email"
  //                     type="email"
  //                     className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500"
  //                     placeholder="Enter your email"
  //                   />
  //                 </div>
  //                 <div className="mt-4 sm:mt-0 sm:ml-3">
  //                   <button
  //                     type="submit"
  //                     className="block w-full rounded-md border border-transparent bg-gray-900 px-5 py-3 text-base font-medium text-white shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500 sm:px-10"
  //                   >
  //                     Notify me
  //                   </button>
  //                 </div>
  //               </form>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </main>

  //     {/* Footer section */}
  //     <footer className="mt-24 bg-emerald-900 sm:mt-12">
  //       <div className="mx-auto max-w-md overflow-hidden py-12 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
  //         <nav
  //           className="-mx-5 -my-2 flex flex-wrap justify-center"
  //           aria-label="Footer"
  //         >
  //           {footerNavigation.main.map((item) => (
  //             <div key={item.name} className="px-5 py-2">
  //               <a
  //                 href={item.href}
  //                 className="text-base text-emerald-50 hover:text-emerald-100"
  //               >
  //                 {item.name}
  //               </a>
  //             </div>
  //           ))}
  //         </nav>
  //         <div className="mt-8 flex justify-center space-x-6">
  //           {footerNavigation.social.map((item) => (
  //             <a
  //               key={item.name}
  //               href={item.href}
  //               className="text-emerald-50 hover:text-emerald-100"
  //             >
  //               <span className="sr-only">{item.name}</span>
  //               <item.icon className="h-6 w-6" aria-hidden="true" />
  //             </a>
  //           ))}
  //         </div>
  //         <p className="mt-8 text-center text-base text-emerald-50">
  //           &copy; 2022 Zipmark, Inc. All rights reserved.
  //         </p>
  //       </div>
  //     </footer>
  //   </div>
  // )
}

const GetStartedBtn = () => {
  return (
    <button className="font-[montserrat] uppercase text-[12px] font-bold flex justify-center items-center gap-2 bg-[#1c7962] text-white rounded-full py-3 px-5 mt-6">Get started <Image src={'/arrow-white-right.png'} alt='' className='' width={15} height={10} /></button>
  )
}

const Faq = ({ q, a, openByDefault }:any) => {
  const [open, setOpen] = useState(openByDefault)

  return (
    <div className={`w-full py-3 px-6 border border-gray-100/50 ${open && 'bg-[#1C7962]/5'}`}>
      <div className="flex justify-between">
        <div className={`font-[500] font-[poppins] text-[18px] ${open ? 'text-[#1C7962]' : 'text-[#231F20]'}`}>{q}</div>
        <div className="">
          {open ?
            <Image src={'/caret-up.png'} alt='' className='' width={16} height={8} onClick={() => setOpen(false)} /> :
            <Image src={'/caret-down.png'} alt='' className='' width={16} height={8} onClick={() => setOpen(true)} />
          }
        </div>
      </div>
      {open && <p className="text-[#58667D] text-[13px] mt-1 font-[poppins] pr-10">{a}</p>}
    </div>
  )
}