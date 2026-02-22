export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    description: string;
    requirements: string[];
    postedAt: string;
    companyLogo?: string;
}

// Keep mock data as fallback or for testing if needed
export const jobs: Job[] = [
    {
        id: "1",
        title: "Senior Frontend Engineer",
        company: "NeonTech",
        location: "Remote",
        type: "Full-time",
        salary: "$120k - $160k",
        description: "We are looking for a visionary frontend engineer to build the next generation of kinetic interfaces. You will work with React, Next.js, and WebGL to create stunning visual experiences.",
        requirements: ["React", "Next.js", "TypeScript", "WebGL", "Tailwind CSS"],
        postedAt: "2 days ago"
    },
    // ... other mock jobs can stay or be removed
];
