import InputError from '@/components/input-error';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { profile, socials } from '@/data/portfolio';
import { useForm } from '@inertiajs/react';
import { CheckCircle2, Facebook, Instagram, Linkedin, LoaderCircle, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { type FormEvent, useState } from 'react';

const socialIcons = { Facebook, Instagram, Twitter, LinkedIn: Linkedin };

const details = [
    { icon: MapPin, label: 'Location', value: profile.location },
    { icon: Phone, label: 'Phone', value: profile.phone },
    { icon: Mail, label: 'Email', value: profile.email },
];

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({ name: '', email: '', message: '' });

    const submit = (e: FormEvent) => {
        e.preventDefault();
        setSent(false);
        post(route('contact.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setSent(true);
            },
        });
    };

    return (
        <section id="contact" className="bg-background px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
                <div>
                    <h2 className="mb-6 text-4xl font-extrabold">
                        Get In <span className="text-amber-600">Touch</span>
                    </h2>
                    <p className="text-muted-foreground mb-8 text-xl">Have questions or want to work together? Reach out anytime.</p>

                    <div className="space-y-6">
                        {details.map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-start gap-4">
                                <Icon className="mt-1 h-6 w-6 shrink-0 text-amber-600" />
                                <div>
                                    <h3 className="mb-1 text-lg font-bold">{label}</h3>
                                    <p className="text-muted-foreground">{value}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex gap-3">
                        {socials.map(({ name, href }) => {
                            const Icon = socialIcons[name];
                            return (
                                <Button key={name} variant="outline" size="icon" asChild className="rounded-full hover:border-amber-500 hover:bg-amber-500 hover:text-black">
                                    <a href={href} aria-label={name}>
                                        <Icon className="h-5 w-5" />
                                    </a>
                                </Button>
                            );
                        })}
                    </div>
                </div>

                <Card className="bg-zinc-900 text-white dark:bg-zinc-900">
                    <CardHeader>
                        <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {sent && (
                            <Alert className="mb-6 border-emerald-500/50 bg-emerald-500/10 text-emerald-300">
                                <CheckCircle2 className="h-4 w-4" />
                                <AlertTitle>Message sent!</AlertTitle>
                                <AlertDescription className="text-emerald-200/80">Thanks for reaching out — I’ll get back to you soon.</AlertDescription>
                            </Alert>
                        )}

                        <form onSubmit={submit} className="space-y-6">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Your Name</Label>
                                <Input
                                    id="name"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    placeholder="Enter your name"
                                    className="border-zinc-700 bg-zinc-800 focus-visible:ring-amber-500"
                                />
                                <InputError message={errors.name} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData('email', e.target.value)}
                                    placeholder="Enter your email"
                                    className="border-zinc-700 bg-zinc-800 focus-visible:ring-amber-500"
                                />
                                <InputError message={errors.email} />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    rows={5}
                                    value={data.message}
                                    onChange={(e) => setData('message', e.target.value)}
                                    placeholder="Your message here..."
                                    className="border-zinc-700 bg-zinc-800 focus-visible:ring-amber-500"
                                />
                                <InputError message={errors.message} />
                            </div>
                            <Button type="submit" disabled={processing} className="h-12 w-full bg-amber-500 font-bold text-black hover:bg-amber-600">
                                {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
