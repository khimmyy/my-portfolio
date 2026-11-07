import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { type Project } from '@/data/portfolio';
import { Link } from '@inertiajs/react';
import { ArrowRight } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
    const external = project.link.startsWith('http');
    const label = (
        <>
            View Project <ArrowRight className="h-4 w-4" />
        </>
    );

    return (
        <Card className="group overflow-hidden pt-0 transition hover:-translate-y-1 hover:shadow-lg">
            <div className="aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                    <Badge key={t} variant="secondary">
                        {t}
                    </Badge>
                ))}
            </CardContent>
            <CardFooter className="mt-auto">
                <Button variant="link" asChild className="px-0">
                    {external ? (
                        <a href={project.link} target="_blank" rel="noreferrer">
                            {label}
                        </a>
                    ) : (
                        <Link href={project.link}>{label}</Link>
                    )}
                </Button>
            </CardFooter>
        </Card>
    );
}
