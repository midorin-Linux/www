export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "twitter" | "linkedin" | "mail" | "globe";
}

export interface Skill {
  name: string;
  category: "language" | "framework" | "tool" | "other";
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
}

export interface BlogPost {
  title: string;
  date: string;
  description: string;
  url: string;
}

export interface ProfileData {
  name: string;
  title: string;
  location: string;
  email: string;
  avatarUrl: string;
  bio: string;
  socialLinks: SocialLink[];
  skills: Skill[];
}

export const profile: ProfileData = {
  name: "やあさ",
  title: "学生趣味コーダー",
  location: "東京, 日本",
  email: "moriya@suwako.me (まだ存在しない)",
  avatarUrl: "/avatar.png",
  bio: "自分でも何ができるかはわからないですが、多分いろいろできます。",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/midorin-Linux", icon: "github" },
    { name: "Twitter (X)", url: "https://x.com/wayokan_beta", icon: "twitter" },
  ],
  skills: [
    { name: "Rust", category: "language" },
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "JavaScript", category: "language" },
    { name: "Zig", category: "language" },
    { name: "NASM", category: "language" },
    { name: "Kotlin", category: "language" },
    { name: "C#", category: "language" },
    { name: "CUDA", category: "language" },
    { name: "Scratch", category: "language" },

    { name: "Node.js", category: "framework" },
    { name: "React", category: "framework" },
    { name: "Next.js", category: "framework" },
    { name: "Unity", category: "framework" },
    { name: "Unreal Engine", category: "framework" },
    { name: "Android", category: "framework" },
    { name: "Transformer", category: "framework" },
    { name: "PyTorch", category: "framework" },

    { name: "Docker", category: "tool" },
    { name: "Git", category: "tool" },
    { name: "GCP", category: "tool" },
    { name: "Blender", category: "tool" },
    { name: "Fusion360", category: "tool" },

    { name: "女装", category: "other" },
  ],
};

export const aboutText = `はじめまして。やあさといいます。

1歳からパソコンを触ってるらしく、いわゆるデジタルネイティブ世代だと思います。

主にコーディングを趣味としており、生成AIとサーバー関連などを主軸に学んでいます。ほかにも3Dモデリング、ゲーム開発、個人研究などをしています。

「コミュニティを支える」、「Keep it simple, stupid.」を開発理念としています。`;

export const experiences: Experience[] = [
  {
    title: "現在",
    company: "高1",
    period: "〜 現在",
    description:
      "様々な知識が身に付き、現在に至る。",
    tags: ["Rust", "Python", "TypeScript", "JavaScript", "Node.js", "Zig", "NASM", "Kotlin", "C#", "CUDA", "Unity", "Unreal Engine", "Android", "Transformer", "PyTorch", "React", "Next.js", "GCP", "Blender", "Fusion360", "Docker", "Git", "女装"],
  },
  {
    title: "公に活動開始",
    company: "中1",
    period: "2022年5月 ～",
    description:
      "最初は動画投稿者として活動を開始、まだまだ知識も乏しかった。",
    tags: ["Python", "JavaScript"],
  },
  {
    title: "趣味コーダーの始まり",
    company: "幼稚園生",
    period: "2015年ごろ",
    description:
      "ScratchとPythonを始めました。いまでもアカウントは残ってるんでしょうが見たくはありません。",
    tags: ["Scratch", "Python"],
  },
  {
    title: "誕生",
    company: "赤ちゃん",
    period: "2010年2月13日 午後4時04分",
    description:
      "神奈川県の某所で生まれました。",
    tags: [],
  },
];

export const projects: Project[] = [
  {
    title: "NekoAI",
    description:
      "Discord向けAIエージェント。Rustを基盤とし、Serenity、Rig、Qdrantを使用しています。初心者でもサーバーさえ用意すれば簡単に扱えるプリケーションを目指しています。",
    tags: ["Rust", "Discord", "AI agent", "Vector DB"],
    url: "https://github.com/midorin-Linux/NekoAI",
    github: "https://github.com/midorin-Linux/NekoAI",
  },
];

export interface SkillCategory {
  category: string;
  items: { name: string; level: number; description: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "言語",
    items: [
      {
        name: "Rust",
        level: 45,
        description: "メイン言語。サーバーサイドを開発。",
      },
      {
        name: "Python",
        level: 40,
        description: "ML用途。アーキテクチャから言語モデルを構築するための勉強中。",
      },
      {
        name: "C#",
        level: 35,
        description: "現在はUnityで主に使用。",
      },
      {
        name: "JavaScript",
        level: 20,
        description: "世界がJavaScriptを使うから仕方なく。",
      },
    ],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "personaplex-7b-v1をVRAM8GBでも動かす方法",
    date: "2026年02月16日",
    description:
      "初投稿の記事。personaplex-7b-v1の最適化方法について書いています。",
    url: "https://qiita.com/midorin-Linux/items/73dc9e0c5e67256f302c",
  },
];
