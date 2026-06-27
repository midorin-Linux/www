import { ProfileSidebar } from "@/components/profile-sidebar.tsx"
import { TweetFrame } from "@/components/tweet-frame.tsx"
import { Separator } from "@/components/ui/separator.tsx"

export function App() {
  return (
    <div className="flex min-h-screen">
      <div className="sticky top-0 h-screen w-100 shrink-0 overflow-y-auto border-r border-b-0 bg-sidebar">
        <ProfileSidebar />
      </div>

      <main className="flex min-h-screen min-w-0 flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 items-center justify-center px-6 py-16">
          <div className="w-full max-w-4xl">
            <TweetFrame username="wayokan_beta" />
          </div>
        </div>

        <footer className="mx-auto w-full max-w-6xl px-6 py-4">
          <Separator className="my-4" />
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} midorin-Linux. All rights
            reserved.
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
