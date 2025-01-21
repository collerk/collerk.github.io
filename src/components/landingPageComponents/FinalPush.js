import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { IoIosRocket } from "react-icons/io";
import { buttonVariants } from "../ui/button";

function FinalPush() {
    return (
        <section className='pt-40 pb-32 px-5' id='contact'>
            <div className='flex flex-col md:flex-row max-w-5xl mx-auto px-14 py-10 gap-10 bg-gradient-to-br from-violet-100 via-indigo-100 to-indigo-50 rounded-3xl shadow-lg'>
                <div className="space-y-6">
                    <h2 className='relative tracking-tight font-bold text-3xl md:text-4xl text-indigo-900'>
                        <span className='absolute top-[-20px] right-0'>
                            <IoIosRocket className='h-10 w-10 text-indigo-700' />
                        </span>
                        Take Your Social Media Presence to New Heights
                    </h2>

                    <p className='text-lg font-medium leading-relaxed text-gray-800'>
                        Empower your brand with a unified dashboard that simplifies content scheduling, boosts engagement, and delivers in-depth analytics. Elevate your social strategy today!
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                        <li>Schedule posts seamlessly across all platforms</li>
                        <li>Analyze performance with detailed insights</li>
                        <li>Collaborate with influencers and brands</li>
                        <li>All your social media tools in one place</li>
                    </ul>

                    <div className="w-full lg:w-1/3 mt-6">
                        <Link href='https://dev.collerk.com/auth/signup' className={cn(buttonVariants({ size: "lg" }), "flex items-center justify-center group px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 rounded-lg")}>
                            <span className="font-semibold">Get Started Now</span>
                            <ArrowRight className='ml-2 transform h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
                        </Link>
                    </div>
                </div>

                <div className="hidden md:flex items-center justify-center">
                    <img src="https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=2796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Social Media Dashboard" className="w-72 h-72 object-contain drop-shadow-lg" />
                </div>
            </div>
        </section>
    )
}

export default FinalPush;
