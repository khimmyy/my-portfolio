import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { navLinks, profile } from '@/data/portfolio';
import { Head, Link } from '@inertiajs/react';
import { Menu } from 'lucide-react';
import { type ReactNode } from 'react';

export default function PortfolioLayout({ title, children }: { title?: string; children: ReactNode }) {
    return (
        <>
            <Head title={title} />
            <div className="bg-background text-foreground min-h-screen scroll-smooth">
                <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
                    <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
                        <Link href="/" className="text-gradient text-2xl font-bold">
                            {profile.lastName}
                        </Link>

                        <div className="hidden items-center gap-1 md:flex">
                            {navLinks.map((link) => (
                                <Button
                                    key={link.name}
                                    variant="ghost"
                                    asChild
                                    className="text-slate-300 hover:bg-white/10 hover:text-pink-400"
                                >
                                    <a href={link.href}>{link.name}</a>
                                </Button>
                            ))}
                            <AppearanceToggleDropdown className="ml-2 text-slate-300" />
                        </div>

                        <div className="flex items-center gap-1 md:hidden">
                            <AppearanceToggleDropdown className="text-slate-300" />
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="text-slate-300 hover:bg-white/10 hover:text-white">
                                        <Menu className="h-5 w-5" />
                                        <span className="sr-only">Open menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-64">
                                    <SheetHeader>
                                        <SheetTitle className="text-gradient text-xl">{profile.lastName}</SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-1 px-4">
                                        {navLinks.map((link) => (
                                            <SheetClose asChild key={link.name}>
                                                <a href={link.href} className="hover:bg-accent rounded-md px-3 py-2 text-sm font-medium">
                                                    {link.name}
                                                </a>
                                            </SheetClose>
                                        ))}
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </nav>
                </header>

                <main>{children}</main>

                <footer className="text-muted-foreground border-t p-6 text-center text-sm">
                    Built with Laravel, React &amp; shadcn/ui by Khimberly
                </footer>
            </div>
        </>
    );
}
