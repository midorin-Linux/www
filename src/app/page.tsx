import { ProfileSidebar } from "@/components/profile-sidebar";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  return (
    <div className="min-h-screen lg:flex">
      <div className="lg:w-[380px] lg:shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto border-b lg:border-b-0 lg:border-r bg-sidebar">
        <ProfileSidebar />
      </div>

      <main className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-6 py-12 lg:py-16 space-y-16">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <BlogSection />

          <footer className="pt-8 border-t">
            <p className="text-xs text-muted-foreground text-center">
              &copy; {new Date().getFullYear()} midorin-Linux. All rights reserved.
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
