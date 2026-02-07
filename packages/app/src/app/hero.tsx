"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import About from "./about";

const DitherBackground = dynamic(() => import("./dither-background"), {
  ssr: false,
});

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="transition-opacity duration-700"
        style={{ opacity: loaded ? 1 : 0 }}
      >
        <DitherBackground
          waveSpeed={0.05}
          waveFrequency={3}
          waveAmplitude={0.3}
          waveColor={[0.5, 0.5, 0.5]}
          colorNum={4}
          pixelSize={2}
          enableMouseInteraction
          mouseRadius={1}
          onReady={() => {
            setLoaded(true);
          }}
        />
      </div>
      <div className="pointer-events-none relative z-10 flex min-h-screen flex-col items-center justify-center px-6">
        <h1 className="text-5xl font-bold tracking-tight text-primary sm:text-7xl">
          Nasr Maswood
        </h1>
        <div className="pointer-events-auto mt-8">
          <About />
        </div>
      </div>
    </div>
  );
}
