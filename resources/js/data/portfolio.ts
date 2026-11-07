export type Project = {
    title: string;
    description: string;
    tech: string[];
    link: string;
    image: string;
};

export const profile = {
    firstName: 'Khimberly Khate',
    lastName: 'Fontanilla',
    roles: ['Web Developer', 'Mobile Developer', 'Graphic Designer', 'Video Editor'],
    location: 'Marikina City, Philippines',
    phone: '+63 993 276 7058',
    email: 'fontanillakhimberly@gmail.com',
};

export const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
];

export const skills = [
    { name: 'HTML', image: '/images/html5.png' },
    { name: 'CSS', image: '/images/css.png' },
    { name: 'Java', image: '/images/java.png' },
    { name: 'JavaScript', image: '/images/js.png' },
    { name: 'PHP', image: '/images/php.png' },
    { name: 'Laravel', image: '/images/laravel.png' },
    { name: 'React', image: '/images/react.png' },
    { name: 'SQL', image: '/images/sql.png' },
    { name: 'PostgreSQL', image: '/images/postgre.png' },
    { name: 'Android Studio', image: '/images/androidstud.png' },
];

export const projects: Project[] = [
    {
        title: 'Website Development Portfolio',
        description: 'A personal portfolio built with the web development languages I learned.',
        tech: ['HTML', 'CSS', 'Laravel', 'React', 'Tailwind', 'shadcn/ui'],
        link: '/webdevelopment',
        image: '/images/webdesign.jpg',
    },
    {
        title: 'Android App Development',
        description: 'A personal portfolio showcasing the mobile application made on Android Studio.',
        tech: ['XML', 'JavaScript', 'Database'],
        link: '/webdevelopment',
        image: '/images/appdesign.jpg',
    },
    {
        title: 'Graphics Design Portfolio',
        description: 'A portfolio showcasing my personal or school purposes graphic design works.',
        tech: ['Canva', 'Adobe'],
        link: 'https://github.com/khimberly/task-manager',
        image: '/images/graphics.jpg',
    },
    {
        title: 'Video Editing Portfolio',
        description: 'A portfolio showcasing my personal, freelancing, or school purposes video editing works.',
        tech: ['Premiere Pro', 'CapCut', 'Sony Vegas Pro'],
        link: 'https://github.com/khimberly/task-manager',
        image: '/images/videoedit.jpg',
    },
    {
        title: 'Photo Editing Portfolio',
        description: 'A page showcasing my photo taken and also edited pictures for my personal social media accounts.',
        tech: ['Photoshop', 'Lightroom'],
        link: 'https://github.com/khimberly/task-manager',
        image: '/images/photoedit.jpg',
    },
];

export const socials = [
    { name: 'Facebook', href: '#' },
    { name: 'Instagram', href: '#' },
    { name: 'Twitter', href: '#' },
    { name: 'LinkedIn', href: '#' },
] as const;
