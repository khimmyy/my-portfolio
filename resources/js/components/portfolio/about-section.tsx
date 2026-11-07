import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { skills } from '@/data/portfolio';
import { type ReactNode } from 'react';

const Strong = ({ children }: { children: ReactNode }) => <span className="text-foreground font-medium">{children}</span>;
const Accent = ({ children }: { children: ReactNode }) => <span className="font-semibold text-blue-600 dark:text-blue-400">{children}</span>;

export default function AboutSection() {
    return (
        <section id="about" className="bg-muted/50 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-12 text-center text-4xl font-extrabold">About Me</h2>

                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
                    <div className="flex justify-center md:justify-start">
                        <Avatar className="animate-fade-in h-72 w-72 opacity-0 shadow-xl transition duration-500 hover:scale-105">
                            <AvatarImage src="/images/profile.jpg" alt="Khimberly Khate Fontanilla" className="object-cover" />
                            <AvatarFallback className="text-6xl">KF</AvatarFallback>
                        </Avatar>
                    </div>

                    <div className="text-muted-foreground space-y-6 text-lg leading-relaxed md:text-justify">
                        <p>
                            I’m a <Accent>versatile and driven developer</Accent> with a strong foundation in both frontend and backend
                            technologies. My expertise spans modern frameworks like <Strong>React.js</Strong>, <Strong>Laravel</Strong>, and{' '}
                            <Strong>Node.js</Strong>, enabling me to build dynamic web applications with clean architecture and responsive design.
                        </p>
                        <p>
                            I’m proficient in <Strong>TypeScript</Strong>, <Strong>JavaScript</Strong>, <Strong>HTML</Strong>, and{' '}
                            <Strong>CSS</Strong>, and I bring a thoughtful approach to UI/UX design using tools like <Strong>Figma</Strong> and{' '}
                            <Strong>AdobeXD</Strong>.
                        </p>
                        <p>
                            I also have hands-on experience in mobile app development using <Strong>Android Studio</Strong> and <Strong>XML</Strong>,
                            and I’ve worked with <Strong>Firebase</Strong> for real-time data and authentication. My backend toolkit includes{' '}
                            <Strong>SQL</Strong>, <Strong>NoSQL</Strong>, and <Strong>MongoDB</Strong>.
                        </p>
                        <p>
                            I’m confident navigating both technical and business environments, with working knowledge of{' '}
                            <Strong>SAP Business One ERP</Strong>. Whether I’m debugging code, designing interfaces, or collaborating with a team, I
                            bring strong <Accent>communication</Accent>, <Accent>leadership</Accent>, and <Accent>analytical thinking</Accent> to
                            every project.
                        </p>
                    </div>
                </div>

                <TooltipProvider delayDuration={100}>
                    <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-5">
                        {skills.map((skill) => (
                            <Tooltip key={skill.name}>
                                <TooltipTrigger asChild>
                                    <Card className="flex aspect-square items-center justify-center p-4 transition hover:-translate-y-1 hover:shadow-md">
                                        <img src={skill.image} alt={skill.name} className="h-14 w-14 object-contain dark:invert" />
                                    </Card>
                                </TooltipTrigger>
                                <TooltipContent>{skill.name}</TooltipContent>
                            </Tooltip>
                        ))}
                    </div>
                </TooltipProvider>
            </div>
        </section>
    );
}
