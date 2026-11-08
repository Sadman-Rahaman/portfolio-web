"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import { Check, Copy } from "./icons";
import { cn } from "@/lib/cn";

type Status = "idle" | "copied" | "failed";

/**
 * Shows the email address as selectable text with a copy button.
 * Confirms calmly, and on failure selects the address so it can be copied by hand.
 */
export function CopyEmail({ className }: { className?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const addressRef = useRef<HTMLSpanElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const selectAddress = () => {
    const node = addressRef.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const copy = async () => {
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(site.email);
      setStatus("copied");
    } catch {
      selectAddress();
      setStatus("failed");
    }
    timer.current = window.setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex flex-wrap items-center gap-3">
        <span ref={addressRef} className="body-5 break-all text-fg select-all">
          {site.email}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-2 button-sm text-fg transition-[background-color,transform] duration-300 ease-base hover:bg-surface-raised active:scale-98 motion-reduce:active:scale-100"
        >
          {status === "copied" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          {status === "copied" ? "Copied" : "Copy email"}
        </button>
      </div>
      <p aria-live="polite" className="min-h-4 caption-5 text-fg-muted">
        {status === "copied" && "Email address copied."}
        {status === "failed" && "Copy failed. The address is selected, so press Ctrl+C or Cmd+C."}
      </p>
    </div>
  );
}
