"use client";

import { useEffect, useState } from "react";
import { Monitor, Moon, Sun } from "@/components/ui/icons";
import { applyTheme, readTheme, type ThemeChoice } from "@/lib/theme";
import { cn } from "@/lib/cn";

const options: { value: ThemeChoice; label: string; Icon: typeof Sun }[] = [
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "dark", label: "Dark theme", Icon: Moon },
  { value: "light", label: "Light theme", Icon: Sun },
];

/** Three way theme switch built on native radio inputs, so arrow keys work for free. */
export function ThemeSwitch() {
  const [choice, setChoice] = useState<ThemeChoice>("system");

  useEffect(() => {
    setChoice(readTheme());
  }, []);

  const select = (value: ThemeChoice) => {
    setChoice(value);
    applyTheme(value);
  };

  return (
    <fieldset className="inline-flex w-fit items-center gap-1 rounded-full border border-line p-1">
      <legend className="sr-only">Colour theme</legend>
      {options.map(({ value, label, Icon }) => {
        const checked = choice === value;
        return (
          <label
            key={value}
            title={label}
            className={cn(
              "relative inline-flex size-8 cursor-pointer items-center justify-center rounded-full",
              "transition-colors duration-300 ease-base",
              "has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-accent",
              checked ? "bg-surface-raised text-fg" : "text-fg-muted hover:text-fg",
            )}
          >
            <input
              type="radio"
              name="theme"
              value={value}
              checked={checked}
              onChange={() => select(value)}
              className="sr-only"
            />
            <Icon size={16} aria-hidden />
            <span className="sr-only">{label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
