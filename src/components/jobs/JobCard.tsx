import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// I'll implement a simple Badge here or use raw HTML
import Link from "next/link";
import { MapPin, Clock, DollarSign, Briefcase } from "lucide-react";
import { Job } from "@/lib/data";

export function JobCard({ job }: { job: Job }) {
    return (
        <Card className="group glass hover:bg-white/10 transition-all duration-300 border-white/5 hover:border-primary/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">{job.title}</CardTitle>
                        <CardDescription className="text-gray-400 mt-1">{job.company}</CardDescription>
                    </div>
                    <div className="bg-white/10 text-xs px-2 py-1 rounded border border-white/10">
                        {job.type}
                    </div>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {job.location}
                    </div>
                    <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-secondary" />
                        {job.salary}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-accent" />
                        {job.postedAt}
                    </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {job.requirements.slice(0, 3).map((req, i) => (
                        <span key={i} className="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded-full border border-white/5">
                            {req}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Link href={`/jobs/${job.id}`} className="w-full">
                    <Button variant="outline" className="w-full hover:bg-primary hover:text-black group-hover:shadow-[0_0_15px_rgba(0,243,255,0.4)]">
                        View Details
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
