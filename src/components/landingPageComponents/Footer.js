import MaxWidthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className='bg-white py-14'>
            <MaxWidthWrapper className='flex flex-col items-center md:items-start justify-between md:flex-row'>
                {/* Branding Section */}
                <div className='flex flex-col space-y-4 items-center md:items-start'>
                    <Link href='/' className='flex items-center z-40 font-bold text-lg text-gray-900'>
                        Collerk
                    </Link>

                    <p className='text-sm text-gray-600 text-center md:text-left'>
                        Empowering your social media strategy
                    </p>

                    <small className='text-gray-500'>
                        Collerk &copy; {new Date().getFullYear()} - All rights reserved
                    </small>
                </div>

                {/* Links Section */}
                <div className='flex flex-col md:flex-row gap-8 md:gap-24 mt-10 md:mt-0'>
                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='font-semibold text-gray-700 mb-3'>LINKS</h3>
                        <ul className='space-y-2 text-sm'>
                            <li className='hover:text-indigo-500'>
                                <Link href='/support'>Support</Link>
                            </li>
                            <li className='hover:text-indigo-500'>
                                <Link href='/faq'>FAQ</Link>
                            </li>
                            <li className='hover:text-indigo-500'>
                                <Link href='/pricing' target='_blank' rel='noopener noreferrer'>Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='font-semibold text-gray-700 mb-3'>LEGAL</h3>
                        <ul className='space-y-2 text-sm'>
                            <li className='hover:text-indigo-500'>
                                <Link href='/privacy-policy'>Privacy Policy</Link>
                            </li>
                            <li className='hover:text-indigo-500'>
                                <Link href='/terms-of-service'>Terms of Service</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className='flex flex-col items-center md:items-start'>
                        <h3 className='font-semibold text-gray-700 mb-3'>CONTACT</h3>
                        <p className='text-sm text-gray-600'>Email: support@collerk.com</p>

                        {/* Social Icons */}
                        <div className='flex space-x-4 mt-4'>
                            <a href='https://facebook.com' className='hover:text-indigo-500'>
                                <FaFacebookF className='h-5 w-5' />
                            </a>
                            <a href='https://twitter.com' className='hover:text-indigo-500'>
                                <FaTwitter className='h-5 w-5' />
                            </a>
                            <a href='https://instagram.com' className='hover:text-indigo-500'>
                                <FaInstagram className='h-5 w-5' />
                            </a>
                            <a href='https://linkedin.com' className='hover:text-indigo-500'>
                                <FaLinkedinIn className='h-5 w-5' />
                            </a>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>

            {/* Newsletter Section */}
            <div className='bg-light-blue-50 py-8 mt-10'>
                <MaxWidthWrapper className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-6 md:mb-0'>
                        <h3 className='font-semibold text-lg text-gray-900'>Join Our Newsletter</h3>
                        <p className='text-sm text-gray-600'>
                            Get the latest updates on new features and special offers.
                        </p>
                    </div>

                    <div className='w-full md:w-auto flex'>
                        <input
                            type='email'
                            placeholder='Enter your email'
                            className='rounded-l-lg px-4 py-2 w-full md:w-64 focus:outline-none text-gray-700'
                        />
                        <button className='bg-indigo-500 hover:bg-indigo-600 text-white rounded-r-lg px-6 py-2'>
                            Subscribe
                        </button>
                    </div>
                </MaxWidthWrapper>
            </div>
        </footer>
    );
}

export default Footer;
