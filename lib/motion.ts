import type { CSSProperties } from "react";

/** Delay for the .enter load animation. Steps of 60ms, per skill B7. */
export const enterDelay = (ms: number) => ({ "--enter-delay": `${ms}ms` }) as CSSProperties;
