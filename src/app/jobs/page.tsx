import { JobCard } from "@/components/jobs/JobCard";
import { getJobs } from "@/lib/api";
import { KineticBackground } from "@/components/effects/Fireworks";

export const dynamic = 'force-dynamic';

export default async function JobsPage({
    searchParams,
}: {
    searchParams: Promise<{ query?: string; type?: string; location?: string }>;
}) {
    const resolvedParams = await searchParams;
    const rawQuery = resolvedParams?.query;
    const query = typeof rawQuery === 'string' ? rawQuery.toLowerCase() : undefined;

    const jobs = await getJobs(query);

    const filteredJobs = jobs.filter((job) => {
        // Local filtering can be added here if needed, e.g. for job types not supported by API search
        return true;
    });

    return (
        <div className="min-h-screen pt-20 px-4 md:px-8 relative">
            <KineticBackground />

            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {query ? `Results for "${resolvedParams.query}"` : "Available Positions"}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Filters */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-6 rounded-lg glass border border-white/10">
                            <h3 className="font-semibold mb-4 text-primary">Filters</h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Job Type</label>
                                    <div className="space-y-2">
                                        {['Full-time', 'Part-time', 'Contract', 'Remote'].map((type) => (
                                            <div key={type} className="flex items-center space-x-2">
                                                <input type="checkbox" id={type} className="rounded border-gray-600 bg-black/50 text-primary focus:ring-primary" />
                                                <label htmlFor={type} className="text-sm text-gray-300">{type}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Location</label>
                                    <div className="space-y-2">
                                        {['Remote', 'San Francisco', 'New York', 'Austin'].map((loc) => (
                                            <div key={loc} className="flex items-center space-x-2">
                                                <input type="checkbox" id={loc} className="rounded border-gray-600 bg-black/50 text-secondary focus:ring-secondary" />
                                                <label htmlFor={loc} className="text-sm text-gray-300">{loc}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Job List */}
                    <div className="lg:col-span-3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <JobCard key={job.id} job={job} />
                                ))
                            ) : (
                                <>
                                    <div className="col-span-1 md:col-span-2 text-center py-8 text-gray-400">
                                        <p className="text-xl">No exact matches found for "{query}".</p>
                                        <p className="text-sm mt-2 mb-6">But check out these popular kinetic positions:</p>
                                    </div>
                                    {jobs.slice(0, 2).map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
