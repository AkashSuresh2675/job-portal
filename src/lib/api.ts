import { Job } from "./data";

const REMOTIVE_API_URL = "https://remotive.com/api/remote-jobs";

export interface RemotiveJob {
    id: number;
    url: string;
    title: string;
    company_name: string;
    company_logo: string;
    category: string;
    tags: string[];
    job_type: string;
    publication_date: string;
    candidate_required_location: string;
    salary: string;
    description: string;
}

export async function getJobs(query?: string): Promise<Job[]> {
    try {
        let url = REMOTIVE_API_URL;
        if (query) {
            url += `?search=${encodeURIComponent(query)}`;
        } else {
            url += `?limit=50`; // Default limit for performance when no query
        }

        const res = await fetch(url, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error("Failed to fetch jobs");
        }

        const data = await res.json();
        const remotiveJobs: RemotiveJob[] = data.jobs;

        // Limit to 50 jobs even for search to prevent massive payloads
        return remotiveJobs.slice(0, 50).map(mapRemotiveToJob);
    } catch (error) {
        console.error("Error fetching jobs:", error);
        return [];
    }
}

export async function getJob(id: string): Promise<Job | undefined> {
    try {
        // Fetch all jobs, as the API doesn't have an endpoint for a single job by ID.
        // We rely on Next.js fetch caching to keep this performant.
        const res = await fetch(REMOTIVE_API_URL, {
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!res.ok) {
            throw new Error("Failed to fetch jobs for getJob");
        }

        const data = await res.json();
        const remotiveJobs: RemotiveJob[] = data.jobs;

        const rJob = remotiveJobs.find((j) => j.id.toString() === id);
        if (rJob) {
            console.log(`Found job for ID: ${id}`);
            return mapRemotiveToJob(rJob);
        }

        console.log(`Job not found for ID: ${id}.`);
        return undefined;
    } catch (error) {
        console.error("Error fetching job:", error);
        return undefined;
    }
}

function mapRemotiveToJob(rJob: RemotiveJob): Job {
    return {
        id: rJob.id.toString(),
        title: rJob.title,
        company: rJob.company_name,
        location: rJob.candidate_required_location,
        type: rJob.job_type,
        salary: rJob.salary || "Competitive",
        description: rJob.description,
        requirements: rJob.tags,
        postedAt: formatDate(rJob.publication_date),
        companyLogo: rJob.company_logo
    };
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric'
    }).format(date);
}
