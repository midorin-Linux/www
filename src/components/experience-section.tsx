import { experiences } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/ui/section-header";

export function ExperienceSection() {
  return (
    <section id="experience">
      <SectionHeader title="Experience" />
      <div className="relative">
        <div className="absolute left-1.75 top-2 bottom-2 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8">
              <div className="absolute left-0 top-2 h-3.75 w-3.75 rounded-full border-2 border-primary bg-background" />

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                  <h3 className="text-base font-semibold">{exp.title}</h3>
                  <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-primary/80 mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
