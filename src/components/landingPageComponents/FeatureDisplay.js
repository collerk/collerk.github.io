'use client';
import { useState } from 'react';
import { Calendar, BarChart2, Users2, BrainCircuit, Lightbulb, ArrowRight, Sparkles, MousePointerClick } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeatureDisplay = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      title: "AI-Powered Smart Scheduling",
      icon: Calendar,
      description: "Post at peak engagement times with our AI algorithm that learns from your audience's behavior",
      preview: "/api/placeholder/600/400",
      benefits: ["40% Higher Engagement", "Cross-Platform Sync", "Smart Time Predictions"],
      color: "purple"
    },
    {
      title: "Real-Time Analytics Dashboard",
      icon: BarChart2,
      description: "Track performance metrics across all platforms with beautiful visualizations and actionable insights",
      preview: "/api/placeholder/600/400",
      benefits: ["Cross-Platform Metrics", "Custom Reports", "Growth Analytics"],
      color: "blue"
    },
    {
      title: "Brand Collaboration Hub",
      icon: Users2,
      description: "Connect with brands, manage partnerships, and track campaign performance in one place",
      preview: "/api/placeholder/600/400",
      benefits: ["Partnership Tools", "Campaign Tracking", "ROI Analytics"],
      color: "indigo"
    },
    {
      title: "Visual Content Board",
      icon: Lightbulb,
      description: "Organize and collaborate on content ideas with our intuitive visual board system",
      preview: "/api/placeholder/600/400",
      benefits: ["Visual Planning", "Team Workspace", "Content Calendar"],
      color: "pink"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16 relative">
          <Badge className="mb-4" variant="default">
            <Sparkles className="mr-2 h-3 w-3" />
            Powerful Features
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
            Everything You Need to Grow
          </h2>
          
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Streamline your social media workflow with our comprehensive suite of tools designed for modern creators and brands
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group relative p-6 transition-all duration-300 hover:shadow-lg ${
                activeFeature === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-5 w-5 text-purple-500" />
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 group-hover:from-purple-500/20 group-hover:to-blue-500/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-purple-600" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>

              <div className="mt-6 relative rounded-xl overflow-hidden">
                <img
                  src={feature.preview}
                  alt={feature.title}
                  className="w-full h-52 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {feature.benefits.map((benefit) => (
                  <span
                    key={benefit}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-50 text-purple-700 group-hover:bg-purple-100 transition-colors"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Works With Your Favorite Platforms
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-6">
            {['Instagram', 'Twitter', 'Facebook', 'LinkedIn', 'TikTok'].map((platform) => (
              <div
                key={platform}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <img
                  src={`/api/placeholder/24/24`}
                  alt={platform}
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  {platform}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDisplay;