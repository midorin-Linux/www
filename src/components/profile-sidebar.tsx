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

  return (
    <aside className="flex flex-col items-start gap-4 p-8">
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
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Natural languages
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>話せる順</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex flex-wrap gap-1.5">
              {ProfileSidebarSkills.natural_languages.map((language) => (
                <Badge
                  key={language}
                  variant={"secondary"}
                  className="bg-primary/10 text-xs font-normal"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Programming languages
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>書ける順</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex flex-wrap gap-1.5">
              {ProfileSidebarSkills.programming_languages.map((language) => (
                <Badge
                  key={language}
                  variant={"secondary"}
                  className="bg-primary/10 text-xs font-normal"
                >
                  {language}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Frameworks
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>書ける言語順</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex flex-wrap gap-1.5">
              {ProfileSidebarSkills.frameworks.map((framework) => (
                <Badge
                  key={framework}
                  variant={"secondary"}
                  className="bg-primary/10 text-xs font-normal"
                >
                  {framework}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="mb-1 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                  Tools
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>A-Z順</p>
              </TooltipContent>
            </Tooltip>
            <div className="flex flex-wrap gap-1.5">
              {ProfileSidebarSkills.tools.map((tool) => (
                <Badge
                  key={tool}
                  variant={"secondary"}
                  className="bg-primary/10 text-xs font-normal"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div>
        <h2 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
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