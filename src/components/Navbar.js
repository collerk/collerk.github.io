import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { ArrowRight, Menu } from 'lucide-react'
import { buttonVariants } from './ui/button'
import { cn } from '@/lib/utils'

function Navbar() {
    return (
        <nav className="sticky h-20 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-sm transition-all">
            <MaxWidthWrapper>
                <div className='flex h-20 items-center justify-between'>
                    <div className='flex items-center justify-center gap-14'>
                        <Link href='/' className='flex z-40 font-bold text-lg'>
                            <span>C O L L E R K</span>
                        </Link>

                        <div className="hidden md:flex items-center justify-center gap-8 lg:gap-14">
                        <Link href='#features' className='font-semibold hover:underline hover:underline-offset-1'>
                                Features
                            </Link>
                            <Link href='#pricing' className='font-semibold hover:underline hover:underline-offset-1'>
                                Pricing
                            </Link>
                            <Link href='#faq' className='font-semibold hover:underline hover:underline-offset-1'>
                                FAQs
                            </Link>
                        </div>
                    </div>

                    {/* TODO: Add mobile menu */}
                    <div className='md:hidden'>
                        <Menu className='h-6 w-6 cursor-pointer' />
                    </div>

                    <div className='hidden md:flex items-center space-x-1.5'>
                        <Link href='https://dev.collerk.com/auth/login'                 className={cn(
                  buttonVariants({ size: 'lg' }), 
                  "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 group"
                )}>
                            <span>Already a member?</span>
                            <ArrowRight className='ml-1.5 transform h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar