'use client';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Calendar, BarChart2, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('analytics');
  const supportedPlatforms = {
    'Instagram': 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-1024.png',
    'Threads': 'https://cdn4.iconfinder.com/data/icons/threads-by-instagram/128/threads-logo-brand-sign-contained-1024.png',
    'Twitter/X': 'https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-1024.png',
    'Facebook': 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png',
    'LinkedIn': 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png',
    'TikTok': 'https://cdn2.iconfinder.com/data/icons/social-media-2421/512/TikTok-1024.png',
    'Pinterest': 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Pinterest-1024.png',
    'YouTube': 'https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-1024.png',
    'Reddit': 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_reddit-1024.png'
  };


  const analyticsData = [
    { name: 'Mon', value: 2400 },
    { name: 'Tue', value: 4200 },
    { name: 'Wed', value: 3800 },
    { name: 'Thu', value: 5600 },
    { name: 'Fri', value: 4900 },
    { name: 'Sat', value: 6800 },
    { name: 'Sun', value: 7200 },
  ];

  const showcaseTabs = [
    {
      id: 'analytics',
      title: 'Smart Analytics',
      icon: BarChart2,
      stats: [
        { label: 'Engagement Rate', value: '+147%' },
        { label: 'Post Reach', value: '2.4M' },
        { label: 'Growth Rate', value: '+32%' }
      ]
    },
    {
      id: 'schedule',
      title: 'AI Calendar',
      icon: Calendar,
      stats: [
        { label: 'Posts Scheduled', value: '124' },
        { label: 'Time Saved', value: '18hrs' },
        { label: 'Best Times', value: '93%' }
      ]
    },
    {
      id: 'performance',
      title: 'Performance',
      icon: Trophy,
      stats: [
        { label: 'Conversion Rate', value: '+58%' },
        { label: 'ROI', value: '3.2x' },
        { label: 'Brand Score', value: '94' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50/30 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-purple-600 font-semibold mb-4">Experience the Power</p>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            See Your Growth in Action
          </h2>
          <p className="text-gray-600 text-lg">
            Watch your social media presence transform with our AI-powered tools and analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {showcaseTabs.map((tab) => (
            <Card
              key={tab.id}
              className={`p-6 cursor-pointer transition-all duration-300 ${
                activeTab === tab.id ? 'ring-2 ring-purple-500 shadow-lg' : 'hover:shadow-md'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-100">
                    <tab.icon className="w-5 h-5 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{tab.title}</h3>
                </div>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                  activeTab === tab.id ? 'translate-x-1 text-purple-600' : 'text-gray-400'
                }`} />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {tab.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-50 rounded-2xl" />
          
          <div className="relative">
            {activeTab === 'analytics' && (
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={analyticsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#666"
                     />
                    <YAxis stroke="#666"
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={{ stroke: '#8b5cf6', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 8, stroke: '#8b5cf6', strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {activeTab === 'schedule' && (
              <div className="grid grid-cols-7 gap-4">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="aspect-square rounded-lg bg-purple-50 p-3 flex flex-col items-center justify-center">
                    <div className="text-sm font-medium text-gray-600">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}
                    </div>
                    {i % 2 === 0 && (
                      <div className="mt-2 w-2 h-2 rounded-full bg-purple-600" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'performance' && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-600">Target {i + 1}</span>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      {['98%', '2.4x', '147%', '32%'][i]}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Works With Your Favorite Platforms
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 py-8">
                {Object.keys(supportedPlatforms).map((platform) => (
                    <div
                    key={platform}
                    className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
                    >
                    <div className="p-3 rounded-full bg-gradient-to-r">
                        <img
                        src={supportedPlatforms[platform]} 
                        alt={platform}
                        className="w-10 h-10"
                        />
                    </div>
                    <span className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-all duration-300">
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

export default ProductShowcase;