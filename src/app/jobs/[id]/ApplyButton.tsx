"use client";

import { Button } from "@/components/ui/button";
import { triggerFireworks } from "@/components/effects/Fireworks";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function ApplyButton() {
    const [applied, setApplied] = useState(false);

    const handleApply = () => {
        triggerFireworks();
        setApplied(true);
        // Reset after a while for demo purposes
        setTimeout(() => setApplied(false), 5000);
    };

    return (
        <Button
            size="lg"
            className={`text-lg px-8 transition-all duration-500 ${applied ? "bg-green-500 hover:bg-green-600 shadow-[0_0_20px_rgba(34,197,94,0.6)]" : "bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"}`}
            onClick={handleApply}
        >
            {applied ? "Applied Successfully!" : "Apply Now"}
        </Button>
    );
}
