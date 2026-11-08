import { Fragment } from "react";
import { ArrowDown, ArrowRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export type FlowNode = { title: string; detail: string; highlight?: boolean };

/**
 * A left to right flow of steps (top to bottom on phones), with an optional label on
 * each connector. Nodes sit 24px inside a 12px frame, so by the nested radius rule
 * (12 minus 24 is below 2) they stay square.
 */
export function FlowFigure({ nodes, connectors = [] }: { nodes: FlowNode[]; connectors?: string[] }) {
  return (
    <ol className="flex flex-col gap-2 md:flex-row md:items-stretch md:gap-2">
      {nodes.map((node, i) => (
        <Fragment key={node.title}>
          <li
            className={cn(
              "flex-1 border p-4",
              node.highlight ? "border-accent bg-bg" : "border-line bg-bg",
            )}
          >
            <p className={cn("title-4", node.highlight ? "text-accent" : "text-fg")}>{node.title}</p>
            <p className="mt-1 caption-5 text-fg-muted">{node.detail}</p>
          </li>
          {i < nodes.length - 1 && (
            <li aria-hidden className="flex items-center justify-center gap-2 py-1 text-fg-muted md:flex-col md:py-0">
              <ArrowDown size={16} className="md:hidden" />
              <ArrowRight size={16} className="hidden md:block" />
              {connectors[i] && (
                <span className="caption-5 md:max-w-20 md:text-center">{connectors[i]}</span>
              )}
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
