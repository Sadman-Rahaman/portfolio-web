"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

/**
 * A short, silent, looping film. It loads nothing until needed, plays only while on screen,
 * stays on its poster frame for visitors who prefer reduced motion, and always offers a
 * pause button (WCAG 2.2.2).
 */
export function LoopVideo({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster: string;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const pausedByVisitor = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      pausedByVisitor.current = true;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByVisitor.current) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      pausedByVisitor.current = false;
      video.play().catch(() => {});
    } else {
      pausedByVisitor.current = true;
      video.pause();
    }
  };

  return (
    <div className={cn("relative overflow-hidden rounded-lg", className)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="h-full w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause film" : "Play film"}
        className={
          "absolute top-2 right-2 grid size-10 place-items-center rounded-full bg-bg/80 text-fg backdrop-blur " +
          "transition-[background-color,transform] duration-300 ease-base hover:bg-bg active:scale-98 " +
          "motion-reduce:active:scale-100"
        }
      >
        {playing ? <Pause size={16} weight="fill" aria-hidden /> : <Play size={16} weight="fill" aria-hidden />}
      </button>
    </div>
  );
}
