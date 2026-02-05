// components/VideoBackground.tsx

import type { ReactNode } from "react";

interface VideoBackgroundProps {
    videoSrc: string;           // URL or imported path
    children: ReactNode;
    overlay?: boolean;          // optional dark overlay
    className?: string;
}

export default function VideoBackground({
    videoSrc,
    children,
    overlay = true,
    className = '',
}: VideoBackgroundProps) {
    return (
        <div className={`relative h-screen w-full overflow-hidden  ${className}`}>
            {/* Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Optional overlay for better text contrast */}
            {overlay && (
                <div className="absolute inset-0 bg-black/50" /> // adjust opacity: bg-black/40, bg-black/60, etc.
            )}

            {/* Content on top */}
            <div className="relative z-10 flex flex-col h-full w-full items-center justify-center">
                {children}
            </div>
        </div>
    );
}