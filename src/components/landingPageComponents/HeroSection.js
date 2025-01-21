import { ArrowRight, Check, Instagram, Twitter, Facebook, Youtube, Users2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import MaxWidthWrapper from '../MaxWidthWrapper';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <MaxWidthWrapper className="pt-16 !px-4 lg:!px-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:pt-24 lg:pb-20">
        <div className="col-span-1 px-2 lg:px-0">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Pill-shaped highlight */}
            <div className="mb-6 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              New: AI-Powered Content Suggestions
            </div>

            <h1 className="relative w-fit tracking-tighter text-balance font-bold !leading-[1.15] text-gray-900 text-5xl md:text-6xl">
              Create, Schedule, <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Collaborate & Grow</span>
            </h1>

            <p className="mt-6 text-balance text-lg max-w-prose text-center font-medium text-slate-600 lg:pr-10 md:text-wrap lg:text-left">
              Streamline your social media presence across all platforms. Schedule content, analyze performance, and collaborate with brands - all in one powerful dashboard.
            </p>

            <ul className="mt-8 text-left space-y-3 font-medium md:flex flex-col items-center sm:items-start">
              <li className="flex gap-2.5 items-center text-left">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
                  <Check className="h-4 w-4 text-violet-600" />
                </div>
                <span>AI-powered content calendar & scheduling</span>
              </li>
              <li className="flex gap-2.5 items-center text-left">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
                  <Check className="h-4 w-4 text-violet-600" />
                </div>
                <span>Brand collaboration hub with contract tools</span>
              </li>
              <li className="flex gap-2.5 items-center text-left">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
                  <Check className="h-4 w-4 text-violet-600" />
                </div>
                <span>Advanced analytics & engagement tracking</span>
              </li>
              <li className="flex gap-2.5 items-center text-left">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-100">
                  <Check className="h-4 w-4 text-violet-600" />
                </div>
                <span>Smart hashtag suggestions & content ideas</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link 
                href='dev.collerk.com/auth/signup' 
                className={cn(
                  buttonVariants({ size: 'lg' }), 
                  "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 group"
                )}
              >
                Start Free Trial
                <ArrowRight className='ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
              </Link>
              <Link 
                href='#demo' 
                className={cn(
                  buttonVariants({ size: 'lg', variant: 'outline' }), 
                  "group"
                )}
              >
                Watch Demo
              </Link>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-start items-center gap-8">
              <div className="flex items-center gap-4">
                <Users2 className="h-5 w-5 text-violet-600" />
                <div className="flex flex-col">
                  <p className="font-semibold text-2xl">10,000+</p>
                  <p className="text-slate-600">Active Users</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex -space-x-1">
                  <Instagram className="h-5 w-5 text-pink-500" />
                  <Twitter className="h-5 w-5 text-blue-400" />
                  <Facebook className="h-5 w-5 text-blue-600" />
                  <Youtube className="h-5 w-5 text-red-600" />
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold text-2xl">All-in-One</p>
                  <p className="text-slate-600">Platform Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-full mt-16 md:mt-0 lg:col-span-1">
          <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Main Dashboard Preview */}
            <div className="absolute top-0 right-0 w-4/5 h-[400px] rounded-xl shadow-2xl bg-white p-2 z-20">
              <img 
                src="https://images.unsplash.com/photo-1472393365320-db77a5abbecc"
                alt="Collerk Dashboard"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Analytics Card */}
            <div className="absolute bottom-20 -left-4 w-[300px] h-[200px] rounded-xl shadow-xl bg-white p-2 z-10 transform -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Analytics Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Calendar Card */}
            <div className="absolute bottom-40 right-0 w-[250px] h-[180px] rounded-xl shadow-xl bg-white p-2 z-30 transform rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1513118172236-00b7cc57e1fa?q=80&w=2380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Calendar Preview"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroSection;