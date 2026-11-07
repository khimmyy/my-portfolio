import { Button } from '@/components/ui/button';
import PortfolioLayout from '@/layouts/portfolio-layout';
import { Link } from '@inertiajs/react';
import { ArrowLeft } from 'lucide-react';

export default function WebDevelopment() {
    return (
        <PortfolioLayout title="Web Development">
            <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black px-6 pt-24 text-white">
                <div className="absolute -left-[40%] h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-3xl" />
                <div className="relative mx-auto max-w-4xl text-center">
                    <h1 className="text-4xl font-semibold md:text-6xl">
                        Welcome to my <span className="text-gradient">Web Development</span> Portfolio!
                    </h1>
                    <Button asChild variant="outline" className="mt-10 border-white bg-transparent text-white hover:bg-white hover:text-black">
                        <Link href="/#projects">
                            <ArrowLeft className="h-4 w-4" /> Back to Projects
                        </Link>
                    </Button>
                </div>
            </section>
        </PortfolioLayout>
    );
}
