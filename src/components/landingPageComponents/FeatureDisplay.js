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
      preview: "https://cdn.prod.website-files.com/62fcfcf2e1a4c21ed18b80e6/655f601be42b2ab3729ce380_efpzd0jx3n.png",
      benefits: ["40% Higher Engagement", "Cross-Platform Sync", "Smart Time Predictions"],
      color: "purple"
    },
    {
      title: "Real-Time Analytics Dashboard",
      icon: BarChart2,
      description: "Track performance metrics across all platforms with beautiful visualizations and actionable insights",
      preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: ["Cross-Platform Metrics", "Custom Reports", "Growth Analytics"],
      color: "blue"
    },
    {
      title: "Brand Collaboration Hub",
      icon: Users2,
      description: "Connect with brands, manage partnerships, and track campaign performance in one place",
      preview: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: ["Partnership Tools", "Campaign Tracking", "ROI Analytics"],
      color: "indigo"
    },
    {
      title: "Visual Content Board",
      icon: Lightbulb,
      description: "Organize and collaborate on content ideas with our intuitive visual board system",
      preview: "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      benefits: ["Visual Planning", "Team Workspace", "Content Calendar"],
      color: "pink"
    }
  ];

  return (
    <section id="features" className="relative py-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
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


      </div>
    </section>
  );
};

export default FeatureDisplay;