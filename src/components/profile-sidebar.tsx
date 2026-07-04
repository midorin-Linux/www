import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { SiHuggingface } from "react-icons/si"
import type { IconType } from "react-icons"
import { Badge } from "@/components/ui/badge.tsx"
import { ChevronDown, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider.tsx"
import type { ReactNode } from "react"

interface SocialLink {
  icon: IconType
  href: string
  label: string
  tooltip: string
}

const socialLinks: SocialLink[] = [
  {
    icon: FaTwitter,
    href: "https://x.com/i/user/1694095021862199297",
    label: "X (Twitter) を開く: wayokan_beta",
    tooltip: "wayokan_beta",
  },
  {
    icon: FaGithub,
    href: "https://github.com/midorin-Linux",
    label: "GitHub を開く: midorin-Linux",
    tooltip: "midorin-Linux",
  },
  {
    icon: SiHuggingface,
    href: "https://huggingface.co/midorin-Linux",
    label: "Hugging Face を開く: midorin-Linux",
    tooltip: "midorin-Linux",
  },
]

function ProfileSidebarLinks() {
  return (
    <>
      {socialLinks.map(({ icon: Icon, href, label, tooltip }) => (
        <Tooltip key={href}>
          <TooltipTrigger asChild>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <Icon size={24} />
            </a>
          </TooltipTrigger>
          <TooltipContent side={"top"}>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </>
  )
}

interface Skills {
  natural_languages: string[]
  programming_languages: string[]
  frameworks: string[]
  tools: string[]
}

interface SkillCategoryProps {
  title: string
  tooltip: string
  items: string[]
  dotClassName: string
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
      {children}
    </h2>
  )
}

function SkillCategory({
  title,
  tooltip,
  items,
  dotClassName,
}: SkillCategoryProps) {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <h3 className="mb-1 flex items-center gap-1.5 text-xs font-normal tracking-wider text-muted-foreground">
            <span
              aria-hidden="true"
              className={`inline-block h-1.5 w-1.5 shrink-0 rounded-full ${dotClassName}`}
            />
            {title}
          </h3>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant={"secondary"}
            className="bg-primary/10 text-xs font-light transition-colors hover:bg-primary/20"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}

interface CollapsibleSectionProps {
  title: string
  children: ReactNode
}

// Collapsible on small screens (native <details>); always expanded from lg up.
function CollapsibleSection({ title, children }: CollapsibleSectionProps) {
  return (
    <details className="group w-full" open>
      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md py-1 transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none lg:hidden [&::-webkit-details-marker]:hidden">
        <SectionHeading>{title}</SectionHeading>
        <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
      </summary>
      <div className="mt-2 lg:mt-0! lg:block!">
        <div className="hidden lg:mb-2 lg:block">
          <SectionHeading>{title}</SectionHeading>
        </div>
        {children}
      </div>
    </details>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        isDark ? "ライトモードに切り替える (d)" : "ダークモードに切り替える (d)"
      }
      className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{isDark ? "ライトモード" : "ダークモード"}</span>
    </button>
  )
}

export function ProfileSidebar() {
  const ProfileSidebarSkills: Skills = {
    natural_languages: [
      "Japanese",
      "English",
      "German",
      "Russian",
      "Latin",
      "Thai",
      "Vietnamese",
      "Taiwanese",
    ],
    programming_languages: [
      "Rust",
      "Python",
      "TypeScript",
      "JavaScript",
      "Kotlin",
      "C#",
      "Java",
      "CUDA",
      "Zig",
      "NASM",
    ],
    frameworks: [
      "Axum",
      "Tokio",
      "Tauri 2.0",
      "Flask",
      "FastAPI",
      "Transformer",
      "PyTorch",
      "TensorFlow",
      "NumPy",
      "Matplotlib",
      "Next.js",
      "React",
      "Express.js",
      "Spring Boot",
      "Unity",
      "Android SDK",
    ],
    tools: [
      "AviUtil 2",
      "Blender",
      "Docker",
      "Fusion 360",
      "Git",
      "IDA",
      "PostgreSQL",
      "Qdrant",
      "VMware",
      "YMM4",
    ],
  }

  const skillCategories: {
    title: string
    tooltip: string
    items: string[]
    dotClassName: string
  }[] = [
    {
      title: "Natural languages",
      tooltip: "話せる順",
      items: ProfileSidebarSkills.natural_languages,
      dotClassName: "bg-sky-500",
    },
    {
      title: "Programming languages",
      tooltip: "書ける順",
      items: ProfileSidebarSkills.programming_languages,
      dotClassName: "bg-emerald-500",
    },
    {
      title: "Frameworks",
      tooltip: "書ける言語順",
      items: ProfileSidebarSkills.frameworks,
      dotClassName: "bg-violet-500",
    },
    {
      title: "Tools",
      tooltip: "A-Z順",
      items: ProfileSidebarSkills.tools,
      dotClassName: "bg-amber-500",
    },
  ]

  return (
    <aside
      aria-label="プロフィール"
      className="flex w-full flex-col gap-6 border-b bg-sidebar p-6 lg:sticky lg:top-0 lg:h-screen lg:w-80 lg:shrink-0 lg:border-r lg:border-b-0 xl:w-96"
    >
      <div className="flex shrink-0 flex-col items-start gap-4">
        <div className="relative h-40 w-full sm:h-60">
          <img
            src="/avatar.jpg"
            alt="やあさのアバター"
            className="h-40 w-40 rounded-full object-cover shadow-xl sm:h-60 sm:w-60"
          />
          <div className="absolute inset-0 top-28 left-12 flex rotate-345 items-center justify-center sm:top-45 sm:left-20">
            <span className="shrink-0 bg-black/40 px-2 text-xl font-semibold tracking-wider text-white sm:text-3xl">
              Salvation!
            </span>
          </div>
        </div>
        <div className="text-left">
          <Tooltip>
            <TooltipTrigger className="text-2xl font-medium tracking-tight">
              やあさ
            </TooltipTrigger>
            <TooltipContent side={"right"}>
              <p>別名: みどりん</p>
            </TooltipContent>
          </Tooltip>
          <div className="flex flex-row gap-2">
            <p className="font-medium text-muted-foreground">
              学生趣味コーダー
            </p>
            <div className="my-auto mt-1 flex items-center justify-center gap-1 text-sm text-muted-foreground lg:justify-start">
              <span>he/him</span>
            </div>
          </div>
        </div>

        <p className="text-center text-sm leading-relaxed text-muted-foreground lg:text-left">
          自分でも何ができるかはわからないですが、多分いろいろできます。
        </p>
      </div>

      <div className="scrollbar-thin flex min-h-0 w-full flex-1 flex-col gap-6 lg:overflow-y-auto">
        <div>
          <div className="mb-3">
            <SectionHeading>Links</SectionHeading>
          </div>
          <div className="flex flex-wrap gap-2">
            <ProfileSidebarLinks />
          </div>
        </div>

        <CollapsibleSection title="Skills">
          <div className="flex flex-wrap gap-4 lg:ml-2">
            {skillCategories.map((category) => (
              <SkillCategory key={category.title} {...category} />
            ))}
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Contact">
          <a
            href={`mailto:moriya@suwako.me`}
            className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <Mail className="h-3.5 w-3.5" />
            moriya@suwako.me
          </a>
        </CollapsibleSection>
      </div>

      <div className="w-full shrink-0 border-t pt-4">
        <ThemeToggle />
      </div>
    </aside>
  )
}
