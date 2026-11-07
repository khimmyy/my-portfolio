import { Button } from '@/components/ui/button';
import { profile } from '@/data/portfolio';
import { useTypewriter } from '@/hooks/use-typewriter';

export default function HeroSection() {
    const role = useTypewriter(profile.roles);

    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-black text-white">
            {/* Gradient blobs */}
            <div className="bg-brand-gradient absolute top-0 -right-4 h-[20%] w-[15%] rounded-full opacity-30 blur-3xl md:-top-24 md:-right-32" />
            <div className="absolute -left-[40%] h-full w-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-10 blur-3xl md:-left-[45%]" />

            <div className="relative mx-auto flex w-[85%] flex-col items-center justify-between gap-12 pt-24 pb-16 md:flex-row md:pt-0 md:pb-0">
                <div className="flex w-full flex-col gap-2 md:w-3/5">
                    <h1 className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">Hi there, I am</h1>
                    <h1 className="text-gradient text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl">
                        {profile.firstName} {profile.lastName}!
                    </h1>
                    <h2 className="min-h-[1.5em] text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl" aria-live="polite">
                        {role}
                        <span className="ml-1 animate-pulse font-light">|</span>
                    </h2>

                    <div className="mt-2 flex flex-col gap-4 sm:flex-row lg:mt-4">
                        <Button asChild size="lg" className="bg-brand-gradient h-12 px-8 text-lg font-semibold text-white hover:opacity-90">
                            <a href="#projects">My Projects</a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="h-12 border-2 border-white bg-transparent px-8 text-lg font-semibold text-white hover:bg-white hover:text-black"
                        >
                            <a href="#about">About Me</a>
                        </Button>
                    </div>
                </div>

                <div className="flex justify-center md:w-2/5">
                    <img src="/images/webicon.png" alt="Web icon" className="animate-fade-in w-72 rounded-lg opacity-0 shadow-lg" />
                </div>
            </div>
        </section>
    );
}
