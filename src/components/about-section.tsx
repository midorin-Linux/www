import { aboutText } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section id="about">
      <SectionHeader title="About" />
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {aboutText.split("\n").map((paragraph, i) =>
          paragraph.trim() ? (
            <p
              key={i}
              className="text-sm leading-relaxed text-muted-foreground mb-4 last:mb-0"
            >
              {paragraph}
            </p>
          ) : null
        )}
      </div>
    </section>
  );
}
