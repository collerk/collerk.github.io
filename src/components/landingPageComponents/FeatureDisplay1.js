'use client';
import { Calendar, BarChart2, Users2, BrainCircuit, Clock, Lightbulb, Layout, Trophy, MousePointerClick } from 'lucide-react';
import { useState } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';

function FeatureDisplay1() {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "Smart Scheduling",
            icon: Calendar,
            description: "AI-powered posting schedule based on your audience's peak engagement times",
            preview: "/api/placeholder/600/400",
            benefits: ["40% higher engagement rates", "Best time predictions", "Cross-platform coordination"],
            color: "violet"
        },
        {
            title: "Advanced Analytics",
            icon: BarChart2,
            description: "Track performance across all platforms with unified insights and trend analysis",
            preview: "/api/placeholder/600/400",
            benefits: ["Cross-platform metrics", "Custom report builder", "Growth tracking"],
            color: "blue"
        },
        {
            title: "Brand Collaboration",
            icon: Users2,
            description: "Connect with brands and creators, manage partnerships, and track campaigns",
            preview: "/api/placeholder/600/400",
            benefits: ["Partnership marketplace", "Campaign tracking", "Performance metrics"],
            color: "indigo"
        },
        {
            title: "Content Ideas Board",
            icon: Lightbulb,
            description: "Save and organize content ideas with our visual board system",
            preview: "/api/placeholder/600/400",
            benefits: ["Visual organization", "Team collaboration", "Content calendar integration"],
            color: "pink"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 py-24">
            <MaxWidthWrapper>
                <div className='max-w-3xl mx-auto mb-16'>
                    <h2 className='tracking-tight font-bold text-center text-4xl lg:text-5xl mb-6'>
                        Powerful Features for Modern Social Media Management
                    </h2>
                    <p className='font-medium text-center text-gray-600 text-lg'>
                        Everything you need to grow your social media presence, engage with your audience, and measure your success - all in one place.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-8 lg:gap-12 mt-8'>
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`relative group rounded-2xl p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                                activeFeature === index ? 'ring-2 ring-violet-400 shadow-xl' : ''
                            }`}
                            onMouseEnter={() => setActiveFeature(index)}
                        >
                            <div className="absolute top-0 right-0 p-3">
                                <MousePointerClick className={`h-5 w-5 text-gray-400 group-hover:text-${feature.color}-500 transition-colors duration-300`} />
                            </div>

                            <div className="flex items-start gap-4">
                                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-${feature.color}-100 group-hover:bg-${feature.color}-200 transition-colors duration-300`}>
                                    <feature.icon className={`h-6 w-6 text-${feature.color}-600`} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600 mb-4">{feature.description}</p>
                                </div>
                            </div>

                            <div className="mt-4 relative overflow-hidden rounded-xl">
                                <img
                                    src={feature.preview}
                                    alt={feature.title}
                                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t from-${feature.color}-900/20 to-transparent`}></div>
                            </div>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {feature.benefits.map((benefit, i) => (
                                    <span
                                        key={i}
                                        className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-${feature.color}-100 text-${feature.color}-700 group-hover:bg-${feature.color}-200 transition-colors duration-300`}
                                    >
                                        {benefit}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Platform Integration Section */}
                <div className="mt-20 text-center">
                    <h3 className="text-2xl font-semibold mb-6">Seamlessly Integrates With Your Favorite Platforms</h3>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'TikTok'].map((platform) => (
                            <div 
                                key={platform}
                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <img
                                    src={`/api/placeholder/24/24`}
                                    alt={platform}
                                    className="w-6 h-6 rounded"
                                />
                                <span className="font-medium text-gray-700">{platform}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </MaxWidthWrapper>
        </section>
    );
}

export default FeatureDisplay1;