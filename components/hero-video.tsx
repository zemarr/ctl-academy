'use client'

import { useEffect, useRef } from 'react';
import BackgroundPlayer from 'next-video/background-player';

export default function HeroVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Target the video element inside the player wrapper
    const video = containerRef.current?.querySelector('video');

    if (video) {
      console.log("Video found:", video);
      video.playbackRate = 0.65;
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <BackgroundPlayer
        src="https://bror3fpwt5.ufs.sh/f/K38NKMerNJ32ReeKoWGU2xotwgs3QnbTR4PaCGVWkIp0El58"
        className="inset-0 w-full h-full [&>video]:h-full [&>video]:w-full [&>video]:object-cover"
      />
    </div>
  );
}