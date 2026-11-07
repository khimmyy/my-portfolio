import ProjectCard from '@/components/portfolio/project-card';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-black px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <h2 className="mb-10 text-center text-4xl font-extrabold text-white">Projects</h2>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
