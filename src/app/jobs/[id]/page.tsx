import { getJob } from "@/lib/api";
import { notFound } from "next/navigation";
import { KineticBackground, triggerFireworks } from "@/components/effects/Fireworks";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, DollarSign, Briefcase } from "lucide-react";
import Link from "next/link";
import ApplyButton from "./ApplyButton"; // Client component for interactivity
import parse from 'html-react-parser';

export default async function JobDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const job = await getJob(resolvedParams.id);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-20 px-4 md:px-8 relative">
            <KineticBackground />

            <div className="max-w-4xl mx-auto">
                <Link href="/jobs" className="inline-flex items-center text-gray-400 hover:text-primary mb-6 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Jobs
                </Link>

                <div className="glass p-8 rounded-lg border border-white/10 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-6">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                                    {job.title}
                                </h1>
                                <p className="text-xl text-gray-300">{job.company}</p>
                            </div>
                            <ApplyButton />
                        </div>

                        <div className="flex flex-wrap gap-6 mb-8 text-gray-300 border-y border-white/10 py-6">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-primary" />
                                {job.type}
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-secondary" />
                                {job.location}
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-accent" />
                                {job.salary}
                            </div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-2xl font-semibold text-primary mb-4">Description</h3>
                            <div className="text-gray-300 leading-relaxed mb-8">
                                {parse(job.description || '', {
                                    replace: (domNode) => {
                                        if (domNode.type === 'tag' && domNode.attribs && domNode.attribs.style) {
                                            delete domNode.attribs.style;
                                        }
                                    }
                                })}
                            </div>

                            <h3 className="text-2xl font-semibold text-secondary mb-4">Tags</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {job.requirements.map((req, i) => (
                                    <li key={i} className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5">
                                        <div className="w-2 h-2 rounded-full bg-accent mr-3"></div>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
