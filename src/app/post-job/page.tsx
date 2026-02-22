import { KineticBackground } from "@/components/effects/Fireworks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function PostJobPage() {
    return (
        <div className="min-h-screen pt-20 px-4 flex items-center justify-center relative">
            <KineticBackground />

            <Card className="w-full max-w-2xl glass border-white/10">
                <CardHeader>
                    <CardTitle className="text-3xl text-primary">Post a Job</CardTitle>
                    <CardDescription>Find the best talent with kinetic speed.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Job Title</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors" placeholder="e.g. Senior Kinetic Engineer" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Company</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="Company Name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-300">Location</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="e.g. Remote" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Job Description</label>
                            <textarea className="w-full h-32 bg-white/5 border border-white/10 rounded-md p-3 text-white focus:border-primary focus:outline-none" placeholder="Describe the role..." />
                        </div>

                        <Button className="w-full text-lg h-12 bg-gradient-to-r from-primary to-secondary text-white font-bold tracking-wide hover:shadow-[0_0_20px_rgba(0,243,255,0.4)]">
                            Publish Job
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
