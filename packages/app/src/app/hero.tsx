"use client";

import DitherBackground from "./dither-background";

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <DitherBackground
        waveSpeed={0.05}
        waveFrequency={3}
        waveAmplitude={0.3}
        waveColor={[0.5, 0.5, 0.5]}
        colorNum={4}
        pixelSize={2}
        enableMouseInteraction
        mouseRadius={1}
      />
      <div className="pointer-events-none relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Nasr Maswood
          </h1>
          <p className="mt-4 text-lg text-white/80 sm:text-xl">
            Software Engineer in NYC
          </p>
        </div>
      </div>
    </div>
  );
}
