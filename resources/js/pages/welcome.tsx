import AboutSection from '@/components/portfolio/about-section';
import ContactSection from '@/components/portfolio/contact-section';
import HeroSection from '@/components/portfolio/hero-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import PortfolioLayout from '@/layouts/portfolio-layout';

export default function Welcome() {
    return (
        <PortfolioLayout title="Home">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
        </PortfolioLayout>
    );
}
