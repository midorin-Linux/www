"use client";

import React from "react";
import Image from "next/image";
import {
  Github,
  Twitter,
  Mail,
  Linkedin,
  Globe,
  User,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "@/components/ui/external-link";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";
import type { SocialLink } from "@/lib/data";

const iconMap: Record<SocialLink["icon"], React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
  mail: Mail,
  globe: Globe,
};

function SocialButton({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon];
  if (!Icon) return null;
  return (
    <ExternalLink href={link.url} ariaLabel={link.name}>
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 text-muted-foreground hover:text-foreground cursor-pointer"
      >
        <Icon className="h-4 w-4" />
      </Button>
    </ExternalLink>
  );
}

export function ProfileSidebar() {
  const [avatarError, setAvatarError] = React.useState(false);

  return (
    <aside className="flex flex-col items-center lg:items-start gap-6 p-6 lg:p-8">
      <div className="self-end">
        <ThemeToggle />
      </div>

      <div className="relative h-32 w-32 lg:h-40 lg:w-40 overflow-hidden rounded-full border-4 border-border shadow-lg">
        {avatarError ? (
          <div className="flex h-full w-full items-center justify-center bg-muted">
            <User className="h-12 w-12 text-muted-foreground" />
          </div>
        ) : (
          <Image
            src={profile.avatarUrl}
            alt={profile.name}
            fill
            className="object-cover"
            priority
            unoptimized
            onError={() => setAvatarError(true)}
          />
        )}
      </div>

      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
        <p className="mt-1 text-muted-foreground font-medium">
          {profile.title}
        </p>
        <div className="mt-2 flex items-center justify-center lg:justify-start gap-1 text-sm text-muted-foreground">
          <span>he/him</span>
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed text-center lg:text-left">
        {profile.bio}
      </p>

      <Separator />

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Links
        </h2>
        <div className="flex flex-wrap gap-1">
          {profile.socialLinks.map((link) => (
            <SocialButton key={link.name} link={link} />
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Skills
        </h2>
        <div className="flex flex-wrap gap-1.5">
          {profile.skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="secondary"
              className="text-xs font-medium"
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
          Contact
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Mail className="h-3.5 w-3.5" />
          {profile.email}
        </a>
      </div>
    </aside>
  );
}
