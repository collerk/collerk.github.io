import { Check, X, BarChart2, Clock, BrainCircuit, Users, Megaphone, Star, Shuffle, Calendar, Search, LineChart } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';

function BeforeAfter() {
    return (
        <section className='bg-gradient-to-b from-white via-slate-50 to-white'>
            <MaxWidthWrapper className='py-24'>
                <div className='max-w-3xl mx-auto tracking-tight flex flex-col items-center justify-center gap-8'>
                    <div className="space-y-4 text-center">
                        <h2 className='font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900'>
                            Transform Your Social Media Workflow
                        </h2>
                        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                            See how Collerk revolutionizes the way content creators and small businesses manage their social media presence
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-8 lg:flex-row lg:max-w-6xl lg:mx-auto items-stretch justify-center lg:gap-8 my-16">
                    <div className='flex w-full lg:w-1/2 flex-col bg-red-50 rounded-2xl shadow-lg p-8 relative overflow-hidden'>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -z-0" />
                        <h3 className='font-bold text-2xl mb-8 flex items-center gap-2 text-red-700'>
                            <X className='w-6 h-6' />
                            Without Collerk
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200">
                                    <Shuffle className="h-3.5 w-3.5 text-red-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Scattered Workflow</h4>
                                    <p className="text-gray-600">Juggling multiple tools, tabs, and platforms for posting and analytics</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200">
                                    <Clock className="h-3.5 w-3.5 text-red-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Time-Consuming Process</h4>
                                    <p className="text-gray-600">Hours spent manually scheduling posts and generating reports</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200">
                                    <Search className="h-3.5 w-3.5 text-red-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Limited Brand Opportunities</h4>
                                    <p className="text-gray-600">Struggling to find and manage brand collaborations</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-200">
                                    <LineChart className="h-3.5 w-3.5 text-red-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Inconsistent Growth</h4>
                                    <p className="text-gray-600">Missing insights on what content performs best</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='flex w-full lg:w-1/2 flex-col bg-violet-50 rounded-2xl shadow-lg p-8 relative overflow-hidden'>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-violet-100 rounded-bl-full -z-0" />
                        <h3 className='font-bold text-2xl mb-8 flex items-center gap-2 text-violet-700'>
                            <Check className='w-6 h-6' />
                            With Collerk
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-200">
                                    <BrainCircuit className="h-3.5 w-3.5 text-violet-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">AI-Powered Efficiency</h4>
                                    <p className="text-gray-600">Smart scheduling, content suggestions, and automated reporting</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-200">
                                    <Calendar className="h-3.5 w-3.5 text-violet-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Unified Dashboard</h4>
                                    <p className="text-gray-600">Manage all platforms, schedule posts, and track metrics in one place</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-200">
                                    <Users className="h-3.5 w-3.5 text-violet-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Brand Collaboration Hub</h4>
                                    <p className="text-gray-600">Connect with brands and manage partnerships seamlessly</p>
                                </div>
                            </li>
                            <li className="flex gap-3 items-start">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-violet-200">
                                    <BarChart2 className="h-3.5 w-3.5 text-violet-700" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Data-Driven Growth</h4>
                                    <p className="text-gray-600">Comprehensive analytics and audience insights across all platforms</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Featured Testimonial */}
                <div className="max-w-2xl mx-auto mt-24 flex flex-col items-center">
                    <div className="relative">
                        <div className="absolute -top-6 -left-6">
                            <div className="text-4xl">❝</div>
                        </div>
                        
                        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
                            <div className="flex justify-center mb-4">
                                {Array(5).fill().map((_, i) => (
                                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            <p className='text-center text-lg font-medium text-gray-700 mb-6'>
                                Switching to Collerk was a game-changer for my content strategy. I've saved <span className='bg-yellow-100 px-1 rounded'>15+ hours weekly</span> on social media management and saw a <span className='bg-yellow-100 px-1 rounded'>40% increase</span> in engagement across all platforms. The brand collaboration features helped me land three major partnerships in just two months!
                            </p>

                            <div className='flex items-center justify-center gap-4 pt-4 border-t border-gray-100'>
                                <img 
                                    src="https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?q=80&w=2842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    alt="Sarah Mitchell" 
                                    className="h-12 w-12 rounded-full ring-2 ring-violet-100 object-cover" 
                                />
                                <div className="flex flex-col">
                                    <p className='font-semibold text-gray-900'>Sarah Mitchell</p>
                                    <p className='text-sm text-gray-600'>Lifestyle Content Creator • 100k+ Followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default BeforeAfter;