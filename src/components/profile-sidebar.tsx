import { Separator } from "@/components/ui/separator.tsx"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx"
import { FaGithub, FaTwitter } from "react-icons/fa"
import { SiHuggingface } from "react-icons/si"
import { Badge } from "@/components/ui/badge.tsx"
import { Mail } from "lucide-react"

function ProfileSidebarLinks() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaTwitter
            size={28}
            className="cursor-pointer text-muted-foreground hover:text-foreground"
            onClick={() =>
              window.open("https://x.com/i/user/1694095021862199297", "_blank")
            }
          />
        </TooltipTrigger>
        <TooltipContent side={"top"}>
          <p>wayokan_beta</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaGithub
            size={28}
            className="cursor-pointer text-muted-foreground hover:text-foreground"
            onClick={() =>
              window.open("https://github.com/midorin-Linux", "_blank")
            }
          />
        </TooltipTrigger>
        <TooltipContent side={"top"}>
          <p>midorin-Linux</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <SiHuggingface
            size={28}
            className="cursor-pointer text-muted-foreground hover:text-foreground"
            onClick={() =>
              window.open("https://huggingface.co/midorin-Linux", "_blank")
            }
          />
        </TooltipTrigger>
        <TooltipContent side={"top"}>
          <p>midorin-Linux</p>
        </TooltipContent>
      </Tooltip>
    </>
  )
}

interface Skills {
  natural_languages: string[];
  programming_languages: string[];
  frameworks: string[];
  tools: string[];
}

interface SkillCategoryProps {
  title: string;
  tooltip: string;
  items: string[];
}

function SkillCategory({ title, tooltip, items }: SkillCategoryProps) {
  return (
    <div>
      <Tooltip>
        <TooltipTrigger>
          <h3 className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
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
            className="bg-primary/10 text-xs font-normal"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function ProfileSidebar() {
  const ProfileSidebarSkills: Skills = {
    natural_languages: [
      "Japanese",
      "English",
      "German",
      "Russian",
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
      "NASM"
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
      "Android SDK"
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

  const skillCategories: { title: string; tooltip: string; items: string[] }[] = [
    { title: "Natural languages", tooltip: "話せる順", items: ProfileSidebarSkills.natural_languages },
    { title: "Programming languages", tooltip: "書ける順", items: ProfileSidebarSkills.programming_languages },
    { title: "Frameworks", tooltip: "書ける言語順", items: ProfileSidebarSkills.frameworks },
    { title: "Tools", tooltip: "A-Z順", items: ProfileSidebarSkills.tools },
  ]

  return (
    <aside className="flex h-full max-h-screen flex-col items-start gap-3 p-4">
      <div className="mx-4 mt-4 flex shrink-0 flex-col items-start gap-4">
        <div>
          <img
            src="/avatar.png"
            alt="アニメ化された諏訪子の女装をしている男子高校生"
            className="h-60 w-60 rounded-full object-cover shadow-xl"
          />
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
          <p className="mt-1 font-medium text-muted-foreground">
            学生趣味コーダー
          </p>
          <div className="mt-2 flex items-center justify-center gap-1 text-sm text-muted-foreground lg:justify-start">
            <span>he/him</span>
          </div>
        </div>

        <p className="text-center text-sm leading-relaxed text-muted-foreground lg:text-left">
          自分でも何ができるかはわからないですが、多分いろいろできます。
        </p>

        <Separator />
      </div>

      <div className="flex min-h-0 w-full flex-1 flex-col gap-3 overflow-y-auto px-4 scrollbar-thin">
        <div>
          <h2 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Links
          </h2>
          <div className="flex flex-wrap gap-4">
            <ProfileSidebarLinks />
          </div>
        </div>
        <Separator />
        <div>
          <h2 className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Skills
          </h2>
          <div className="mt-2 ml-2 flex flex-wrap gap-4">
            {skillCategories.map((category) => (
              <SkillCategory key={category.title} {...category} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 mb-4 w-full">
        <Separator />

        <h2 className="mb-3 mt-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
          Contact
        </h2>
        <a
          href={`mailto:moriya@suwako.me`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Mail className="h-3.5 w-3.5" />
          moriya@suwako.me
        </a>
      </div>
    </aside>
  )
}