import { blogPosts } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "@/components/ui/external-link";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowUpRight, Calendar } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog">
      <SectionHeader title="Blog" />
      <div className="space-y-3">
        {blogPosts.map((post, i) => (
          <ExternalLink
            key={i}
            href={post.url}
            className="block group"
          >
            <Card className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors truncate">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1 mb-2">
                      <Calendar className="h-3 w-3 text-muted-foreground shrink-0" />
                      <span className="text-xs text-muted-foreground">
                        {post.date}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-0.5" />
                </div>
              </CardContent>
            </Card>
          </ExternalLink>
        ))}
      </div>
    </section>
  );
}
