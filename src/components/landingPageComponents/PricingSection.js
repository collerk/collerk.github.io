'use client'
import { Building2, CircleCheck, Info } from "lucide-react"
import MaxWidthWrapper from "../MaxWidthWrapper"
import Link from "next/link"
import { useState } from 'react'

function PricingSection() {
    const [isYearly, setIsYearly] = useState(false)
    
    const plans = [
        {
            name: 'Starter',
            monthlyPrice: 15,
            yearlyPrice: 153, // 15 * 12 * 0.85 (15% discount)
            description: 'Perfect for individual creators and small businesses',
            limit: 'Manage up to 5 social profiles',
            features: [
                'Schedule up to 30 posts/month',
                'Basic analytics dashboard',
                'Content idea planner (3/day)',
                'Basic AI content assistance'
            ]
        },
        {
            name: 'Growth',
            monthlyPrice: 49,
            yearlyPrice: 499, // 49 * 12 * 0.85
            description: 'Perfect for growing businesses and professional creators',
            limit: 'Manage up to 15 social profiles',
            features: [
                'Unlimited scheduled posts',
                'Advanced analytics & reports',
                'Unlimited content ideas',
                'Advanced AI content creation',
                'Engagement analytics',
                'Brand collaboration tools',
                'Priority support'
            ],
            popular: true
        },
        {
            name: 'Agency',
            monthlyPrice: null,
            yearlyPrice: null,
            description: 'Tailored for marketing agencies and large teams',
            limit: 'Custom social profile limits & team management',
            features: [
                'Custom profile limits',
                'Team collaboration tools',
                'White-label reports',
                'API access',
                'Dedicated success manager'
            ]
        }
    ]

    return (
        <section className="bg-gradient-to-b from-slate-50 to-white" id="pricing">
            <MaxWidthWrapper className='py-20'>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-primary/10 rounded-full px-4 py-2">
                        <p className='text-primary text-xs font-medium tracking-wide'>PRICING PLANS</p>
                    </div>

                    <h2 className="text-4xl font-bold text-center mt-4 mb-2 tracking-tight">
                        Choose Your Growth Path
                    </h2>

                    <div className="max-w-lg text-center mt-4">
                        <p className="text-slate-600 text-lg">
                            Start free, scale as you grow. No hidden fees.
                        </p>
                    </div>

                    {/* Billing Toggle */}
                    <div className="mt-10 p-1 rounded-lg bg-slate-100 inline-flex items-center gap-2">
                        <button
                            onClick={() => setIsYearly(false)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                                !isYearly 
                                ? 'bg-white shadow-sm text-slate-900' 
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setIsYearly(true)}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                                isYearly 
                                ? 'bg-white shadow-sm text-slate-900' 
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Yearly
                            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-xs px-2 py-0.5 rounded-full">
                                Save 15%
                            </span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 text-slate-900">
                    {plans.map((plan, index) => (
                        <div 
                            key={plan.name}
                            className={`relative bg-white rounded-xl p-8 transition-all duration-200 hover:shadow-xl ${
                                plan.popular 
                                ? 'border-2 border-violet-600 shadow-lg' 
                                : 'border border-slate-200 hover:border-violet-600'
                            } group`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Most Popular
                                </div>
                            )}

                            <h3 className='text-2xl font-bold mb-4'>{plan.name}</h3>

                            {plan.monthlyPrice ? (
                                <div className='mb-6'>
                                    <p className='font-bold'>
                                        <span className={`text-5xl transition-all duration-200 ${
                                            isYearly ? 'text-slate-400 line-through' : ''
                                        }`}>
                                            ${plan.monthlyPrice}
                                        </span>
                                        {isYearly && (
                                            <span className='text-6xl ml-2'>
                                                ${Math.round(plan.yearlyPrice / 12)}
                                            </span>
                                        )}
                                        <span className='text-sm text-slate-600 ml-2'>
                                            /month
                                        </span>
                                    </p>
                                    {isYearly && (
                                        <p className="text-sm text-slate-600 mt-1">
                                            ${plan.yearlyPrice}/year when billed annually
                                        </p>
                                    )}
                                </div>
                            ) : (
                                <div className="bg-slate-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto my-6">
                                    <Building2 className="h-8 w-8 text-slate-600" />
                                </div>
                            )}

                            <p className="text-slate-600 font-medium">
                                {plan.description}
                            </p>

                            <div className="bg-slate-50 w-full py-2 px-4 rounded-lg flex items-center justify-center font-medium my-6">
                                <p className="text-sm text-slate-600">
                                    {plan.limit}
                                </p>
                            </div>

                            <Link 
                                href={plan.monthlyPrice ? '/signup' : '/contact'}
                                className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                                    plan.popular
                                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700'
                                    : 'border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white'
                                }`}
                            >
                                {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
                            </Link>

                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 group/item">
                                        <CircleCheck className="h-5 w-5 shrink-0 text-violet-600" />
                                        <span className="text-slate-600">{feature}</span>
                                        <Info className="h-4 w-4 text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity cursor-help" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </MaxWidthWrapper>
        </section>
    )
}

export default PricingSection