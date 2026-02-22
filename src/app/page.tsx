import { KineticBackground, triggerFireworks } from "@/components/effects/Fireworks";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Search, MapPin, Briefcase } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-4">
      <KineticBackground />

      <div className="z-10 text-center max-w-4xl w-full space-y-8 animate-in fade-in zoom-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          JOB PORTAL
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          Ignite your career with the future of job hunting. <br />
          Server-rendered speed. Kinetic precision.
        </p>

        <form action="/jobs" className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mt-8">
          <div className="relative group w-full md:w-96">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-black rounded-lg leading-none">
              <Search className="absolute left-3 text-gray-400" />
              <input
                type="text"
                name="query"
                placeholder="Search for jobs..."
                className="w-full bg-transparent text-white p-4 pl-10 focus:outline-none rounded-lg placeholder:text-gray-500"
              />
            </div>
          </div>
          <Button type="submit" size="lg" className="h-14 px-8 text-lg" variant="default">
            Search
          </Button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full">
          <FeatureCard
            icon={<Briefcase className="w-8 h-8 text-primary" />}
            title="10k+ Jobs"
            description="Opportunities across the globe"
          />
          <FeatureCard
            icon={<MapPin className="w-8 h-8 text-secondary" />}
            title="Remote First"
            description="Work from anywhere, anytime"
          />
          <FeatureCard
            icon={<Search className="w-8 h-8 text-accent" />}
            title="Smart Match"
            description="AI-powered job recommendations"
          />
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="hover:scale-105 transition-transform duration-300 border-white/5 hover:border-white/20">
      <CardHeader className="flex flex-col items-center text-center">
        <div className="p-3 rounded-full bg-white/5 mb-4 backdrop-blur-sm border border-white/10">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
