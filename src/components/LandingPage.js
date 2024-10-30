import FaqSection from './landingPageComponents/FaqSection';
import Footer from './landingPageComponents/Footer';
import FinalPush from './landingPageComponents/FinalPush';
import PricingSection from './landingPageComponents/PricingSection';
import DemoSection from './landingPageComponents/DemoSection';
import FeatureDisplay from './landingPageComponents/FeatureDisplay';
import FeatureDisplay1 from './landingPageComponents/FeatureDisplay1';
import HeroSection from './landingPageComponents/HeroSection';
import BeforeAfter from './landingPageComponents/BeforeAfter';
import Testimonials from './landingPageComponents/Testimonials';
import AsSeenOn from './landingPageComponents/AsSeenOn';
import ProductShowcase from './landingPageComponents/ProductShowcase';


function LandingPage() {
    return (
        <>
            <HeroSection />
            <AsSeenOn />
            <FeatureDisplay />
            {/* <DemoSection /> */}
            <ProductShowcase />
            <BeforeAfter />
            <PricingSection />
            <FaqSection />
            {/* <Testimonials /> */}
            <FinalPush />
            <Footer />
        </>
    )
}

export default LandingPage