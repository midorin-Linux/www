import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function SkillsSection() {
  return (
    <section id="skills">
      <SectionHeader title="Skills" />
      <div className="space-y-8">
        {skillCategories.map((category, i) => (
          <div key={i}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.items.map((skill, j) => (
                <div key={j}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {skill.description}
                    </span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-secondary">
                    <div
                      className="h-full rounded-full bg-primary/70 transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
