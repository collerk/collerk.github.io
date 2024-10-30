'use client'
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/ui/accordion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out group cursor-pointer text-white"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center">
                <h2 className={`text-xl font-semibold ${isOpen ? 'text-white' : 'text-white/90'}`}>{question}</h2>
                <ChevronDown
                    className={cn("h-5 w-5 text-white transition-transform duration-200", {
                        "rotate-180": isOpen,
                    })}
                />
            </div>
            {isOpen && <p className="mt-4 text-base text-white/90">{answer}</p>}
        </div>
    );
};

function FaqSection() {
    const faqs = [
        {
            question: "How does Collerk help grow my social media presence?",
            answer: "Collerk offers a comprehensive set of tools including post scheduling, multi-channel publishing, advanced analytics, and AI-driven content suggestions to help influencers and businesses expand their reach."
        },
        {
            question: "Can I connect multiple social media accounts?",
            answer: "Absolutely! Collerk supports Instagram, Facebook, Twitter, LinkedIn, TikTok, Pinterest, and YouTube, allowing you to manage all your platforms from one place."
        },
        {
            question: "Does Collerk provide engagement analytics?",
            answer: "Yes, we offer detailed insights including follower growth, engagement metrics, and performance tracking to optimize your social media strategy."
        },
        {
            question: "Is there a mobile version of Collerk?",
            answer: "Yes, Collerk is available on both iOS and Android, ensuring you can manage your social presence on the go."
        },
        {
            question: "How secure is my data on Collerk?",
            answer: "We prioritize data security with encrypted storage and SSL-secured connections. You can also request data export or deletion at any time."
        },
        {
            question: "What kind of reports does Collerk generate?",
            answer: "Collerk provides customizable reports, showcasing performance data like engagement rates, audience demographics, and post success metrics, all downloadable as PDFs."
        },
    ];

    return (
        <section className="bg-white py-20" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h1>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FaqSection;
