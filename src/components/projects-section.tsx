import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import { SectionHeader } from "@/components/ui/section-header";
import { ExternalLink as ExternalLinkIcon, Github } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects">
      <SectionHeader title="Projects" />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Card
            key={i}
            className="group hover:shadow-md transition-shadow duration-200"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{project.title}</CardTitle>
                <div className="flex items-center gap-1 shrink-0">
                  {project.github && (
                    <ExternalLink
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      ariaLabel={`${project.title} GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </ExternalLink>
                  )}
                  {project.url && (
                    <ExternalLink
                      href={project.url}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      ariaLabel={`${project.title} ライブデモ`}
                    >
                      <ExternalLinkIcon className="h-4 w-4" />
                    </ExternalLink>
                  )}
                </div>
              </div>
              <CardDescription className="text-sm leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="text-xs"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
